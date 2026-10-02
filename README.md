# Itzfizz Scroll-Driven Hero Experience

> **Frontend Engineering Assignment / Interactive Demo**  
> An interactive, high-performance scroll-driven hero experience built with React, Vite, Tailwind CSS, GSAP, and ScrollTrigger.

---

## 🌟 Overview

The **Itzfizz Scroll-Driven Hero Experience** demonstrates a modern digital agency hero section with multi-phase animations. The project seamlessly combines an initial page-load entrance sequence with a pinned, scroll-driven interactive timeline where user scroll progress controls vehicle rotation, horizontal translation, scaling, text shifting, and background parallax depth.

---

## ✨ Features

- **Initial Load Entrance Sequence**: Staggered reveal for hero heading, visual elements, statistics cards, and scroll indicator.
- **Scroll-Driven Hero Pinning**: The hero section pins smoothly during scrolling over a controlled scroll distance (`+=1400`).
- **GPU-Accelerated Motion**: All scroll animations exclusively manipulate `transform` (`xPercent`, `yPercent`, `scale`, `rotation`) and `opacity` properties.
- **Scrubbed Progress**: Animation timeline advances on scroll down and smoothly reverses on scroll up (`scrub: 1`).
- **Multi-Layer Background Parallax**: Layered background glow and depth layers move at different rates to create visual immersion.
- **Responsive Architecture**: Built using `gsap.matchMedia()` to adjust transforms for desktop, tablet, and mobile viewports.
- **Reduced Motion Support**: Automatically respects `prefers-reduced-motion: reduce` user settings by disabling pinning and horizontal drift.
- **Layout Shift Prevention**: Hardened aspect ratio containers (`aspect-[21/9] sm:aspect-[16/7]`) ensure zero Cumulative Layout Shift (CLS).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation Engine**: [GSAP 3](https://greensock.com/gsap/)
- **Scroll Plugin**: [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **React GSAP Hook**: [`@gsap/react`](https://greensock.com/react/)
- **Language**: JavaScript (ES Next)

---

## 📁 Project Architecture

```text
src/
├── app/
│   ├── App.jsx              # Main application shell
│   └── app.css              # Custom utilities, glassmorphism, & glow effects
├── components/
│   ├── layout/              # Fixed Navbar & Footer components
│   └── ui/                  # Reusable UI primitives (Button, SectionLabel, ScrollIndicator)
├── constants/
│   └── siteConfig.json      # Site metadata & navigation links
├── features/
│   └── hero/
│       ├── animations/
│       │   ├── heroAnimationConfig.js  # Tunable animation constants (desktop/mobile/reducedMotion)
│       │   ├── heroIntro.js            # Initial page-load entry timeline
│       │   └── heroScroll.js           # ScrollTrigger pinning & parallax matchMedia
│       ├── components/
│       │   ├── Hero.jsx                # Main hero container component
│       │   ├── HeroBackground.jsx      # Parallax background layer
│       │   ├── HeroHeading.jsx         # Hero title, badge & subheading
│       │   ├── HeroStats.jsx           # Grid of key performance statistics
│       │   └── HeroVisual.jsx          # Futuristic vector visual asset container
│       ├── data/
│       │   └── heroData.js             # Hero content & statistics data
│       └── hooks/
│           ├── useHeroAnimation.js     # Master hook connecting React refs to GSAP
│           └── useReducedMotion.js     # Accessibility media query hook
├── lib/
│   └── gsap.js              # Centralized GSAP plugin registration
├── sections/                # Supporting page sections (Services, StatsSection, CTASection)
└── utils/                   # Animation helpers & utility functions
```

---

## 🔄 Animation Architecture

```text
React (DOM Render & Refs)
  ↓
Hero Component (Passes refs to custom hook)
  ↓
useHeroAnimation (Manages GSAP Context & lifecycle cleanup)
  ↓
GSAP (Creates initial intro timeline & scroll timeline)
  ↓
ScrollTrigger (Connects window scroll offset to scrubbed progress)
  ↓
User Scroll (Scroll down advances progress / scroll up reverses progress)
  ↓
DOM Transforms (GPU-accelerated inline transform style updates)
```

---

## ⚡ Performance Optimization

- **Composite Layer Animations**: Motion is strictly restricted to GPU-composited properties (`xPercent`, `yPercent`, `scale`, `rotation`, `opacity`). Layout-changing properties like `width`, `height`, `top`, `left`, `margin`, or `padding` are completely avoided during animation.
- **Debounced / Off-Thread Scroll Processing**: GSAP ScrollTrigger uses efficient `requestAnimationFrame` ticking rather than raw `window.addEventListener('scroll')` handlers.
- **Context Teardown**: `useGSAP` automatically cleans up GSAP instances, timelines, and ScrollTrigger pin spacers when components unmount.

---

## ♿ Accessibility & Standards

- **Reduced Motion Preference**: Detects `(prefers-reduced-motion: reduce)` via media queries and disables scroll pinning and heavy visual drift.
- **Semantic HTML**: Built using `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, and proper `<h1>` → `<h3>` heading hierarchies.
- **Keyboard Navigation**: Interactive elements feature visible focus rings (`focus-visible:ring-cyan-400`).
- **Screen Reader Support**: Decorative visual SVGs are marked with `aria-hidden="true"`, while interactive indicators feature descriptive `aria-label` attributes.

---

## 💻 Local Development

Follow these steps to run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/itzfizz/itzfizz-scroll-driven-hero.git

# 2. Navigate to project directory
cd itzfizz-scroll-driven-hero

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🚀 Production Build & Preview

To build and preview the production bundle:

```bash
# Generate optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Live Demo & Repository Links

- **Live Demo URL**: [https://itzfizz-scroll-driven-hero.vercel.app](https://itzfizz-scroll-driven-hero.vercel.app) *(Replace with actual deployed URL)*
- **GitHub Repository**: [https://github.com/itzfizz/itzfizz-scroll-driven-hero](https://github.com/itzfizz/itzfizz-scroll-driven-hero) *(Replace with actual repository URL)*

---

## 📄 License

This project is created as a frontend engineering assignment for Itzfizz Digital.
