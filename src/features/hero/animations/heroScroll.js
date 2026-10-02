import { gsap } from '../../../lib/gsap';
import { HERO_ANIMATION_CONFIG } from './heroAnimationConfig';

/**
 * Creates the scroll-driven hero pinning and car driving animation using GSAP ScrollTrigger.
 *
 * Core Features:
 * 1. Pinned Hero Section (`pin: true`, `end: "+=1400"`)
 * 2. Scrubbed timeline tied to scroll position (scroll down -> drives forward, scroll up -> reverses)
 * 3. Heading "W E L C O M E   I T Z F I Z Z" & content remain VISIBLE throughout scrolling.
 * 4. Dynamic travel distance calculated for the car from START to FINISH marker across all screen sizes.
 * 5. Full responsive & reduced-motion support.
 *
 * @param {Object} elements
 * @param {HTMLElement} elements.heroEl
 * @param {HTMLElement} elements.headingEl
 * @param {HTMLElement} elements.statsEl
 * @param {HTMLElement} elements.visualEl
 * @param {HTMLElement} elements.carEl
 * @param {HTMLElement} elements.trackEl
 * @param {HTMLElement} elements.bgEl
 * @param {HTMLElement} elements.scrollIndicatorEl
 * @param {Object} [customConfig]
 * @param {boolean} [isReducedMotion=false]
 * @returns {gsap.MatchMedia}
 */
export const createHeroScrollAnimation = (
  { heroEl, headingEl, statsEl, visualEl, carEl, trackEl, bgEl, scrollIndicatorEl },
  customConfig = HERO_ANIMATION_CONFIG,
  isReducedMotion = false
) => {
  const mm = gsap.matchMedia();
  const config = customConfig;

  mm.add(
    {
      isDesktop: '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
      isMobile: '(max-width: 767px) and (prefers-reduced-motion: no-preference)',
      isReducedMotion: '(prefers-reduced-motion: reduce)',
    },
    (context) => {
      const { isReducedMotion: prefersReduced } = context.conditions;

      if (prefersReduced || isReducedMotion) {
        return;
      }

      if (!heroEl || !carEl) return;

      // Master Scroll-Driven Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroEl,
          pin: true,
          start: 'top top',
          end: config.scroll?.end || '+=1400',
          scrub: config.scroll?.scrub || 1,
          anticipatePin: 1,
          markers: config.debug?.markers || false,
          invalidateOnRefresh: true,
        },
      });

      // 1. Scroll Indicator Fades Out cleanly on initial scroll
      if (scrollIndicatorEl) {
        tl.to(
          scrollIndicatorEl,
          {
            opacity: 0,
            y: -10,
            duration: 0.2,
            ease: 'none',
          },
          0
        );
      }

      // 2. Car Drives Horizontally Along Track from START to FINISH
      tl.to(
        carEl,
        {
          x: () => {
            const trackContainer = trackEl || visualEl;
            if (!trackContainer || !carEl) return 0;
            const trackWidth = trackContainer.clientWidth;
            const carWidth = carEl.clientWidth || 200;
            const padding = window.innerWidth < 640 ? 36 : 72;
            return Math.max(trackWidth - carWidth - padding, 100);
          },
          duration: 1,
          ease: 'none',
        },
        0
      );

      // 3. Heading remains visually prominent and readable (subtle micro-movement, no disappearing)
      if (headingEl) {
        tl.to(
          headingEl,
          {
            y: -10,
            opacity: 0.96,
            duration: 1,
            ease: 'none',
          },
          0
        );
      }

      // 4. Statistics remain visible
      if (statsEl) {
        tl.to(
          statsEl,
          {
            y: -5,
            opacity: 0.92,
            duration: 1,
            ease: 'none',
          },
          0
        );
      }

      // 5. Background Parallax depth
      if (bgEl) {
        tl.to(
          bgEl,
          {
            yPercent: 8,
            scale: 1.05,
            duration: 1,
            ease: 'none',
          },
          0
        );
      }
    }
  );

  return mm;
};
