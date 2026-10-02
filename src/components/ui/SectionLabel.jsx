import React from 'react';

const SectionLabel = ({ children, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6FF3D]/10 border border-[#C6FF3D]/25 text-[#C6FF3D] text-[11px] font-mono font-semibold tracking-[0.2em] uppercase backdrop-blur-md shadow-[0_0_15px_rgba(198,255,61,0.1)] ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D] animate-pulse" />
      <span>{children}</span>
    </div>
  );
};

export default SectionLabel;
