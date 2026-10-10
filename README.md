# Talenquesta Website

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Lucide icons. Vercel-ready.

## Run locally
1. Install Node.js 20 LTS from nodejs.org.
2. In this folder: `npm install`
3. `cp .env.example .env.local` (Windows: `copy .env.example .env.local`)
4. `npm run dev` → open http://localhost:3000
5. Test a production build: `npm run build && npm start`

## Configure (all in `config/site.ts`)
- **`applicationFormUrl`**: paste your published Google Form link (https). Until set, Apply buttons show "Applications opening soon".
- Per-domain control: add a slug to `programOverrides` (e.g. `"cyber-security": { status: "closed" }`), or set `available: false` in `config/programs.ts` for Coming Soon.
- Domain content (tasks, resources, deliverables): `config/programs.ts`.

Older notes:
- `contactEmail`: your real email (empty = "coming soon" is shown).
- `programSettings["data-analytics"]` and `["python"]`: `applyUrl` (your Google Form link, https only), `status` (set to `"open"` to show the Apply button), `duration`, `fee`, `certificateTerms`.
- If `applyUrl` is empty or status is not `"open"`, the site shows "Applications opening soon". No fake links.
- Program content: `config/programs.ts`. To launch a Coming Soon domain, set `available: true`, fill its fields and add it to `programSettings`.

## Upload to GitHub
1. Create an empty repository on github.com (no README).
2. `git init && git add . && git commit -m "Initial Talenquesta site"`
3. `git branch -M main`
4. `git remote add origin https://github.com/YOUR-USERNAME/talenquesta.git`
5. `git push -u origin main`

## Deploy to Vercel
1. Sign in at vercel.com with GitHub → Add New → Project → import the repo.
2. Framework is auto-detected as Next.js. Leave defaults.
3. Add env var `NEXT_PUBLIC_SITE_URL` = your final URL (e.g. https://your-domain.com).
4. Deploy. Every push to `main` redeploys.

## Custom domain
1. Vercel project → Settings → Domains → add your domain.
2. Add the DNS records Vercel shows (A record for the root domain, CNAME for `www`) at your registrar.
3. Update `NEXT_PUBLIC_SITE_URL` to the domain and redeploy so sitemap and Open Graph URLs are correct.

## Before launch
Review Privacy Policy and Terms with a qualified person, finalise durations, fees and certificate rules, and set a real contact email.
