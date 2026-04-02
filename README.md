# Skytale App

[![CI](https://github.com/nicholasraimbault/skytale-app/actions/workflows/ci.yml/badge.svg)](https://github.com/nicholasraimbault/skytale-app/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-BSL%201.1-blue)](LICENSE)

Terminal-style web interface for [Skytale](https://github.com/nicholasraimbault/skytale) — end-to-end encryption for AI agents. Landing page and product interface in one. Full CLI parity in the browser.

**[Live at skytale.sh](https://skytale.sh)** | **[Docs](https://docs.skytale.sh)** | **[Main Repo](https://github.com/nicholasraimbault/skytale)**

## What It Is

A full-screen TUI (terminal user interface) that serves as both the marketing landing page and the authenticated product interface. Anonymous visitors see the pitch and a real MLS encryption demo. Authenticated users manage channels, keys, activity, and billing — all from the same terminal.

- **Real MLS encryption** in the browser via WebAssembly (mls-rs 0.54 + WebCrypto)
- **22+ commands** with full CLI parity — same commands as the Skytale CLI
- **Live WebSocket activity** streaming from the relay
- **GitHub OAuth** signup — 10 seconds to API key
- **Panel-aware prompt** — `skytale/channels>` with context-specific hints
- **Three equal paths** — sidebar tabs, clickable panel actions, prompt commands

## Tech Stack

- **One HTML file** — no framework, no components, no build dependencies beyond Vite
- **WASM MLS** — mls-rs compiled to WebAssembly (507KB) for real RFC 9420 encryption
- **Vite** — static build, deploys to Cloudflare Pages

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
```

## Deployment

```bash
npx wrangler pages deploy dist --project-name skytale-dashboard --branch master
```

Custom domain: `skytale.sh`

## License

[Business Source License 1.1](LICENSE) — source-available, converts to Apache 2.0 after 4 years.

The [Skytale SDK, relay, and CLI](https://github.com/nicholasraimbault/skytale) are Apache 2.0.
