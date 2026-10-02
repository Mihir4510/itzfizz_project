import { gsap } from '../../../lib/gsap';
import { HERO_ANIMATION_CONFIG } from './heroAnimationConfig';

/**
 * Creates and returns the initial page-load entry animation timeline for the Hero section.
 *
 * Sequence:
 * 1. Heading fades in & slides into position (opacity: 0 -> 1, y: 25 -> 0)
 * 2. Visual test-track & car reveal smoothly
 * 3. Statistics reveal sequentially using GSAP stagger
 * 4. Scroll indicator smoothly reveals
 *
 * @param {Object} elements - References to DOM elements
 * @param {HTMLElement} elements.headingEl
 * @param {HTMLElement} elements.visualEl
 * @param {HTMLElement} elements.statsEl
 * @param {HTMLElement} elements.scrollIndicatorEl
 * @param {Object} [customConfig] - Animation configuration
 * @param {boolean} [isReducedMotion=false] - Reduced motion flag
 * @returns {gsap.core.Timeline}
 */
export const createHeroIntroAnimation = (
  { headingEl, visualEl, statsEl, scrollIndicatorEl },
  customConfig = HERO_ANIMATION_CONFIG,
  isReducedMotion = false
) => {
  const config = customConfig.intro;
  const tl = gsap.timeline({ defaults: { ease: config.heading?.ease || 'power3.out' } });

  if (isReducedMotion) {
    if (headingEl) tl.fromTo(headingEl, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    if (visualEl) tl.fromTo(visualEl, { opacity: 0 }, { opacity: 1, duration: 0.3 }, '-=0.2');
    if (statsEl) tl.fromTo(statsEl, { opacity: 0 }, { opacity: 1, duration: 0.3 }, '-=0.2');
    if (scrollIndicatorEl) tl.fromTo(scrollIndicatorEl, { opacity: 0 }, { opacity: 1, duration: 0.3 }, '-=0.2');
    return tl;
  }

  // 1. Heading (opacity: 0 -> 1, y: 25 -> 0)
  if (headingEl) {
    tl.fromTo(
      headingEl,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
      }
    );
  }

  // 2. Test Track Visual & Car Smooth Reveal
  if (visualEl) {
    tl.fromTo(
      visualEl,
      {
        opacity: 0,
        scale: 0.96,
        y: 25,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.0,
        ease: 'power3.out',
      },
      '-=0.6'
    );
  }

  // 3. Statistics Reveal (Sequential reveal using GSAP stagger)
  if (statsEl) {
    const statItems = statsEl.querySelectorAll('.glass-panel');
    const target = statItems.length > 0 ? statItems : statsEl;

    tl.fromTo(
      target,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      },
      '-=0.5'
    );
  }

  // 4. Scroll Indicator Reveal
  if (scrollIndicatorEl) {
    tl.fromTo(
      scrollIndicatorEl,
      {
        opacity: 0,
        y: 12,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
      },
      '-=0.4'
    );
  }

  return tl;
};
