import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Hero({ onStartProject, onExploreServices, onNavigate }) {
  const tickerItems = [
    'Brand',
    'Content',
    'Culture',
    'Growth',
    'Campaign',
    'Video',
    'Storytelling',
    'Strategy',
    'AI',
    'Social',
    'Web & Code',
    'Talent Engine',
  ];

  const trackRef = useRef(null);
  const [duration, setDuration] = useState(35);

  useEffect(() => {
    const updateSpeed = () => {
      if (trackRef.current) {
        const halfWidth = trackRef.current.scrollWidth / 2;
        const SPEED = 60; // 60 pixels per second constant speed
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
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col justify-between pt-32 sm:pt-40 pb-0 bg-[#050505] overflow-hidden border-b border-white/[0.08]"
    >
      {/* Subtle Atmospheric Electric Blue Glow with breathing animation */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.07, 0.15, 0.07],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary rounded-full blur-[160px] pointer-events-none"
      />

      {/* Main Center Stage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-center my-auto relative z-10">
        <div className="max-w-5xl">
          {/* Tagline Top */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            <span>GENFREX // MODERN GROWTH STUDIO</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold tracking-[-0.04em] text-white leading-[1.04] break-words select-none"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6.75rem)' }}
          >
            Time to build digital presence,{' '}
            <span className="font-serif italic font-normal text-primary tracking-normal inline-block hover:scale-105 transition-transform">
              better.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6"
          >
            <p className="font-display font-black text-2xl sm:text-4xl text-zinc-300">
              We’re GENFREX.
            </p>
            <p className="text-sm sm:text-base text-zinc-400 font-normal max-w-xl leading-relaxed">
              We shape brands people believe in — combining strategy, storytelling, high-performance web systems, and curated talent networks.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar: Tagline & Interactive Checkout Pill */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6 relative z-10">
        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest space-y-1">
          <p className="text-zinc-400">KARUR// WORLDWIDE ENGAGEMENTS</p>
          <p>STRATEGY · CREATIVE · CODE · TALENT</p>
        </div>

        {/* Action Buttons: Checkout Self-Made & Discovery Call */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Opening Act Checkout Self-Made Pill with Magnetic Physics */}
          <MagneticButton
            strength={0.25}
            onClick={() => onNavigate ? onNavigate('self-made') : onStartProject()}
            className="group flex items-center gap-3.5 py-2 px-4 rounded-full bg-[#0E1015] border border-primary/40 hover:border-accent-cyan transition-all shadow-glow-sm cursor-pointer"
          >
            <div className="text-left">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block leading-tight">
                CHECKOUT
              </span>
              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-accent-cyan transition-colors">
                Self-Made ★
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shrink-0 group-hover:bg-primary-hover transition-colors">
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </MagneticButton>

          {/* Schedule Discovery Call Pill with Magnetic Physics */}
          <MagneticButton
            strength={0.2}
            onClick={onStartProject}
            className="group flex items-center gap-3 py-2 px-4 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/25 transition-all text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white cursor-pointer"
          >
            <span>DISCOVERY CALL</span>
          </MagneticButton>
        </div>
      </div>

      {/* Opening Act Style Infinite Ticker */}
      <div className="w-full border-t border-white/[0.08] bg-[#07080A] py-3.5 overflow-hidden select-none">
        <div
          ref={trackRef}
          className="flex w-max select-none"
          style={{ animation: `marquee ${duration}s linear infinite` }}
        >
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 px-3">
              <span>{item}</span>
              <span className="text-primary font-black">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
