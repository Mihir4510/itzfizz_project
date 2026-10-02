import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { stats } from '../data/stats';

/**
 * useHeroAnimation — Master hook for intro + scroll-driven animations.
 *
 * INTRO TIMELINE (~2s):
 *   1. Letters fade in dimly (opacity 0.08), staggered translateY + blur.
 *   2. Car slides in from off-screen left, parks before first letter.
 *   3. Stat cards stagger reveal + numbers count up.
 *
 * SCROLL TIMELINE (pin: true, scrub: 1, end: "+=250%"):
 *   - Car translateX from 0 (parked at -30vw CSS) to +160vw.
 *   - Per-letter reveal tweens positioned proportionally to letterX/totalWidth.
 *   - Lane dashes parallax.
 *   - Stat cards glow lift.
 *   - Rotation wobble + speed trail on car.
 */
export const useHeroAnimation = ({
  heroRef,
  headlineRef,
  carRef,
  laneDashesRef,
  statsGridRef,
  countersRef,
}) => {
  useGSAP(
    () => {
      const heroEl = heroRef?.current;
      const headlineEl = headlineRef?.current;
      const carEl = carRef?.current;
      const laneDashesEl = laneDashesRef?.current;
      const statsGridEl = statsGridRef?.current;

      if (!heroEl) return;

      const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const letters = headlineEl
        ? Array.from(headlineEl.querySelectorAll('.headline-letter'))
        : [];
      const statCards = statsGridEl
        ? Array.from(statsGridEl.querySelectorAll('.stat-card'))
        : [];
      const speedTrail = carEl
        ? carEl.querySelector('.car-speed-trail')
        : null;

      // ─── Reduced Motion: show final state, no pin ───
      if (isReduced) {
        gsap.set(letters, {
          opacity: 1, y: 0, filter: 'blur(0px)', color: '#C6FF3D',
        });
        if (carEl) gsap.set(carEl, { opacity: 1, x: '80vw', scale: 1 });
        gsap.set(statCards, { opacity: 1, y: 0 });
        countersRef.current.forEach((el, i) => {
          if (el && stats[i]) el.textContent = stats[i].value;
        });
        return;
      }

      // ═══════════════════════════════════════════
      // PHASE 1 — INTRO LOAD TIMELINE (~2s total)
      // ═══════════════════════════════════════════
      const introTl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      // 1a. Headline letters: staggered dim appearance (opacity 0.08)
      //     They start invisible (set in JSX as opacity: 0.08).
      //     Here we animate from fully hidden -> dim (0.08) with translateY + blur.
      if (letters.length) {
        // First make them fully invisible for the entrance
        gsap.set(letters, { opacity: 0, y: 40, filter: 'blur(8px)' });

        introTl.to(letters, {
          opacity: 0.08,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: 0.04,
          ease: 'expo.out',
        });
      }

      // 1b. Car slides in from further left and parks just before the first letter
      if (carEl) {
        gsap.set(carEl, { opacity: 0, x: -100 });

        introTl.to(
          carEl,
          {
            opacity: 1,
            x: 0,     // Parks at its CSS position (-30vw)
            scale: 1,
            duration: 1.0,
            ease: 'power3.out',
          },
          '-=0.4'
        );
      }

      // 1c. Stat cards reveal with stagger
      if (statCards.length) {
        introTl.to(
          statCards,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
          },
          '-=0.5'
        );
      }

      // 1d. Numbers count up from 0 to target
      countersRef.current.forEach((counterEl, index) => {
        if (!counterEl || !stats[index]) return;
        const target = stats[index].value;
        const proxy = { val: 0 };

        introTl.to(
          proxy,
          {
            val: target,
            duration: 1.0,
            ease: 'power2.out',
            snap: { val: 1 },
            onUpdate: () => {
              counterEl.textContent = Math.round(proxy.val);
            },
          },
          '-=0.7'
        );
      });

      // ═══════════════════════════════════════════════
      // PHASE 2 — SCROLL-DRIVEN TIMELINE (core feature)
      // ═══════════════════════════════════════════════
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Total horizontal travel: from -30vw (CSS left) across the full viewport
        // We animate x from 0 to 160vw (so total position goes -30vw + 160vw = 130vw)
        const totalTravel = '160vw';

        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroEl,
            pin: true,
            start: 'top top',
            end: '+=250%',
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // ── A. Car horizontal translation (ease: "none" for 1:1 scroll mapping) ──
        if (carEl) {
          scrollTl.to(
            carEl,
            {
              x: totalTravel,
              duration: 1,
              ease: 'none',
            },
            0
          );

          // Rotation wobble keyframes layered on top
          scrollTl.to(
            carEl,
            {
              keyframes: [
                { rotation: 1.2, duration: 0.15 },
                { rotation: -1.5, duration: 0.15 },
                { rotation: 1.0, duration: 0.20 },
                { rotation: -0.8, duration: 0.20 },
                { rotation: 0.5, duration: 0.15 },
                { rotation: 0, duration: 0.15 },
              ],
              ease: 'none',
            },
            0
          );

          // Speed trail glow intensifies mid-scroll
          if (speedTrail) {
            scrollTl.fromTo(
              speedTrail,
              { opacity: 0 },
              {
                keyframes: [
                  { opacity: 0, duration: 0.1 },
                  { opacity: 0.7, duration: 0.3 },
                  { opacity: 0.9, duration: 0.3 },
                  { opacity: 0.4, duration: 0.2 },
                  { opacity: 0, duration: 0.1 },
                ],
                ease: 'none',
              },
              0
            );
          }
        }

        // ── B. Per-letter reveal tied to car position ──
        // Letters are revealed proportionally across the scroll.
        // The car covers approximately the middle 60% of scroll (10% to 70%)
        // to cross the headline. Each letter gets a small tween window.
        if (letters.length) {
          const letterCount = letters.length;
          // Spread letter reveals across 10%–70% of the scroll timeline duration
          const revealStart = 0.10;
          const revealEnd = 0.70;
          const revealSpan = revealEnd - revealStart;
          const letterWindowDuration = 0.06; // Each letter's tween duration

          letters.forEach((letter, i) => {
            const progress = revealStart + (i / (letterCount - 1)) * revealSpan;

            scrollTl.to(
              letter,
              {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                color: '#C6FF3D',
                textShadow: '0 0 20px rgba(198,255,61,0.6), 0 0 40px rgba(198,255,61,0.25)',
                duration: letterWindowDuration,
                ease: 'power2.out',
              },
              progress
            );
          });
        }

        // ── C. Stat cards lift + glow highlight during scroll ──
        if (statCards.length) {
          scrollTl.to(
            statCards,
            {
              y: -6,
              borderColor: 'rgba(198, 255, 61, 0.35)',
              boxShadow: '0 12px 30px -8px rgba(198, 255, 61, 0.18)',
              stagger: 0.06,
              duration: 0.5,
              ease: 'power1.inOut',
            },
            0.3
          );
        }

        // ── D. Lane dashes parallax (move at different rate than car) ──
        if (laneDashesEl) {
          scrollTl.to(
            laneDashesEl,
            {
              xPercent: -30,
              duration: 1,
              ease: 'none',
            },
            0
          );
        }

        // ── E. Scroll indicator fade out ──
        const scrollInd = heroEl.querySelector('.scroll-indicator');
        if (scrollInd) {
          scrollTl.to(
            scrollInd,
            {
              opacity: 0,
              y: -8,
              duration: 0.1,
              ease: 'none',
            },
            0
          );
        }
      });

      // Cleanup
      return () => {
        mm.revert();
      };
    },
    { scope: heroRef }
  );
};
