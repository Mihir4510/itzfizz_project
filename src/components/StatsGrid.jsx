import React, { forwardRef } from 'react';
import StatCard from './StatCard';
import { stats } from '../data/stats';

/**
 * StatsGrid Component
 * Responsive grid (2×2 mobile, 4-col desktop) mapped from stats data array.
 * Sits at z-30 so stat cards layer above the car.
 */
const StatsGrid = forwardRef(({ countersRef }, ref) => {
  return (
    <div
      ref={ref}
      className="relative z-30 w-full max-w-5xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
    >
      {stats.map((stat, index) => (
        <StatCard
          key={stat.id}
          id={stat.id}
          value={stat.value}
          unit={stat.unit}
          description={stat.description}
          counterRef={(el) => {
            if (countersRef) {
              countersRef.current[index] = el;
            }
          }}
        />
      ))}
    </div>
  );
});

StatsGrid.displayName = 'StatsGrid';

export default StatsGrid;
