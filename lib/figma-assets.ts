// Figma asset paths (downloaded via Figma desktop MCP into public/figma/).
// Filenames are content hashes — that way assets shared across nodes naturally dedup.
// Source manifest: public/figma/manifest.json

const F = (name: string) => `/figma/${name}`;

// Icons
export const ICON_APPLE = F("c630a14f018d2380e36ef3a0af8b8ca04b9205d2.svg");
export const ICON_SCROLL_DOWN = F("c83f86eb6de2bc1f620afe9b92faf7e6ed3dc6ee.svg");
export const ICON_PLUS = F("7a69a4e50809aac095a45bbfa72db4dbf191e381.svg");
export const ICON_CHECK = F("4d00d69f14c62f7ca9e0f26abbd43f6447ac402f.svg");

// Logos
export const LOGO_NAV_DROPLET = F("de11ddbbf13725a2f3fa24760966b4c205b0789b.svg");
export const LOGO_NAV_WORDMARK = F("42746f3ec899b01a186018d979c0470b479ca2e1.svg");
export const LOGO_FOOTER = F("5df121fe8617a9697745c9bcbcf507b32ec4347b.svg");
export const LOGO_PAINPOINTS_LARGE = F("05ba2e4b4425aefa556926634448c832b71828c8.svg");

// Decorative ellipses / blob groups
export const BLOB_HERO = F("84129e3b4180b92351b2ad1dc6227f70ae4827a6.svg");
export const ELLIPSE_PROBLEM = F("caa7230ce4fc5c89c6b078aa1569316d58154977.svg");
export const ELLIPSE_PAINPOINTS = F("fc36dbf2159cfbf0a4c2176ee13ff9864139258b.svg");
export const BLOB_FAQ = F("0e41397b5147cb2166c149ca22e9674cb4ba9340.svg");
export const BLOB_FINAL_CTA = F("c6e3228381181a8f9aa24916a92f4d8a0be6c6d1.svg");

// iPhone mockup shared layers
export const PHONE_CHROME = F("9a13421efcecf23aa06e81ad777ac0c96cd39d08.png");
export const PHONE_CAMERA = F("9d77be3f2640eae14e306f9ef7ab95ea7c90ec9d.png");

// Feature mockup screens
export const SCREEN_ONBOARDING = F("e83714dfa5bab56d01568bac09c145c2201a87da.png");
export const SCREEN_HOME = F("c0a7f96e4befae39f270c18004057d223e0f7a08.png");
export const SCREEN_SEARCH = F("c91bad2fa891de76310a2996161a44ccb73692bc.png");
export const SCREEN_LOCATION = F("ad9188e439ef0c61f80e935b96eeab19f0127274.png");
// Community screen reuses the onboarding base (e83714df...) with an overlay.
export const SCREEN_COMMUNITY_OVERLAY = F("5bdb0ce623c74df6a4723b5e792bb01ca04cd30c.png");

// PainPoints mockups — non-standard composites in Figma; we substitute their primary
// screen image into the shared PhoneMockup frame for fidelity at lower complexity.
export const SCREEN_PAINPOINTS_BACK = F("1f907c727f33d5604a8e47e591f8ed0012f8bfbe.png");
export const SCREEN_PAINPOINTS_FRONT = F("3db85d9b10bab10c507879bb900bc40b83415219.png");

// Photo
export const PHOTO_NAIL = F("836e3f387ed4d41d10aedcb09f35f8b201330805.png");
