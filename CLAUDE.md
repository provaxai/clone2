# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (usually http://localhost:8080, falls back to 8081+)
npm run build      # Production build → .output/
npm run lint       # ESLint check
npm run format     # Prettier format
npx tsc --noEmit   # TypeScript type check (no test suite exists)
```

Deploy target is **Cloudflare Workers** via `wrangler.jsonc`. The Lovable vite plugin emits a deprecation warning about `cloudflare: false` — ignore it, it's harmless.

## Architecture

### Stack
- **TanStack Start** (SSR framework) + **React 19** + **TypeScript**
- **Tailwind CSS v4** for styling — no CSS modules, no styled-components
- **Recharts** for all charts (AreaChart, BarChart, PieChart)
- **Motion/Framer** for animations
- **Lucide React** as the sole icon library

### Routing & API
Routes live in `src/routes/`. File-based routing via TanStack Router.

API routes follow this pattern:
```ts
// src/routes/api/my-endpoint.ts
export const Route = createFileRoute("/api/my-endpoint")({
  server: { handlers: { POST: async ({ request }) => { ... } } }
});
```

Current API routes: `chat-athena`, `generate-question`, `analyze-library`, `generate-schedule`, `fetch-drive`, `fetch-drive-folder`.

### State Management
No Redux/Zustand. All state lives in `App.tsx` via `useLocalStorage` hooks. The custom hook (`src/hooks/useLocalStorage.ts`) replaces every `useState` that needs persistence.

Key persisted keys:
- `provax-onboarding`, `provax-schedule`, `provax-progress`, `provax-plan`
- `provax-messages`, `provax-library`, `provax-completed-tasks`
- `athena-edital-v1` (EditalVerticalizado topics)
- `provax_general_kb` (Admin Base Geral categories)
- `provax_credit_ledger` (AI credit usage log)
- `provax_google_api_key`, `athena_anthropic_api_key`, `athena_openai_api_key`, `athena_gemini_api_key_v2`

### Multi-Provider AI
`src/lib/aiProvider.ts` is the unified AI layer supporting Claude, GPT, and Gemini. All three share the same `callAI()` interface. Provider and model per-function are stored in localStorage and read by each API route.

`src/lib/creditTracker.ts` logs every AI call to localStorage with credits consumed (model multiplier × base cost).

### Theme System
Two themes: `dark` (default) and `light`. The `prf-theme` + `light-theme` CSS classes on wrappers handle overrides via `src/styles.css`. Components that hardcode dark colors **must** use conditional classes based on a `d = theme === 'dark'` boolean — not the CSS class system.

`AppShell.tsx` wraps the authenticated app with the collapsible sidebar and header. It receives `theme` and renders `{children}` in the main scrollable area. **Critical:** the layout container needs `min-h-0 overflow-hidden` on the flex parent and `min-h-0` on the workspace div for scroll to work inside flex children.

### Component Conventions
- Inline styles (`style={{}}`) are being phased out in favour of Tailwind. `Dashboard.tsx` and `EditalVerticalizado.tsx` still use inline styles — leave them unless refactoring.
- The `isDark`/`d` boolean pattern is used everywhere: `const d = theme === 'dark'`
- Token variables (`card`, `raised`, `txt`, `mut`, `fnt`, `bdr`, `trk`) are declared at the top of each component's return scope.

### Data Sources
- `src/data/questionsBank.ts` — 118 CEBRASPE-style questions across all 14 PRF disciplines. Add questions here; the bank is consumed by `Simulados.tsx` and `Treinar.tsx`.
- `src/data/mockData.ts` — `SUBSCRIPTION_PLANS`, `PRF_FLASHCARDS`, `INITIAL_PROGRESS`, `DEFAULT_SCHEDULE`. Plan names/prices must match `src/data/appConfig.ts`.
- `src/data/appConfig.ts` — **single source of truth** for plan names, prices, and features. Always update here first.

### Admin Panel
`AdminPanel.tsx` (~3500 lines) is a self-contained admin SPA inside the main app. Navigation is via `activeTab` state. Subtabs for Knowledge Base use `subTabKnowledge`.

Google Drive import uses two API routes:
- `/api/fetch-drive` — single file (requires public sharing)
- `/api/fetch-drive-folder` — entire folder + Gemini 2.0 Flash auto-categorisation

The admin panel uses `showToastMsg()` for all user feedback — never use `alert()` or `confirm()`.

### Types
`src/types.ts` defines all shared interfaces. `ProgressData` includes `approvalHistory: ApprovalHistoryEntry[]` — always initialise this field when creating progress objects or TypeScript will error.
