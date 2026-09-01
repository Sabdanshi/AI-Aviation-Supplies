# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

A premium, single-page marketing website for Airlink Airplanes Spare Parts Trading L.L.C. (aviation supply company, Abu Dhabi, UAE). Frontend-only — no database, backend, or authentication. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (utility classes, no component library) |
| Icons | lucide-react |
| Forms | Netlify Forms (AJAX submission + static skeleton for build-time detection) |
| Language | TypeScript 5, strict mode |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── contact-form.html   # Static skeleton so Netlify detects the "contact" form at build time
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Navbar.tsx      # Sticky navbar, scroll transition, mobile menu
│   │   ├── Hero.tsx        # Hero with parallax background
│   │   ├── About.tsx       # Company introduction + highlight cards
│   │   ├── Products.tsx    # Filterable product catalogue (client-side category filter)
│   │   ├── Services.tsx    # MRO / technical capability cards
│   │   ├── WhyUs.tsx       # Why-choose-us reasons on dark section
│   │   ├── Showcase.tsx    # Full-width aviation image + statement
│   │   ├── Contact.tsx     # Enquiry form (validation, Netlify Forms submission, success state)
│   │   └── Footer.tsx
│   ├── data
│   │   └── products.ts     # Product catalogue data + category list, sourced from company profile
│   ├── lib
│   │   └── useReveal.ts    # IntersectionObserver hook driving scroll-reveal animations
│   ├── routes
│   │   ├── __root.tsx      # Root layout: HTML shell, SEO meta
│   │   └── index.tsx       # Composes all homepage sections
│   ├── router.tsx
│   └── styles.css          # Tailwind import, fonts, color tokens, reveal-animation utilities
├── netlify.toml             # Build command (vite build), publish dir (dist/client)
├── package.json
├── tsconfig.json             # @/* path alias → src/*
└── vite.config.ts
```

## Conventions

- All content is a single scrollable page (`src/routes/index.tsx`); navigation links are in-page anchors (`#about`, `#products`, etc.).
- Brand palette lives in `src/styles.css` as CSS custom properties (`--navy-*`, `--gold-*`) and is also hardcoded as Tailwind arbitrary hex values (`#0c2a4a`, `#c9a24b`) throughout components — keep both in sync if the palette changes.
- Scroll-in animations use the `useReveal` hook + `.reveal` / `.reveal.is-visible` classes in `styles.css`, not a JS animation library.
- Product images are stock photography URLs (Unsplash) — replace with real product photography when available.
- The contact form requires a matching static skeleton at `public/contact-form.html`; any field added to `Contact.tsx` must also be added there or Netlify will reject the submission.
- Netlify Forms only registers and accepts submissions on a deployed site, not in local `npm run dev`.
