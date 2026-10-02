import React from 'react';

const SectionLabel = ({ children, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wider uppercase backdrop-blur-md ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
      <span>{children}</span>
    </div>
  );
};

export default SectionLabel;
