export const meta = {
  name: 'patz-build',
  description:
    'Build PATZ landing page with 4-role orchestration: developer → designer (Figma fidelity + mobile spec) → developer (mobile pass) → UX tester → security engineer.',
  phases: [
    { title: 'Implement (desktop)' },
    { title: 'Design review + mobile spec' },
    { title: 'Apply mobile + design fixes' },
    { title: 'UX testing' },
    { title: 'Security audit' },
  ],
}

const REPO = '/Users/eunvv8/Documents/GitHub/patz-official-web'

const DEV_SCHEMA = {
  type: 'object',
  required: ['files_written', 'notes'],
  additionalProperties: false,
  properties: {
    files_written: {
      type: 'array',
      items: { type: 'string' },
      description: 'Absolute or repo-relative paths of files this agent created or modified.',
    },
    notes: {
      type: 'string',
      description: 'Brief notes about deviations from the brief, ambiguities, or things the next reviewer should know.',
    },
  },
}

const DESIGN_SCHEMA = {
  type: 'object',
  required: ['desktop_findings', 'mobile_spec'],
  additionalProperties: false,
  properties: {
    desktop_findings: {
      type: 'array',
      description: 'Discrepancies between the built desktop implementation and the Figma reference.',
      items: {
        type: 'object',
        required: ['severity', 'file', 'issue', 'fix'],
        additionalProperties: false,
        properties: {
          severity: { type: 'string', enum: ['critical', 'major', 'minor', 'nit'] },
          file: { type: 'string', description: 'Repo-relative file the issue is in.' },
          issue: { type: 'string', description: 'What is wrong — concrete, with line context if possible.' },
          fix: { type: 'string', description: 'Specific code change the dev should apply.' },
        },
      },
    },
    mobile_spec: {
      type: 'object',
      required: ['breakpoint', 'changes'],
      additionalProperties: false,
      properties: {
        breakpoint: {
          type: 'string',
          description: 'Tailwind breakpoint(s) at which mobile changes apply (e.g. "default + md:").',
        },
        changes: {
          type: 'array',
          description: 'Per-component mobile redesign instructions for the next dev pass.',
          items: {
            type: 'object',
            required: ['file', 'rationale', 'tailwind_changes'],
            additionalProperties: false,
            properties: {
              file: { type: 'string', description: 'Repo-relative component file.' },
              rationale: {
                type: 'string',
                description: 'Why this mobile change makes sense for the section (1-2 sentences).',
              },
              tailwind_changes: {
                type: 'array',
                items: { type: 'string' },
                description:
                  'Concrete instructions: e.g. "Wrap two-column row in flex-col md:flex-row; reduce H1 to text-[36px] md:text-[64px]; hide decorative blob ellipses below md".',
              },
            },
          },
        },
      },
    },
  },
}

const UX_SCHEMA = {
  type: 'object',
  required: ['build_status', 'findings'],
  additionalProperties: false,
  properties: {
    build_status: {
      type: 'object',
      required: ['typecheck', 'lint', 'dev_server'],
      additionalProperties: false,
      properties: {
        typecheck: { type: 'string', enum: ['pass', 'fail', 'skipped'] },
        lint: { type: 'string', enum: ['pass', 'fail', 'skipped'] },
        dev_server: { type: 'string', enum: ['booted', 'failed', 'skipped'] },
      },
    },
    findings: {
      type: 'array',
      items: {
        type: 'object',
        required: ['severity', 'area', 'issue', 'suggested_fix'],
        additionalProperties: false,
        properties: {
          severity: { type: 'string', enum: ['critical', 'major', 'minor', 'nit'] },
          area: {
            type: 'string',
            enum: [
              'rendering',
              'interaction',
              'accessibility',
              'responsive',
              'performance',
              'content',
              'other',
            ],
          },
          issue: { type: 'string' },
          suggested_fix: { type: 'string' },
        },
      },
    },
  },
}

const SEC_SCHEMA = {
  type: 'object',
  required: ['findings', 'audit_summary'],
  additionalProperties: false,
  properties: {
    audit_summary: { type: 'string' },
    findings: {
      type: 'array',
      items: {
        type: 'object',
        required: ['severity', 'category', 'file', 'issue', 'fix'],
        additionalProperties: false,
        properties: {
          severity: { type: 'string', enum: ['critical', 'high', 'medium', 'low', 'info'] },
          category: {
            type: 'string',
            enum: [
              'xss',
              'injection',
              'dependency',
              'secret',
              'csp',
              'next-config',
              'auth',
              'other',
            ],
          },
          file: { type: 'string' },
          issue: { type: 'string' },
          fix: { type: 'string' },
        },
      },
    },
  },
}

const BRIEFS = [
  {
    slug: 'nav-hero',
    brief: '01-nav-hero',
    files: ['components/Nav.tsx', 'components/Hero.tsx'],
    figmaNodes: '1469:3051 (full top viewport), 1469:3052 (nav), 1469:3162 (hero copy)',
  },
  {
    slug: 'problem-painpoints',
    brief: '02-problem-painpoints',
    files: ['components/Problem.tsx', 'components/PainPoints.tsx'],
    figmaNodes: '1469:3153 (problem), 1481:3181 (painpoints)',
  },
  {
    slug: 'features',
    brief: '03-features',
    files: ['components/Features.tsx'],
    figmaNodes: '1503:8938 (full features), 1481:3394, 1481:3395, 1481:3424, 1481:3473, 1481:3502',
  },
  {
    slug: 'faq-cta-footer',
    brief: '04-faq-cta-footer',
    files: ['components/Faq.tsx', 'components/FinalCta.tsx', 'components/Footer.tsx'],
    figmaNodes: '1481:3552 (FAQ), 1502:3627 (CTA + footer)',
  },
]

function devPrompt(b) {
  return `You are a senior frontend engineer on the PATZ landing page build.

Working directory: ${REPO}
Brief: ${REPO}/briefs/${b.brief}.md  — READ THIS FIRST (it links to ${REPO}/briefs/_shared.md, read that too).

Your job: write these files based on the brief:
${b.files.map((f) => `  - ${REPO}/${f}`).join('\n')}

These component files are imported by ${REPO}/app/page.tsx — do not edit page.tsx.
Do not edit any sibling component file outside the list above (other agents own those).

Process:
1. Read the brief and _shared.md.
2. Call get_design_context on the Figma node IDs (${b.figmaNodes}) to see the latest design.
3. Implement the components in TypeScript + Tailwind v4 (tokens already defined in app/globals.css).
4. Build pixel-faithful at the 1440px desktop canvas. DO NOT add mobile responsive classes — that comes later.
5. Do NOT run \`tsc\` here — other dev agents are writing sibling files in parallel and a workspace-wide typecheck would fail spuriously. The UX tester will run typecheck once everyone is done.

Return your structured result.`
}

function designPrompt(b, devResult) {
  return `You are a senior product designer reviewing the PATZ landing page.

Working directory: ${REPO}

Section: ${b.slug}
Brief the dev followed: ${REPO}/briefs/${b.brief}.md
Files the dev wrote: ${(devResult?.files_written ?? b.files).join(', ')}
Dev notes: ${devResult?.notes ?? '(none)'}

Figma reference node IDs: ${b.figmaNodes}

Your two deliverables (per the schema):

1) DESKTOP FIDELITY REVIEW:
   - Call get_design_context (and get_screenshot if helpful) on the Figma node IDs above.
   - Read each dev-written file in ${REPO}/${b.files[0].split('/')[0]}/.
   - Compare typography sizes, colors, spacing, layout, and presence of all required elements.
   - List every discrepancy with file path, issue, and the EXACT code change to fix it.
   - Be concrete; do not say "make it look more like Figma". Say e.g. "Hero.tsx headline is text-[48px], should be text-[64px] to match Figma node 1469:3126."

2) MOBILE SPEC (this is the user's explicit ask — be thorough):
   - The dev only built desktop. You decide how each component adapts to mobile (target: 375px viewport, Tailwind \`md:\` breakpoint at 768px).
   - Use sensible mobile patterns: stack two-column layouts vertically, reduce headline font-sizes by ~40%, reduce padding, hide or simplify decorative ellipses/blobs, make CTAs full-width on mobile.
   - For each file, list specific Tailwind class changes (additions/replacements). Phrase them as instructions a developer can apply mechanically.
   - Examples of good instructions:
     - "In Hero.tsx, change H1 \`text-[64px]\` to \`text-[36px] md:text-[64px]\`."
     - "In Features.tsx, wrap each feature block's two-column row in \`flex flex-col md:flex-row gap-12 md:gap-24\`."
     - "In Nav.tsx, hide the center menu below md (\`hidden md:flex\`) and add a simple hamburger icon button visible only below md."

Return your structured result.`
}

function mobilePrompt(b, designResult) {
  return `You are a senior frontend engineer applying design-review changes.

Working directory: ${REPO}

Section: ${b.slug}
Files you may edit: ${b.files.join(', ')}
Do not edit anything outside that list.

You have two batches of changes to apply from the design review:

A) DESKTOP FIDELITY FIXES (apply every \`major\` and \`critical\`; apply \`minor\`/\`nit\` if quick):
${JSON.stringify(designResult?.desktop_findings ?? [], null, 2)}

B) MOBILE RESPONSIVENESS (apply every change):
${JSON.stringify(designResult?.mobile_spec ?? {}, null, 2)}

Process:
1. Read each file once.
2. Apply the desktop fidelity fixes first.
3. Then apply the mobile Tailwind class additions. The pattern is: replace \`text-[64px]\` with \`text-[36px] md:text-[64px]\`, \`flex flex-row\` with \`flex flex-col md:flex-row\`, etc. Default mobile, override at \`md:\`.
4. Do NOT run \`tsc\` here — other mobile-pass agents are editing sibling files concurrently and a workspace-wide typecheck would fail spuriously. The UX tester will run typecheck once everyone is done.

Return your structured result.`
}

function uxPrompt() {
  return `You are a UX tester for the PATZ landing page.

Working directory: ${REPO}

Process:
1. Run \`cd ${REPO} && npx tsc --noEmit\` to check typecheck. Capture pass/fail.
2. Run \`cd ${REPO} && npx eslint . --ext .ts,.tsx --max-warnings 0\` (or fall back to \`npm run lint\`) to check lint. Capture pass/fail. Do not fix lint here — just report.
3. Try \`cd ${REPO} && npm run build\` to verify the production build compiles. If it fails, that is a critical finding. (You can skip this if typecheck fails — note "skipped" in build_status.dev_server is fine; we want to know whether the app can build.)
4. Boot \`cd ${REPO} && npm run dev\` in the background with a sane timeout (use Bash run_in_background). Wait until it logs "Ready". Then use Bash + curl to fetch http://localhost:3000 and inspect the HTML:
   - All 8 component sections render (Nav, Hero, Problem, PainPoints, Features × 5 blocks, Faq, FinalCta, Footer).
   - Anchor IDs exist: #service, #support.
   - Korean text is present (sample a few quotes from briefs).
   - No "Cannot read", "undefined", or hydration errors in the dev server log.
5. (Optional, only if quick) Install playwright (\`npx playwright install chromium\` is heavy — skip unless needed). If you skip browser testing, note that in findings as a known gap.

Inspect the code itself for these UX checks:
- FAQ (\`components/Faq.tsx\`) is keyboard-accessible (aria-expanded, aria-controls, button elements not divs, Enter/Space work).
- Nav links are real \`<a href="#section">\` with valid anchor targets.
- Images/decorative SVGs have \`aria-hidden\` or \`alt\`.
- Headings follow a sane hierarchy (one h1, then h2/h3).
- Color contrast: spot-check brand-pink (#e8175d) on white meets WCAG AA for large text.
- Mobile responsiveness: skim each component for \`md:\` classes — the design pass should have added them. Flag any component that still looks desktop-only.

Kill the dev server when done.

Return a structured report. Be specific — file:line where possible.`
}

function secPrompt() {
  return `You are a security engineer auditing the PATZ landing page.

Working directory: ${REPO}

Run these checks:
1. \`cd ${REPO} && npm audit --json\` (parse the output; report any moderate+ vulns).
2. Grep for risky patterns: \`grep -rE "dangerouslySetInnerHTML|eval\\(|new Function\\(|innerHTML" ${REPO}/app ${REPO}/components || true\`
3. Grep for secrets: \`grep -rE "(api[_-]?key|secret|password|token|bearer)" ${REPO}/app ${REPO}/components ${REPO}/next.config.* 2>/dev/null || true\` — false positives are fine; flag only real-looking ones.
4. Read \`${REPO}/next.config.ts\` (or .js/.mjs). Check for missing security headers, unsafe \`images.remotePatterns\`, \`unstable_*\` flags, \`reactStrictMode: false\`.
5. Check the HTML output (curl http://localhost:3000 if a server is up; otherwise reason from code) for: missing CSP, missing \`X-Frame-Options\`-equivalent, missing \`Strict-Transport-Security\`, absent \`rel="noopener noreferrer"\` on external links.
6. Read every file under \`${REPO}/components/\` and look for: external network calls without sanitization, user input rendering without escaping (none expected since this is a static landing page — but verify).
7. Check that no .env file has been committed (run \`ls -la ${REPO}\`).

For each issue found, return severity, category, file, issue description, and the exact fix.

If you find nothing material (good — this is a static marketing site), still return audit_summary with what you checked and confirm clean.`
}

phase('Implement (desktop)')

const results = await pipeline(
  BRIEFS,
  async (b) => {
    const dev = await agent(devPrompt(b), {
      label: `dev:${b.slug}`,
      phase: 'Implement (desktop)',
      schema: DEV_SCHEMA,
    })
    return { brief: b, dev }
  },
  async ({ brief, dev }) => {
    const design = await agent(designPrompt(brief, dev), {
      label: `design:${brief.slug}`,
      phase: 'Design review + mobile spec',
      schema: DESIGN_SCHEMA,
    })
    return { brief, dev, design }
  },
  async ({ brief, dev, design }) => {
    const mobile = await agent(mobilePrompt(brief, design), {
      label: `mobile:${brief.slug}`,
      phase: 'Apply mobile + design fixes',
      schema: DEV_SCHEMA,
    })
    return { brief, dev, design, mobile }
  }
)

phase('UX testing')
const ux = await agent(uxPrompt(), {
  label: 'ux-tester',
  phase: 'UX testing',
  schema: UX_SCHEMA,
})

phase('Security audit')
const sec = await agent(secPrompt(), {
  label: 'security-engineer',
  phase: 'Security audit',
  schema: SEC_SCHEMA,
})

return {
  sections: results.map((r) =>
    r
      ? {
          slug: r.brief.slug,
          dev_initial: r.dev,
          design_review: r.design,
          dev_mobile_pass: r.mobile,
        }
      : null
  ),
  ux,
  security: sec,
}
