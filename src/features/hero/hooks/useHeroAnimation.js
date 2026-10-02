import { useGSAP } from '@gsap/react';
import { useReducedMotion } from './useReducedMotion';
import { HERO_ANIMATION_CONFIG } from '../animations/heroAnimationConfig';
import { createHeroIntroAnimation } from '../animations/heroIntro';
import { createHeroScrollAnimation } from '../animations/heroScroll';

/**
 * Custom React hook orchestrating Hero section animations using GSAP & ScrollTrigger.
 *
 * Connects React refs to GSAP context cleanly.
 *
 * @param {Object} refs
 * @param {React.RefObject} refs.heroRef - Container element ref
 * @param {React.RefObject} refs.headingRef - Hero heading ref
 * @param {React.RefObject} refs.statsRef - Hero statistics container ref
 * @param {React.RefObject} refs.visualRef - Hero visual test track ref
 * @param {React.RefObject} refs.carRef - Hero car element ref
 * @param {React.RefObject} refs.trackRef - Test track surface ref
 * @param {React.RefObject} refs.bgRef - Hero background layer ref
 * @param {React.RefObject} refs.scrollIndicatorRef - Scroll indicator ref
 * @param {Object} [config=HERO_ANIMATION_CONFIG] - Tunable animation config
 */
export const useHeroAnimation = (
  { heroRef, headingRef, statsRef, visualRef, carRef, trackRef, bgRef, scrollIndicatorRef },
  config = HERO_ANIMATION_CONFIG
) => {
  const isReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const elements = {
        heroEl: heroRef?.current,
        headingEl: headingRef?.current,
        statsEl: statsRef?.current,
        visualEl: visualRef?.current,
        carEl: carRef?.current,
        trackEl: trackRef?.current,
        bgEl: bgRef?.current,
        scrollIndicatorEl: scrollIndicatorRef?.current,
      };

      // 1. Initial Load Entry Animation
      const introTl = createHeroIntroAnimation(elements, config, isReducedMotion);

      // 2. Scroll-Driven Pinning & Car Animation
      const matchMedia = createHeroScrollAnimation(elements, config, isReducedMotion);

      // Cleanup on unmount
      return () => {
        if (introTl) introTl.kill();
        if (matchMedia) matchMedia.revert();
      };
    },
    {
      scope: heroRef,
      dependencies: [isReducedMotion, config],
    }
  );

  return { isReducedMotion };
};
