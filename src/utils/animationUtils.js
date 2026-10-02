/**
 * Helper utility functions prepared for animation and math calculations.
 */

export const EASES = {
  power2Out: 'power2.out',
  power3InOut: 'power3.inOut',
  expoOut: 'expo.out',
  none: 'none',
};

/**
 * Formats a metric value cleanly for UI display
 */
export const formatMetric = (val) => {
  if (typeof val === 'number') {
    return `${val}%`;
  }
  return val;
};

/**
 * Checks if the browser prefers reduced motion
 */
export const checkReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
