# Live2CallEm — Landing Page

A modern, dark-themed landing page for **Live2CallEm**, an AI receptionist service
for HVAC and local home-service businesses. Built with **React + Vite + Tailwind CSS**.

```
┌─────────────────────────────────────────────┐
│  Hero  →  Pain Points  →  Features          │
│  How it Works  →  Demo CTA  →  FAQ          │
│  Final CTA  →  Footer                       │
└─────────────────────────────────────────────┘
```

---

## What's inside

- **Vite + React 18** — fast dev server, optimized production builds
- **Tailwind CSS v3** — utility-first styling, fully responsive
- **Custom dark theme** — ink palette + electric green "signal" accent
- **Editorial typography** — Geist (sans) paired with Instrument Serif (italic accents)
- **Scroll-triggered animations** — IntersectionObserver-based, respects `prefers-reduced-motion`
- **Fully mobile-optimized** — works from 320px up
- **Zero external API dependencies** — drop it on any static host

---

## 1. Run it locally

You need [Node.js](https://nodejs.org) **18 or newer** installed. Check with `node -v`.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build       # outputs to /dist
npm run preview     # serves the built site locally
```

---

## 2. Customize before launching

The most important things to change before going live:

| Where | What to change |
|---|---|
| `src/config.js` | **Lead email** — the address inside `LEAD_ENDPOINT` is where every form lead is emailed. Also the demo phone number and contact email; every section reads from this one file. |
| `src/components/Footer.jsx` | Email address |
| `index.html` | `<title>`, meta description, and the canonical/OG URLs if your domain isn't live2callem.com |

**Lead capture is live.** The demo form POSTs to [FormSubmit](https://formsubmit.co)
(free, no account, no backend). The **first** submission triggers a one-time
activation email to the address in `src/config.js` — click the confirmation
link in it and every lead after that arrives in your inbox, including which
ad/campaign it came from (UTM tags + referrer are captured automatically).
Submit the form once yourself right after deploying to trigger activation.

Tip: tag every link you post with UTMs
(`live2callem.com/?utm_source=facebook&utm_campaign=spring-ac`) and each lead
email will tell you which channel is producing.

---

## 3. Deploy to Vercel — beginner walkthrough

Vercel is free for personal projects and the easiest way to ship a Vite app.

### Step 1 — Create a GitHub repo

1. Go to **[github.com](https://github.com)** and sign in (or sign up — it's free).
2. Click the **+** in the top right → **New repository**.
3. Name it something like `live2callem-landing`. Set it to **Private** if you want.
4. **Don't** check "Add a README" (this folder already has one).
5. Click **Create repository**. GitHub will show you commands on the next page.

### Step 2 — Push this folder to GitHub

Open a terminal **inside this project folder** and run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/live2callem-landing.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

> First time using git? Install it from [git-scm.com](https://git-scm.com/downloads),
> then run `git config --global user.name "Your Name"` and
> `git config --global user.email "you@example.com"` once.

### Step 3 — Connect Vercel to your repo

1. Go to **[vercel.com](https://vercel.com)** and click **Sign up**.
2. Choose **Continue with GitHub** — it's the smoothest option.
3. Authorize Vercel to access your GitHub account.

### Step 4 — Import the project

1. On your Vercel dashboard, click **Add New… → Project**.
2. Find `live2callem-landing` in the list and click **Import**.
3. Vercel auto-detects Vite. You should see:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Don't change anything. Click **Deploy**.

Wait ~60 seconds. Done. Vercel gives you a URL like
`live2callem-landing.vercel.app`.

### Step 5 — Connect your custom domain (optional)

1. In your Vercel project, go to **Settings → Domains**.
2. Type the domain you bought (e.g. `live2callem.com`) and click **Add**.
3. Vercel shows you DNS records to set at your domain registrar (GoDaddy,
   Namecheap, Cloudflare, etc.). Usually two records:
   - An **A record** for `@` pointing to `76.76.21.21`
   - A **CNAME record** for `www` pointing to `cname.vercel-dns.com`
4. Add those records in your registrar's DNS panel. Vercel auto-issues an SSL
   certificate within a few minutes once DNS propagates.

### Step 6 — Push updates

Whenever you change something:

```bash
git add .
git commit -m "Updated headline"
git push
```

Vercel automatically rebuilds and redeploys. Every push to `main` is live in
under a minute.

---

## File structure

```
live2callem/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── App.jsx              # Composes all sections
    ├── main.jsx             # React entry
    ├── index.css            # Tailwind + custom utilities
    └── components/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── PainPoints.jsx
        ├── Features.jsx
        ├── HowItWorks.jsx
        ├── DemoCTA.jsx
        ├── FAQ.jsx
        ├── FinalCTA.jsx
        ├── Footer.jsx
        ├── Reveal.jsx       # Scroll-reveal helper
        └── icons.jsx        # Custom SVG icons
```

---

## Tweaking the design

- **Brand color:** Change the `signal` palette in `tailwind.config.js`.
- **Background tone:** Change the `ink` palette in `tailwind.config.js`.
- **Fonts:** Edit the Google Fonts `<link>` in `index.html` and the
  `fontFamily` block in `tailwind.config.js`.
- **Copy:** All text lives in the component files — search for the headline
  and replace.

---

## License

Your project. Use it however you want.
