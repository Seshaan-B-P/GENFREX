import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowUpRight, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export default function ByTheNumbers({ onStartProject }) {
  return (
    <section id="numbers" className="relative py-24 sm:py-36 bg-[#050505] border-b border-white/[0.08] overflow-hidden">
      {/* Subtle Electric Blue Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Top Split: Title & Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-16 sm:pb-24 border-b border-white/[0.08]">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-400 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>BY THE NUMBERS</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
              <span className="font-serif italic text-primary font-normal">GENFREX</span>{' '}
              builds brands into digital media powerhouses.
            </h2>

            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
              Here’s what founder-grade execution and algorithmic compounding actually look like in practice.
            </p>

            {/* Predictable Output Pill */}
            <div className="p-5 rounded-2xl bg-[#0D1017] border border-primary/30 space-y-2">
              <div className="flex items-center gap-2 text-accent-cyan font-mono text-xs font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4 text-primary fill-primary" />
                <span>FOUNDER-GRADE CADENCE</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Predictable, high-velocity output you can <span className="font-serif italic text-primary">dial up or down</span> without increasing overhead.
              </p>
            </div>
          </div>

          {/* Right Bento Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Cell 1: Founder Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, borderColor: 'rgba(0, 102, 255, 0.6)' }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl bg-[#0B0D12] border border-white/[0.08] flex flex-col justify-between space-y-4 cursor-default transition-colors"
            >
              <span className="text-4xl text-primary font-serif font-black leading-none">“</span>
              <p className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug">
                An agency that thinks like a <span className="font-serif italic text-primary font-normal">founder.</span>
              </p>
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                COMMERCIAL CLARITY
              </span>
            </motion.div>

            {/* Cell 2: Content That Sticks (5%) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(0, 102, 255, 0.6)' }}
              className="p-6 rounded-2xl bg-[#0B0D12] border border-white/[0.08] space-y-3 flex flex-col justify-between cursor-default transition-colors"
            >
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest font-semibold">
                CONTENT THAT STICKS
              </span>
              <div className="font-display font-black text-4xl sm:text-5xl text-white">
                5<span className="text-primary font-serif italic text-3xl">%</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                of digital content gets remembered. We build for the <span className="text-white font-bold">5%</span> nobody scrolls past.
              </p>
            </motion.div>

            {/* Cell 3: Attention Earned (8s) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              whileHover={{ y: -5, borderColor: 'rgba(0, 102, 255, 0.6)' }}
              className="p-6 rounded-2xl bg-[#0B0D12] border border-white/[0.08] space-y-3 flex flex-col justify-between cursor-default transition-colors"
            >
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest font-semibold">
                ATTENTION, EARNED
              </span>
              <div className="font-display font-black text-4xl sm:text-5xl text-white">
                8<span className="text-accent-cyan font-serif italic text-3xl">s</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                the human attention span you’re up against. We engineer narratives that earn the <span className="text-white font-bold">9th second</span>.
              </p>
            </motion.div>

            {/* Cell 4: Growth That Compounds (3.4x with Animated SVG Curve Chart) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -5, borderColor: 'rgba(0, 209, 255, 0.6)' }}
              className="p-6 rounded-2xl bg-[#0B0D12] border border-primary/40 space-y-3 relative overflow-hidden flex flex-col justify-between cursor-default transition-colors shadow-glow-sm"
            >
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest font-semibold">
                GROWTH THAT COMPOUNDS
              </span>
              <div>
                <div className="font-display font-black text-4xl sm:text-5xl text-white">
                  3.4<span className="text-primary font-serif italic text-3xl">x</span>
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  average reach expansion in first 90 days
                </p>
              </div>

              {/* Glowing Animated SVG Path Line Chart */}
              <div className="w-full h-14 mt-2">
                <svg viewBox="0 0 160 50" preserveAspectRatio="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="chart-blue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0066FF" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 45 Q 40 40, 70 30 T 130 15 L 160 5 L 160 50 L 0 50 Z"
                    fill="url(#chart-blue)"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, ease: 'easeInOut' }}
                    d="M 0 45 Q 40 40, 70 30 T 130 15 L 160 5"
                    fill="none"
                    stroke="#00D1FF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </motion.div>

            {/* Cell 5: Cost-Efficient (-42%) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              whileHover={{ y: -5, borderColor: 'rgba(0, 102, 255, 0.6)' }}
              className="p-6 rounded-2xl bg-[#0B0D12] border border-white/[0.08] space-y-3 flex flex-col justify-between cursor-default transition-colors"
            >
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest font-semibold">
                COST-EFFICIENT CREATIVE
              </span>
              <div className="font-display font-black text-4xl sm:text-5xl text-white">
                -42<span className="text-primary font-serif italic text-3xl">%</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                lower cost-per-acquisition after we re-architect the creative and positioning, not the ad budget.
              </p>
            </motion.div>

            {/* Cell 6: Built to Last (92%) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ y: -5, borderColor: 'rgba(0, 102, 255, 0.6)' }}
              className="p-6 rounded-2xl bg-[#0B0D12] border border-white/[0.08] space-y-3 flex flex-col justify-between cursor-default transition-colors"
            >
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest font-semibold">
                BUILT TO LAST
              </span>
              <div className="font-display font-black text-4xl sm:text-5xl text-white">
                92<span className="text-accent-cyan font-serif italic text-3xl">%</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                client retention and scope expansion within year one. We build compounding systems.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Flagship 3-Phase Engine (Opening Act Inspired) */}
        <div className="pt-16 sm:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-xs font-mono text-primary uppercase tracking-widest">
                <span>★ THE FLAGSHIP FRAMEWORK</span>
              </div>
              <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
                The Genfrex <span className="font-serif italic text-primary font-normal">Engine.</span>
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 max-w-md">
                We don’t just execute your digital growth — we build your company into the powerhouse that owns it.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, borderColor: 'rgba(0, 102, 255, 0.6)' }}
                transition={{ duration: 0.35 }}
                className="p-5 rounded-2xl bg-[#0E1015] border border-white/[0.08] space-y-2 cursor-default transition-colors"
              >
                <span className="text-[10px] font-mono text-primary uppercase tracking-wider font-bold">
                  PHASE 01 · FOR YOU
                </span>
                <h4 className="font-display font-bold text-base text-white">We run the engine</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Strategy, code, and creatives fully operated in-house with us from day one.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.1 }}
                whileHover={{ y: -6, borderColor: 'rgba(0, 209, 255, 0.6)' }}
                className="p-5 rounded-2xl bg-[#0E1015] border border-white/[0.08] space-y-2 cursor-default transition-colors"
              >
                <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-wider font-bold">
                  PHASE 02 · WITH YOU
                </span>
                <h4 className="font-display font-bold text-base text-white">We build your bench</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  We recruit, vet, and train specialized talent directly onto your side.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.2 }}
                whileHover={{ y: -6, borderColor: 'rgba(0, 102, 255, 0.8)' }}
                className="p-5 rounded-2xl bg-[#0E1015] border border-primary/40 space-y-2 cursor-default transition-colors shadow-glow-sm"
              >
                <span className="text-[10px] font-mono text-primary uppercase tracking-wider font-bold">
                  PHASE 03 · BY YOU
                </span>
                <h4 className="font-display font-bold text-base text-white">You run the show</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  You own complete operational independence while we transition to pure advisory.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Stat Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-3xl bg-[#0B0D13] border border-white/[0.08] hover:border-primary/40 transition-colors flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
          >
            <div className="flex items-center gap-8 justify-center sm:justify-start">
              <div>
                <span className="font-display font-black text-3xl sm:text-4xl text-white">18mo</span>
                <span className="text-[11px] font-mono text-zinc-400 block uppercase">TO FULL AUTONOMY</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div>
                <span className="font-display font-black text-3xl sm:text-4xl text-primary">100%</span>
                <span className="text-[11px] font-mono text-zinc-400 block uppercase">OWNED BY YOU</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onStartProject}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-primary hover:bg-primary-hover text-white transition-all flex items-center justify-center gap-2 shadow-glow-md cursor-pointer"
            >
              <span>COMMISSION THIS FRAMEWORK</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
