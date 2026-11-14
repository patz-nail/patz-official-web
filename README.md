# patz-official-web

## Nail MBTI

`/nail-mbti` is reverse-proxied to `https://patz-nail-mbti.vercel.app` through
`next.config.ts`. The repositories and Vercel projects remain separate.
All `/nail-mbti/*` requests (including assets and analytics) use the nail project.
Use a normal `<a href="/nail-mbti">` for links between the two applications.

Deploy the updated nail project first, then deploy this project. Verify the quiz,
images, result-image saving, and analytics on `https://patz.kr/nail-mbti`.
Future nail-only releases require deploying only the nail repository.
