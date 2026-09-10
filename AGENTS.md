# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

A premium, multi-page marketing website for AI Aviation Supplies Pvt. Ltd. (aviation supply company, headquartered in Thane, Maharashtra, India, with representation across the UAE, UK and Denmark). Frontend-only — no database, backend, or authentication. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (utility classes, no component library) |
| Icons | lucide-react |
| Language | TypeScript 5, strict mode |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images
│       ├── logo.png          # Original navy/gray logo artwork
│       ├── logo-white.png    # Lightness-inverted variant for the dark navbar (no white pill needed)
│       ├── og-image.jpg      # 1200x630 social share card (og:image / twitter:image)
│       ├── products/         # Product catalogue photos, referenced by src/data/products.ts
│       └── misc/             # Hero and section-backdrop background photos
├── src
│   ├── components
│   │   ├── PageLayout.tsx  # Shared <Navbar/><main className="page-fade-in">{children}</main><Footer/> shell — every route wraps its content in this instead of repeating the three tags itself
│   │   ├── Navbar.tsx      # Fixed navbar; transparent-over-hero only on "/", solid on every other route; scroll listener is rAF-throttled like Hero's parallax listener
│   │   ├── Hero.tsx        # Home hero: parallax background, flying-plane accent, static stats
│   │   ├── About.tsx       # Company introduction + highlight cards (lives on the home page, under #about)
│   │   ├── SectionPhotoBackdrop.tsx # Full-bleed photo + navy gradient behind a section's header text; pass `priority` only when it's the first thing visible on its route (no scroll needed) so it loads eagerly, otherwise it lazy-loads
│   │   ├── Products.tsx    # Full grid of all products (no category filter — tried a one-at-a-time slideshow and a filtered grid here; both were rejected because visitors need to browse the whole catalogue at a glance)
│   │   ├── Services.tsx    # MRO / technical capability cards
│   │   ├── WhyUs.tsx       # Why-choose-us reasons on dark section, with a radar-sweep accent
│   │   ├── Certifications.tsx # ISO 9001/14001/45001 + ASA membership + quality/compliance bullets
│   │   ├── LogoGrid.tsx    # Shared reveal-animated logo-card grid (image or text fallback) used by both Customers.tsx and SupplyNetwork.tsx — each passes its own theme/columns/sizing props rather than reimplementing the grid
│   │   ├── Customers.tsx   # "Our Customers" — real client logos from public/images/customers/, sourced from each company's own official site; Falcon's black background was keyed to transparent to sit cleanly on the dark card
│   │   ├── SupplyNetwork.tsx # "Our Global Supply Network" — real OEM/distributor logos from public/images/suppliers/, sourced from each company's own official site; Huntsman stays text-only (their brand policy restricts promotional use without written permission)
│   │   ├── Showcase.tsx    # Full-width aviation image with a "hangar doors opening" scroll reveal (plain `background-image`, not `background-attachment: fixed` — that caused mobile scroll jank)
│   │   ├── Contact.tsx     # Contact info cards (phone, email, address) — no form; renders from the PHONES/EMAILS arrays and COMPANY constant in src/data/company.ts, not hardcoded per-card JSX
│   │   ├── StatusPage.tsx  # Shared full-page "status" shell (dark centered layout + eyebrow/title/description/actions) used by both NotFound.tsx and ErrorFallback.tsx
│   │   ├── NotFound.tsx    # Branded 404, wired as the router's defaultNotFoundComponent
│   │   ├── ErrorFallback.tsx # Branded error boundary UI, wired as the router's defaultErrorComponent — "Try Again" (calls reset) + "Back to Home"
│   │   └── Footer.tsx      # Copyright bar + Privacy Policy link; city/domain come from COMPANY in src/data/company.ts
│   ├── data
│   │   ├── products.ts     # Product catalogue data — must match the company profile deck exactly (no category filter in the UI; see Products.tsx note below)
│   │   └── company.ts      # Single source of truth for the address, domain, and phone/email lists — Contact.tsx, Footer.tsx, privacy.tsx and About.tsx all import from here instead of hardcoding their own copy
│   ├── lib
│   │   ├── useReveal.ts    # IntersectionObserver hook driving scroll-reveal animations
│   │   └── analytics.ts    # Exports GA_MEASUREMENT_ID from VITE_GA_MEASUREMENT_ID; no manual page_view tracking — GA4 Enhanced Measurement's browser-history-events tracking auto-fires page_view on TanStack Router's client-side navigations
│   ├── routes              # One file per page; each composes Navbar + section(s) + Footer
│   │   ├── __root.tsx      # Root layout: HTML shell, GA script tag, SEO meta (site-wide defaults + OG/Twitter card)
│   │   ├── index.tsx       # "/" — Hero + About
│   │   ├── products.tsx    # "/products" — sets its own title/description via `head()`
│   │   ├── services.tsx    # "/services" — Services + SupplyNetwork; own title/description
│   │   ├── why-us.tsx      # "/why-us" — WhyUs + Certifications + Customers + Showcase; own title/description
│   │   ├── contact.tsx     # "/contact" — own title/description
│   │   └── privacy.tsx     # "/privacy" — Privacy Policy (GA/cookies disclosure), own title/description
│   ├── router.tsx           # createRouter(); wires NotFound as defaultNotFoundComponent
│   ├── routeTree.gen.ts    # Auto-generated by TanStack Router — do not hand-edit, regenerates on dev/build
│   └── styles.css          # Tailwind import, fonts, color tokens, reveal/page-transition/decorative animations
├── netlify.toml             # Build command (vite build), publish dir (dist/client), security headers (CSP/HSTS/etc.)
├── .env.example              # Documents VITE_GA_MEASUREMENT_ID; real .env is gitignored
├── package.json
├── tsconfig.json             # @/* path alias → src/*
└── vite.config.ts
```

## Conventions

- **Multi-page, not a single scroller**: Home ("/") holds Hero + About; Products, Services, Why Us, and Contact each have their own route. The navbar/footer link to real routes via TanStack Router's `Link`, not `#anchor` scrolling — except "About", which is `Link to="/" hash="about"` since it lives on the home page.
- Adding a new top-level section as its own page means creating a new file in `src/routes/` (path is derived from the filename) that wraps the section component(s) in `<PageLayout>` — don't hand-roll `<Navbar/><main className="page-fade-in">...</main><Footer/>` again, that's exactly what `PageLayout` centralizes. The route tree regenerates automatically when the dev server or build runs — never hand-edit `routeTree.gen.ts`.
- The navbar is `fixed` and transparent only on the home route (it sits over the dark Hero image there); every other page forces the solid navy background regardless of scroll position, otherwise the white nav text is invisible against those pages' light top sections. See `isHome` in `Navbar.tsx`.
- Brand palette lives in `src/styles.css` as CSS custom properties (`--navy-*`, `--gold-*`) and is also hardcoded as Tailwind arbitrary hex values (`#0c2a4a`, `#c9a24b`) throughout components — keep both in sync if the palette changes.
- Scroll-in animations use the `useReveal` hook + `.reveal` / `.reveal.is-visible` classes in `styles.css`. Decorative motion (the Hero's flying-plane accent, the Why Us radar-sweep, the Showcase hangar-door reveal, page-transition fades) is also plain CSS keyframes in `styles.css`, not a JS animation library — all of it is neutralized under `@media (prefers-reduced-motion: reduce)`, so any new animation should add itself to that block too.
- All images (product photos and the Hero/Showcase background photos) are stored locally under `public/images/` and referenced by relative path — never hotlinked to an external CDN — so the site doesn't depend on a third-party host staying up. Originally sourced from Unsplash under its free license; replace with real photography when available. When a product is removed or renamed in `products.ts`, delete its now-unused image from `public/images/products/` too.
- All factual content (product list, contact numbers/emails, certifications, platforms supported, why-choose-us reasons, client/supplier names) must match the company profile PDF the client supplied, with the company name substituted to "AI Aviation Supplies". Client and supplier names (`Customers.tsx`, `SupplyNetwork.tsx`) use real logos stored locally in `public/images/customers/` and `public/images/suppliers/` respectively, each sourced from that company's own official site/press page — never from a generic image search — and verified visually before use. If a company's brand guidelines restrict promotional logo use (e.g. Huntsman), keep that one as text instead of guessing at permission. When a name in the source list is ambiguous (e.g. "Arrow", "IPS", "Falcon" — common words matching multiple real companies), confirm the specific company with the client before sourcing/publishing its logo rather than guessing.
- Company is India-based (Thane, Maharashtra). The "reach into the UAE, UK and Denmark" phrase is stated verbatim in two places — About's highlight card and About's body copy — keep those two in sync (Footer and the root meta description describe reach differently, e.g. "across India, the UAE and beyond", which is intentional, not drift).
- The domain is the bare apex `ai-aviation.in` — no `www.` — matching `robots.txt`, `sitemap.xml`, and the OG/Twitter meta in `__root.tsx`. Pull it from `COMPANY.domain`/`COMPANY.siteUrl` in `src/data/company.ts` rather than retyping it, so it can't drift to `www.ai-aviation.in` in just one place again.
- Each route sets its own `head()` meta (`title` + `description`) rather than relying on `__root.tsx`'s defaults, so every page gets a distinct title/snippet in search results and browser tabs.
- Each route also sets its own canonical `links: [{ rel: 'canonical', href: \`${COMPANY.siteUrl}/...\` }]` — TanStack Router concatenates `links` from every matched route (root + page) rather than deduping by attribute the way it does for `meta`, so a canonical link must NOT be added to `__root.tsx` (it would render twice, once from root and once from the page). The site-wide `Organization`/`LocalBusiness` JSON-LD block lives once in `__root.tsx`'s `meta` array instead, since `meta` entries do dedupe.
- `SectionPhotoBackdrop` only needs `priority` on the instance that's the first thing visible on its route (no scroll required) — that one loads eager/high-priority; every other instance stays lazy so it doesn't compete with the real above-the-fold content for bandwidth.
- Google Analytics loads via `src/lib/analytics.ts` + `__root.tsx`'s `scripts` array, controlled by `VITE_GA_MEASUREMENT_ID`. Don't add a manual `gtag('event', 'page_view', ...)` call on route change — GA4's Enhanced Measurement ("page changes based on browser history events") already auto-tracks TanStack Router's client-side navigations, and firing it manually double-counts pageviews.
