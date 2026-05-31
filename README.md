# zero-code-apps

> AI-powered demo platform — describe what you want, watch it build in seconds.
> Built entirely with [skillforge-ai](https://www.npmjs.com/package/skillforge-ai) — zero human code.

[![Live](https://img.shields.io/badge/live-GitHub%20Pages-00d4aa?style=flat-square)](https://kirti.github.io/zero-code-apps)
[![powered by skillforge-ai](https://img.shields.io/badge/powered%20by-skillforge--ai-00d4aa?style=flat-square)](https://www.npmjs.com/package/skillforge-ai)
[![license](https://img.shields.io/badge/license-MIT-64748b?style=flat-square)](LICENSE)

---

## Live demos

| Page | URL | What it does |
|------|-----|--------------|
| **Homepage** | [kirti.github.io/zero-code-apps](https://kirti.github.io/zero-code-apps) | Platform entry point |
| **AI App Builder** | [kirti.github.io/zero-code-apps/builder](https://kirti.github.io/zero-code-apps/builder) | Describe a fintech app → streams live code via Claude / GPT-4o / Gemini |
| **Cozy Generator** | [kirti.github.io/zero-code-apps/cozy](https://kirti.github.io/zero-code-apps/cozy) | Describe a vibe → AI image via DALL·E 3 or Stable Diffusion |
| **NexVault demo** | [kirti.github.io/zero-code-apps/demos/nexvault](https://kirti.github.io/zero-code-apps/demos/nexvault/) | Dark fintech trading dashboard — CoinGecko live data |
| **Pulse Analytics** | [kirti.github.io/zero-code-apps/demos/pulse-analytics](https://kirti.github.io/zero-code-apps/demos/pulse-analytics/) | SaaS analytics dashboard |

---

## How it works

```
You type a description
      ↓
skillforge-ai skills guide the AI (design rules, component patterns, API integrations)
      ↓
Claude / GPT-4o / Gemini streams back a complete app
      ↓
Live preview renders in the browser
      ↓
Download as standalone HTML — deploy anywhere for free
```

---

## Run locally

```bash
git clone https://github.com/kirti/zero-code-apps
cd zero-code-apps
npm install
npm run dev
# → http://localhost:3000
```

---

## Generate a new demo from terminal

```bash
npm install -g skillforge-ai
export ANTHROPIC_API_KEY=sk-ant-...

skillforge-ai run frontend-design chart-js fintech-ui api-integration \
  --task "Build a dark crypto trading dashboard with BTC/ETH/SOL prices,
  candlestick chart, portfolio tracker, watchlist with sparklines" \
  --output demos/my-app/index.html

open demos/my-app/index.html
```

Push to GitHub → auto-deploys to GitHub Pages.

---

## Example prompts for the builder

**Fintech / Trading:**
- `"Dark crypto trading dashboard with BTC ETH SOL live prices, candlestick chart, portfolio P&L"`
- `"Wealth management dashboard with asset allocation donut, holdings table, performance chart"`
- `"Stock screener with PE ratio, market cap, sector filters and results table with sparklines"`
- `"Order flow visualiser with live buy/sell stream, market depth chart, trade execution feed"`
- `"Banking dashboard with account overview, transaction history, spending by category"`

**Analytics / SaaS:**
- `"SaaS analytics dashboard with MRR, churn, DAU metrics and revenue trend charts"`
- `"Marketing analytics with campaign performance, conversion funnel, channel breakdown"`

**Cozy generator vibes:**
- `"rainy evening with candles, open book, warm tea by the window"`
- `"cherry blossom path in spring morning, soft pink petals, watercolor style"`
- `"hygge living room winter evening, fireplace, fairy lights, blankets"`

---

## Skills used

| Skill | What it teaches the AI |
|-------|----------------------|
| `frontend-design` | Dark premium UI · Syne+DM Mono fonts · CSS animations |
| `chart-js` | Chart.js dark theme · gradient fills · period switcher |
| `fintech-ui` | Ticker bar · SVG sparklines · virtual card · watchlist |
| `api-integration` | CoinGecko free API · fallback mock data · status indicator |
| `zca-schema` | ZCA JSON app schema for structured app generation |

---

## Repo structure

```
zero-code-apps/
├── index.html              ← platform homepage
├── builder/
│   └── index.html          ← AI fintech app builder (streaming)
├── cozy/
│   └── index.html          ← cozy image generator
├── demos/
│   ├── nexvault/           ← AI-generated fintech demo
│   ├── pulse-analytics/    ← AI-generated analytics demo
│   └── weather/            ← AI-generated weather demo
└── .github/workflows/
    └── deploy.yml          ← auto-deploy to GitHub Pages on push
```

---

## Deploy your own

1. Fork this repo
2. Go to Settings → Pages → Source → **GitHub Actions**
3. Push any change → auto-deploys in ~2 minutes

---

*Built by [Kirti Kaushal](https://www.linkedin.com/in/kirti3/) — Senior AI/ML + Full Stack Engineer*
*[npm](https://www.npmjs.com/package/skillforge-ai) · [LinkedIn](https://www.linkedin.com/in/kirti3/) · [Medium](https://kirtikau.medium.com)*
