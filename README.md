# Itzfizz Scroll-Driven Hero

A scroll-driven hero section built with React, Tailwind CSS and GSAP ScrollTrigger. The page opens with a staggered entrance animation, then pins the hero while scroll progress drives the vehicle's movement, scale, rotation, text shift and background parallax.

**Live demo:** https://itzfizz-project-opal.vercel.app
**Repository:** https://github.com/Mihir4510/itzfizz_project

> Frontend engineering assignment: recreation of the reference hero animation at [paraschaturvedi.github.io/car-scroll-animation](https://paraschaturvedi.github.io/car-scroll-animation).

---

## Highlights

- **Entrance sequence:** headline, visual, statistic cards and scroll indicator reveal in a staggered timeline on load.
- **Scroll-linked motion:** the hero pins for a fixed scroll distance (`+=1400`) and the timeline is scrubbed (`scrub: 1`), so motion follows scroll position and reverses smoothly when scrolling up.
- **Compositor-friendly animation:** only `transform` (`xPercent`, `yPercent`, `scale`, `rotation`) and `opacity` are animated. No layout properties change during scroll.
- **Layered parallax:** background glow and depth layers move at different rates.
- **Responsive:** `gsap.matchMedia()` provides separate desktop, tablet and mobile configurations.
- **Accessible:** respects `prefers-reduced-motion`, uses semantic HTML, visible focus states and `aria-hidden` on decorative graphics.
- **No layout shift:** the visual sits in a fixed aspect-ratio container (`aspect-[21/9] sm:aspect-[16/7]`).

## Tech Stack

| Area | Technology |
| --- | --- |
| UI | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 |
| Animation | GSAP 3 + ScrollTrigger |
| React integration | `@gsap/react` (`useGSAP`) |
| Language | JavaScript (ES modules) |
| Hosting | Vercel |

## How the Animation Works

```text
React render + refs
  -> Hero component passes refs to useHeroAnimation
  -> useGSAP creates a scoped GSAP context
  -> Intro timeline (on load) + scroll timeline (ScrollTrigger, pinned, scrubbed)
  -> Scroll position drives timeline progress
  -> Transform/opacity updates on the DOM
```

**Phase 1: Intro (time-based).** A one-off timeline staggers the heading, visual, stat cards and scroll indicator into view.

**Phase 2: Scroll (progress-based).** ScrollTrigger pins the hero and links timeline progress to scroll position. Tunable values live in `heroAnimationConfig.js` for desktop, mobile and reduced-motion modes.

## Performance

- Animations use composited properties only, avoiding layout and paint work on every frame.
- ScrollTrigger batches updates on GSAP's `requestAnimationFrame` ticker instead of custom scroll listeners.
- `useGSAP` reverts timelines, triggers and pin spacers on unmount, so there are no leaks under React Strict Mode.
- A fixed aspect-ratio container prevents cumulative layout shift.

## Accessibility

- `prefers-reduced-motion: reduce` disables pinning and horizontal drift.
- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and a logical heading hierarchy.
- Keyboard focus rings on interactive elements (`focus-visible`).
- Decorative SVGs are hidden from assistive technology; interactive indicators have descriptive labels.

## Project Structure

```text
src/
├── app/                     # App shell and global styles (glass and glow utilities)
├── components/
│   ├── layout/              # Navbar, Footer
│   └── ui/                  # Button, SectionLabel, ScrollIndicator
├── constants/               # Site metadata and navigation (siteConfig.json)
├── features/hero/
│   ├── animations/          # heroAnimationConfig, heroIntro, heroScroll
│   ├── components/          # Hero, HeroBackground, HeroHeading, HeroStats, HeroVisual
│   ├── data/                # Hero copy and statistics (heroData.js)
│   └── hooks/               # useHeroAnimation, useReducedMotion
├── lib/                     # GSAP plugin registration
├── sections/                # Services, StatsSection, CTASection
└── utils/                   # Animation helpers
```

## Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO
npm install
npm run dev        # http://localhost:5173
```

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |

## Deployment

The project is deployed on Vercel with the default Vite settings:

- **Build command:** `npm run build`
- **Output directory:** `dist`

Pushing to `main` triggers a new production deployment.

## Possible Improvements

- Add a Lighthouse report and a short screen recording of the scroll sequence.
- Introduce Lenis for inertial smooth scrolling.
- Add visual regression tests for the pinned hero at key breakpoints.

## License

Created as a frontend engineering assignment. Reference concept credit: [Paras Chaturvedi](https://paraschaturvedi.github.io/car-scroll-animation).