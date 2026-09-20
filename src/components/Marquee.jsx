import React from 'react';

export default function Marquee() {
  const items = [
    'STRATEGY',
    'BRANDING',
    'DIGITAL',
    'CONTENT',
    'MARKETING',
    'TALENT',
    'WEB DEVELOPMENT',
    'GROWTH SYSTEMS',
  ];

  const marqueeList = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-5 bg-[#0C0D0F] border-b border-white/[0.06]">
      <div className="flex w-max animate-marquee select-none">
        {marqueeList.map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 px-4">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase">
              {text}
            </span>
            <span className="w-1 h-1 rounded-full bg-primary" />
          </div>
        ))}
      </div>
    </div>
  );
}
