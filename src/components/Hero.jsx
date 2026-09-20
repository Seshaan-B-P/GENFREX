import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Hero({ onStartProject, onExploreServices }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-between px-4 sm:px-8 lg:px-12 pt-28 sm:pt-36 pb-12 sm:pb-16 bg-[#08090A] border-b border-white/[0.08] overflow-hidden"
    >
      {/* Very subtle dark lighting in the corner */}
      <div className="absolute top-1/4 right-10 w-[450px] h-[350px] bg-primary/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Strong Editorial Typography */}
          <motion.div
            className="lg:col-span-7 space-y-6 sm:space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 font-mono">
                MARKETING AGENCY × DIGITAL GROWTH
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold tracking-[-0.035em] text-white leading-[1.06] break-words"
              style={{ fontSize: 'clamp(2rem, 6.5vw, 5.25rem)' }}
            >
              Empowering Your <br />
              <span className="text-white">Digital Growth</span> <br />
              <span className="text-primary">& Talent Connections</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-xl"
            >
              We help businesses build stronger brands, create meaningful digital experiences and connect with the right talent.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onStartProject}
                className="px-7 py-4 rounded-full text-xs font-bold tracking-wider uppercase bg-primary hover:bg-blue-600 text-white transition-colors duration-200 flex items-center justify-center gap-2 group"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onExploreServices}
                className="px-7 py-4 rounded-full text-xs font-bold tracking-wider uppercase bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 hover:border-white/25 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <span>EXPLORE SERVICES</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Strong Professional Creative Composition */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-2xl bg-[#0F1012] border border-white/[0.08] p-6 sm:p-8 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <span className="text-xs font-mono text-zinc-400">STUDIO FOCUS // 2026</span>
                <span className="text-xs font-mono text-primary font-semibold">SELECTIVE INTAKE</span>
              </div>

              {/* Composition Content */}
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-zinc-950/80 border border-white/[0.06] space-y-2">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase">CORE CAPABILITY</span>
                  <h3 className="font-display font-bold text-lg text-white">
                    Integrated Brand & Acquisition Systems
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Strategy, identity, modern web platforms, and curated talent networks built to scale ambitious companies.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.06]">
                    <span className="text-[10px] font-mono text-zinc-500 block">DISCIPLINE</span>
                    <span className="text-sm font-semibold text-zinc-200 mt-1 block">Full-Funnel Growth</span>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.06]">
                    <span className="text-[10px] font-mono text-zinc-500 block">NETWORK</span>
                    <span className="text-sm font-semibold text-zinc-200 mt-1 block">Vetted Specialist Talent</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>GENFREX AGENCY</span>
                <span className="text-zinc-200">WORLDWIDE ENGAGEMENTS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Clean Bottom Bar */}
      <motion.div
        className="max-w-7xl mx-auto w-full pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2">
          <span className="text-zinc-300">DISCIPLINES:</span>
          <span>Digital Marketing</span>
          <span>•</span>
          <span>Branding</span>
          <span>•</span>
          <span>Web Development</span>
          <span>•</span>
          <span>Talent</span>
        </div>

        <div className="flex items-center gap-2 text-zinc-400">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-primary" />
        </div>
      </motion.div>
    </section>
  );
}
