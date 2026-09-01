# Airlink Aviation Spares — Marketing Website

A premium, responsive marketing website for **Airlink Airplanes Spare Parts Trading L.L.C.**, a UAE-based aviation supply company. The content, branding and product catalogue are sourced from the company's official profile deck.

## Tech Stack

- **TanStack Start** (React 19 + TanStack Router) — file-based routing and SSR
- **Vite 7** — build tooling
- **Tailwind CSS 4** — styling
- **lucide-react** — icons
- **Netlify Forms** — serverless contact-form handling (no backend/database required)

## Sections

Sticky navbar, hero with parallax, About, filterable product catalogue, MRO/technical services, Why Choose Us, a full-width aviation showcase, and a validated contact/enquiry form with a success state.

## Running Locally

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000` (or via `netlify dev` on port 8888, which also emulates Netlify Forms).

## Build

```bash
npm run build
```

Netlify Forms submissions only work on a deployed site (Netlify's form-detection runs at deploy time), not in local dev.
