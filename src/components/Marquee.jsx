import React, { useRef, useState, useEffect } from 'react';

export default function Marquee() {
  const partners = [
    'META BUSINESS PARTNER',
    'GOOGLE ADS CERTIFIED',
    'VERCEL ENTERPRISE',
    'SHOPIFY PLUS',
    'AMAZON WEB SERVICES',
    'LINKEDIN MARKETING LABS',
    'OPENAI & ANTHROPIC AI',
    'SANITY CMS',
  ];

  const marqueeList = [...partners, ...partners, ...partners, ...partners];

  const trackRef = useRef(null);
  const [duration, setDuration] = useState(50);

  useEffect(() => {
    const updateSpeed = () => {
      if (trackRef.current) {
        const halfWidth = trackRef.current.scrollWidth / 2;
        const SPEED = 60; // Exact same 60 pixels per second constant speed as Hero!
        if (halfWidth > 0) {
          setDuration(halfWidth / SPEED);
        }
      }
    };

    updateSpeed();
    const timer = setTimeout(updateSpeed, 200);
    if (document.fonts?.ready) {
      document.fonts.ready.then(updateSpeed);
    }
    window.addEventListener('resize', updateSpeed);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateSpeed);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-6 bg-[#050505] border-b border-white/[0.08]">
      <div className="text-center mb-3">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.25em]">
          — TRUSTED TECHNOLOGY & MARKETING ECOSYSTEM —
        </span>
      </div>
      <div
        ref={trackRef}
        className="flex w-max select-none"
        style={{ animation: `marquee ${duration}s linear infinite` }}
      >
        {marqueeList.map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 px-6">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-zinc-400 hover:text-white transition-colors uppercase">
              {text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
        ))}
      </div>
    </div>
  );
}
