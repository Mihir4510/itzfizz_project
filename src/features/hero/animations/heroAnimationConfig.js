/**
 * Central configuration for Hero animations (Intro & Scroll-Driven).
 * Prevents magic numbers scattered across animation logic.
 */
export const HERO_ANIMATION_CONFIG = {
  // Part 2A: Initial Page-Load Timeline Configuration
  intro: {
    heading: {
      duration: 1.0,
      ease: 'power3.out',
      yStart: 30,
      opacityStart: 0,
    },
    visual: {
      duration: 1.2,
      ease: 'power3.out',
      yStart: 40,
      scaleStart: 0.94,
      opacityStart: 0,
      delay: '-=0.7',
    },
    stats: {
      duration: 0.8,
      ease: 'power2.out',
      yStart: 25,
      opacityStart: 0,
      stagger: 0.15,
      delay: '-=0.6',
    },
    scrollIndicator: {
      duration: 0.8,
      ease: 'power2.out',
      yStart: 15,
      opacityStart: 0,
      delay: '-=0.4',
    },
  },

  // Part 2B: Scroll-Driven Pinning & Animation Configuration
  scroll: {
    end: '+=1400', // Pinned scroll track distance
    scrub: 1, // Smooth scrub response (1 sec catch-up)
  },

  // Desktop Breakpoint Animation Target Values (min-width: 768px)
  desktop: {
    visual: {
      xPercent: 35, // Horizontal movement
      yPercent: -5,
      rotation: 5.5, // Subtle rotate
      scale: 1.1, // Subtle scale
    },
    heading: {
      y: -50,
      opacity: 0.6,
    },
    stats: {
      y: -20,
      opacity: 0.75,
    },
    background: {
      yPercent: 15,
      scale: 1.12,
    },
  },

  // Mobile Breakpoint Animation Target Values (max-width: 767px)
  mobile: {
    visual: {
      xPercent: 10, // Moderate horizontal movement for small screens
      yPercent: -15,
      rotation: 2.5,
      scale: 1.04,
    },
    heading: {
      y: -30,
      opacity: 0.7,
    },
    stats: {
      y: -10,
      opacity: 0.85,
    },
    background: {
      yPercent: 8,
      scale: 1.05,
    },
  },

  // Reduced Motion Fallback Parameters
  reducedMotion: {
    introDuration: 0.4,
    visual: {
      xPercent: 0,
      rotation: 0,
      scale: 1.0,
    },
  },

  // Debug Markers for ScrollTrigger
  debug: {
    markers: false,
  },
};
