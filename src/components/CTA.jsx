import React from 'react';
import { motion } from 'framer-motion';

export default function CTA({ onStartProject }) {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-12 bg-[#08090A] border-b border-white/[0.08]">
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-xs font-mono tracking-[0.25em] text-zinc-400 uppercase font-semibold block">
          COMMENCE AN INQUIRY
        </span>

        <h2
          className="font-display font-extrabold tracking-[-0.035em] text-white leading-[1.06] break-words"
          style={{ fontSize: 'clamp(2rem, 7vw, 4.75rem)' }}
        >
          YOUR NEXT <br />
          <span className="text-primary">BIG MOVE</span> <br />
          STARTS HERE.
        </h2>

        <p className="text-base sm:text-xl text-zinc-400 font-normal max-w-lg mx-auto leading-relaxed">
          Let’s build something people remember.
        </p>

        <div className="pt-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStartProject}
            className="px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase bg-primary hover:bg-blue-600 text-white transition-colors duration-200 inline-flex items-center gap-2"
          >
            <span>START A PROJECT →</span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
