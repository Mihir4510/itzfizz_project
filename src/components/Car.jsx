import React, { forwardRef } from 'react';

/**
 * Top-View Car Component (inline SVG)
 * Sits at z-20 so it physically passes OVER the headline (z-10).
 * Features: electric lime (#C6FF3D) & cyan (#22D3EE) accents,
 * headlights, taillights, racing stripes, ground shadow, and speed trail.
 */
const Car = forwardRef(({ className = '' }, ref) => {
  return (
    <div
      ref={ref}
      className={`relative select-none pointer-events-none ${className}`}
      style={{ willChange: 'transform' }}
    >
      {/* Trailing speed glow (intensifies via GSAP) */}
      <div className="car-speed-trail absolute -left-20 top-1/2 -translate-y-1/2 w-32 h-14 bg-gradient-to-r from-transparent via-[#C6FF3D]/15 to-[#22D3EE]/25 blur-lg rounded-full opacity-0 transition-opacity" />

      {/* Ground shadow ellipse */}
      <div className="absolute left-3 right-3 top-[55%] -translate-y-1/2 h-14 bg-black/70 blur-xl rounded-full scale-y-[0.6]" />

      {/* Inline top-view hypercar SVG */}
      <svg
        viewBox="0 0 420 180"
        className="w-36 sm:w-52 md:w-64 lg:w-72 h-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.9)] relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Top-view electric hypercar"
      >
        <defs>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0B0E17" />
            <stop offset="40%" stopColor="#171D2E" />
            <stop offset="70%" stopColor="#1E273D" />
            <stop offset="100%" stopColor="#0D121F" />
          </linearGradient>
          <linearGradient id="limeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A3E635" />
            <stop offset="50%" stopColor="#C6FF3D" />
            <stop offset="100%" stopColor="#84CC16" />
          </linearGradient>
          <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
          <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#0F172A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C6FF3D" stopOpacity="0.2" />
          </linearGradient>
          <filter id="limeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="headGlow" x="-20%" y="-50%" width="160%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Headlight forward beams */}
        <path d="M380 62 L420 40 420 70Z" fill="url(#cyanGrad)" opacity="0.3" filter="url(#headGlow)" />
        <path d="M380 118 L420 110 420 140Z" fill="url(#cyanGrad)" opacity="0.3" filter="url(#headGlow)" />

        {/* Wheels — front */}
        <rect x="290" y="24" width="54" height="20" rx="6" fill="#0A0C14" stroke="#1E293B" strokeWidth="2" />
        <rect x="296" y="28" width="42" height="12" rx="3" fill="#1E293B" />
        <rect x="306" y="30" width="22" height="8" rx="2" fill="#C6FF3D" opacity="0.8" />
        <rect x="290" y="136" width="54" height="20" rx="6" fill="#0A0C14" stroke="#1E293B" strokeWidth="2" />
        <rect x="296" y="140" width="42" height="12" rx="3" fill="#1E293B" />
        <rect x="306" y="142" width="22" height="8" rx="2" fill="#C6FF3D" opacity="0.8" />

        {/* Wheels — rear */}
        <rect x="90" y="22" width="60" height="22" rx="6" fill="#0A0C14" stroke="#1E293B" strokeWidth="2" />
        <rect x="96" y="26" width="48" height="14" rx="3" fill="#1E293B" />
        <rect x="108" y="28" width="24" height="10" rx="2" fill="#22D3EE" opacity="0.7" />
        <rect x="90" y="136" width="60" height="22" rx="6" fill="#0A0C14" stroke="#1E293B" strokeWidth="2" />
        <rect x="96" y="140" width="48" height="14" rx="3" fill="#1E293B" />
        <rect x="108" y="142" width="24" height="10" rx="2" fill="#22D3EE" opacity="0.7" />

        {/* Main body */}
        <path
          d="M40 90 C40 65 70 42 110 40 C170 38 250 44 300 48 C340 50 375 62 388 80 C394 86 394 94 388 100 C375 118 340 130 300 132 C250 136 170 142 110 140 C70 138 40 115 40 90Z"
          fill="url(#bodyGrad)" stroke="#334155" strokeWidth="2"
        />

        {/* Nose cone */}
        <path
          d="M370 70 L396 85 C400 90 400 90 396 95 L370 110 L360 90Z"
          fill="#0B0F19" stroke="url(#limeGrad)" strokeWidth="2" filter="url(#limeGlow)"
        />

        {/* Side air intakes */}
        <path d="M230 44 C270 45 290 52 300 60 L250 64Z" fill="#090D16" stroke="#C6FF3D" strokeWidth="1" />
        <path d="M230 136 C270 135 290 128 300 120 L250 116Z" fill="#090D16" stroke="#C6FF3D" strokeWidth="1" />

        {/* Cockpit glass */}
        <path
          d="M200 90 C210 68 260 66 310 74 C320 90 320 90 310 106 C260 114 210 112 200 90Z"
          fill="url(#glassGrad)" stroke="#22D3EE" strokeWidth="1.5"
        />

        {/* Center ridge */}
        <line x1="140" y1="90" x2="290" y2="90" stroke="#C6FF3D" strokeWidth="2.5" filter="url(#limeGlow)" />

        {/* Rear wing */}
        <rect x="52" y="38" width="16" height="104" rx="4" fill="#0F172A" stroke="url(#limeGrad)" strokeWidth="2" />
        <line x1="52" y1="90" x2="68" y2="90" stroke="#22D3EE" strokeWidth="3" />

        {/* Tail lights */}
        <path d="M44 65 L42 90 L44 115" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
        <path d="M48 70 L46 90 L48 110" stroke="#C6FF3D" strokeWidth="2" filter="url(#limeGlow)" />

        {/* LED headlights */}
        <path d="M374 58 L386 68 L368 70Z" fill="#22D3EE" filter="url(#headGlow)" />
        <path d="M374 122 L386 112 L368 110Z" fill="#22D3EE" filter="url(#headGlow)" />

        {/* Racing stripes */}
        <path d="M100 48 Q200 45 340 58" stroke="#C6FF3D" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.7" />
        <path d="M100 132 Q200 135 340 122" stroke="#C6FF3D" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.7" />
      </svg>
    </div>
  );
});

Car.displayName = 'Car';

export default Car;
