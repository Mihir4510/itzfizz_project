import React from 'react';

/**
 * StatCard Component
 * Glassmorphic card with large tabular-nums counter + description.
 * Counter element exposed via ref for GSAP count-up animation.
 * Sits at z-30 so it layers above the car.
 */
const StatCard = ({ id, value, unit = '%', description, counterRef }) => {
  return (
    <div
      data-stat-id={id}
      className="stat-card glass-panel-lime relative overflow-hidden rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col gap-2 select-none opacity-0 translate-y-8"
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Top accent gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C6FF3D]/50 to-transparent" />

      {/* Large counter */}
      <div className="flex items-baseline gap-0.5">
        <span
          ref={counterRef}
          data-target-value={value}
          className="stat-counter font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#C6FF3D] tracking-tight tabular-nums drop-shadow-[0_0_12px_rgba(198,255,61,0.4)]"
        >
          0
        </span>
        <span className="font-heading text-xl sm:text-2xl font-bold text-[#22D3EE] drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
          {unit}
        </span>
      </div>

      {/* Description */}
      <p className="text-[11px] sm:text-xs font-medium text-slate-400 leading-snug">
        {description}
      </p>

      {/* Corner glow */}
      <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#C6FF3D]/5 rounded-full blur-xl pointer-events-none" />
    </div>
  );
};

export default StatCard;
