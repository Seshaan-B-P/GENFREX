import React, { useState } from 'react';
import Work from '../components/Work';

export default function WorkPage({ onStartProject }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'BRANDING', 'PERFORMANCE', 'WEB DEV', 'SOCIAL & CONTENT'];

  return (
    <div className="relative pt-32 pb-24 px-6 sm:px-8 lg:px-12 bg-[#08090A] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase font-semibold mb-4 block">
            PORTFOLIO ARCHIVE
          </span>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            SELECTED WORK
          </h1>

          <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-xl">
            A curated index of strategic partnerships and client outcomes.
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-colors ${
                  activeFilter === f
                    ? 'bg-primary text-white font-semibold'
                    : 'bg-[#121316] text-zinc-400 border border-white/10 hover:border-white/20'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <Work onViewAllWork={() => {}} onSelectProject={onStartProject} />
      </div>
    </div>
  );
}
