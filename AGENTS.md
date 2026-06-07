# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with Turbopack
npm run build     # Production build
npm run lint      # ESLint
```

Use `--legacy-peer-deps` for all `npm install` commands — Radix UI packages have peer dep conflicts with React 19.

## Architecture

Next.js 16 App Router portfolio site. All routes are under `app/`. No test suite.

**Path alias:** `@/` resolves to the project root (configured in `jsconfig.json`).

**Fonts:** Geist and Geist Mono loaded via `next/font/local` from `app/fonts/`. CSS variables `--font-geist` and `--font-geist-mono` are set on `<body>`.

**Styling:** Tailwind v3 + `@tailwindcss/typography` plugin. Custom breakpoints: `sm:640 md:768 lg:960 xl:1200`. Accent color is `#60a5fa` (blue-400). Container is centered with `1rem` padding. Use `min-h-[100dvh]` for full-height sections (never `h-screen`).

**Animations:** `framer-motion` (v11, React 19 compatibility patched via `overrides` in `package.json`). Import from `"framer-motion"`. Any component using `motion`, scroll listeners, or `useReducedMotion()` **must** be a `"use client"` leaf component.

**UI components:** shadcn/ui (new-york style, no TSX) in `components/ui/`. Add new components with `npx shadcn@latest add <component> --legacy-peer-deps`.

**Page transitions:** `StairTransition` (staggered animated stairs overlay) + `PageTransition` (opacity fade) wrap all page content in `app/layout.jsx`.

## Blog System

- Content lives in `content/blog/*.mdx` files with gray-matter frontmatter
- `lib/blog.js` exposes `getAllPosts()`, `getPostBySlug(slug)`, `formatDate(dateStr)`
- `app/blog/page.jsx` — Server Component; reads all posts, passes to Client Components
- `app/blog/BlogGrid.jsx` — `"use client"` component with framer-motion animations (`FeaturedPost`, `PostGrid`)
- `app/blog/[slug]/page.jsx` — Server Component; renders MDX content using `react-markdown` + `remark-gfm` + `rehype-highlight`
- **Do not use `next-mdx-remote`** — it conflicts with React 19 at runtime despite being in `package.json`

### MDX frontmatter shape
```yaml
title: "Post Title"
date: "2025-01-01"
excerpt: "Short description"
cover: "/assets/image.jpg"
tags: ["Go", "Microservices"]
readTime: "8 min"
featured: true   # optional, promotes to FeaturedPost on listing
```

## Key Files

| File | Purpose |
|---|---|
| `app/layout.jsx` | Root layout — fonts, Header, StairTransition, PageTransition |
| `app/globals.css` | CSS custom properties (HSL color tokens), base styles, typography classes (`h1`, `h2`) |
| `tailwind.config.js` | Custom breakpoints, accent color palette, typography plugin |
| `components/Header.jsx` | Desktop nav + mobile nav trigger |
| `components/Nav.jsx` | Desktop navigation links |
| `components/MobileNav.jsx` | Sheet-based mobile navigation |
| `lib/utils.js` | `cn()` — `clsx` + `tailwind-merge` helper |
