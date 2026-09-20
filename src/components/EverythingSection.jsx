import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';

export default function EverythingSection() {
  return (
    <section className="relative py-28 sm:py-40 px-4 sm:px-8 lg:px-12 bg-[#050505] border-b border-white/[0.08] overflow-hidden select-none">
      {/* Background Radial Glow */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary rounded-full blur-[180px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Top Mini Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-400 uppercase tracking-widest mb-10"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
          <span>FULL-STACK OPERATING MODEL</span>
        </motion.div>

        {/* Row 1: "We do" + [Animated Gradient Video Pill] */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap"
        >
          <span
            className="font-display font-black text-white tracking-tighter"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 7.5rem)', lineHeight: 1 }}
          >
            We do
          </span>

          {/* Embedded Dynamic Pill with Floating Animation */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05 }}
            className="h-12 sm:h-20 md:h-24 px-5 sm:px-8 rounded-full bg-gradient-to-r from-blue-600 via-primary to-cyan-500 flex items-center justify-center gap-2.5 shadow-glow-md border border-white/25 overflow-hidden cursor-pointer"
          >
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white animate-ping" />
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              STRATEGY · CODE · MEDIA
            </span>
          </motion.div>
        </motion.div>

        {/* Row 2: "EVERYTHING!" (Massive Scale) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="my-2 sm:my-4"
        >
          <h2
            className="font-display font-black text-white tracking-tight uppercase hover:text-accent-cyan transition-colors duration-500"
            style={{ fontSize: 'clamp(3.5rem, 14vw, 13rem)', lineHeight: 0.95 }}
          >
            EVERYTHING
            <span className="text-primary font-serif italic font-normal">!</span>
          </h2>
        </motion.div>

        {/* Row 3: [Animated Pill] + "Then we do what no agency does." */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap mt-2"
        >
          {/* Embedded Second Pill with Floating Animation */}
          <motion.div
            animate={{ y: [3, -3, 3] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05 }}
            className="h-10 sm:h-16 md:h-20 px-4 sm:px-7 rounded-full bg-[#0E121A] border border-primary/40 flex items-center justify-center gap-2 shadow-glow-sm cursor-pointer"
          >
            <span className="text-accent-cyan font-mono text-xs sm:text-sm font-bold">
              ★ BESPOKE
            </span>
          </motion.div>

          <span
            className="font-display font-extrabold text-white tracking-tighter"
            style={{ fontSize: 'clamp(1.5rem, 4.5vw, 4.25rem)', lineHeight: 1.1 }}
          >
            Then we do what{' '}
            <span className="font-serif italic text-primary font-normal">
              no agency does.
            </span>
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 sm:mt-12 text-sm sm:text-lg md:text-xl text-zinc-400 font-normal max-w-2xl mx-auto leading-relaxed"
        >
          Building your brand into an independent media powerhouse that doesn't need to beg for audience attention.
        </motion.p>
      </div>
    </section>
  );
}
