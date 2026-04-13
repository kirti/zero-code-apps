# zero-code-apps

> Production-quality web apps built with **zero human code** — every line AI-generated using [skillforge-ai](https://www.npmjs.com/package/skillforge-ai).

[![Live](https://img.shields.io/badge/live-GitHub%20Pages-6366f1?style=flat-square)](https://YOUR-USERNAME.github.io/zero-code-apps)
[![powered by](https://img.shields.io/badge/powered%20by-skillforge--ai-00d4aa?style=flat-square)](https://www.npmjs.com/package/skillforge-ai)
[![license](https://img.shields.io/badge/license-MIT-64748b?style=flat-square)](LICENSE)

---

## Live demos

| App | Description |
|-----|-------------|
| [NexVault](demos/nexvault/) | Dark premium fintech trading app — crypto prices, portfolio charts, banking |
| [Pulse Analytics](demos/pulse-analytics/) | SaaS analytics dashboard — revenue, growth, pricing, integrations |

---

## Try it yourself

**Install skillforge-ai:**

```bash
npm install -g skillforge-ai
```

**Option— Run directly from terminal (needs Anthropic API key):**

```bash
export ANTHROPIC_API_KEY=sk-ant-...

skillforge-ai run frontend-design chart-js fintech-ui api-integration \
  --task "Build NexVault dark premium fintech app with hero animated grid glow orbs,
  scrolling ticker, portfolio line chart 1W/1M/3M/1Y donut chart, stock watchlist
  8 stocks SVG sparklines, banking virtual card transactions, crypto CoinGecko API
  fallback. Syne+DM Mono fonts --bg:#080c12 --accent:#00d4aa Chart.js cdnjs. Single HTML." \
  --output demos/nexvault/index.html

open demos/nexvault/index.html
```

Claude generates the full app and saves it — no browser, no copy-paste, zero human code.

---

## Local setup

```bash
git clone https://github.com/YOUR-USERNAME/zero-code-apps
cd zero-code-apps
npm install

# Open demos directly
open demos/nexvault/index.html
open demos/pulse-analytics/index.html

# Or serve locally
npm run dev
# → http://localhost:3000
```

---

## Add a new demo

```bash
# Generate and save
skillforge-ai run frontend-design chart-js \
  --task "build a weather dashboard with animated charts and dark premium styling" \
  --output demos/weather/index.html

# Push → auto-deploys to GitHub Pages
git add . && git commit -m "add: weather demo" && git push
```

---

## Deploy

GitHub Pages auto-deploys on every push via `.github/workflows/deploy.yml`.

First time: **Settings → Pages → Source → GitHub Actions**

---

## Skills used

| Skill | What it teaches |
|-------|----------------|
| `frontend-design` | Dark premium UI · Syne+DM Mono · CSS animations · never Inter/Arial |
| `chart-js` | Chart.js dark theme · gradient fills · period switcher · DM Mono axes |
| `fintech-ui` | Ticker bar · SVG sparklines · virtual card · watchlist · transactions |
| `api-integration` | CoinGecko · try/catch fallback · static seed data · status indicator |

---

MIT · Zero human code · powered by [skillforge-ai](https://www.npmjs.com/package/skillforge-ai)
