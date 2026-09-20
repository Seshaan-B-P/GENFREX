import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Talent({ onSelectTalentAction }) {
  const businessPoints = [
    'Vetted senior strategists, designers, and developers',
    'Rapid placement within 5 to 7 business days',
    'Flexible project-based or ongoing retainers',
  ];

  const talentPoints = [
    'Access to ambitious venture-backed and growth-stage brands',
    'Curated remote opportunities with competitive compensation',
    'Clear project scopes and direct client collaboration',
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-12 bg-[#08090A] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-white/[0.08]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase font-semibold mb-3 sm:mb-4 block">
            TALENT ECOSYSTEM
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-tight text-white">
            CONNECTING BUSINESS WITH TALENT.
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-zinc-400 font-normal max-w-2xl">
            GENFREX connects businesses with creative and digital talent to help teams find the skills they need for their next stage of growth.
          </p>
        </motion.div>

        {/* Two Clear Paths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Path 1: For Businesses */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#0E0F12] border border-white/[0.08] hover:border-primary/50 transition-colors duration-200 flex flex-col justify-between space-y-6 sm:space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono text-primary font-semibold uppercase tracking-wider">
                HIRE OPERATORS
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                FOR BUSINESSES
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Find the right creative and digital talent for your projects.
              </p>

              <div className="space-y-2.5 pt-2">
                {businessPoints.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectTalentAction && onSelectTalentAction('hire_talent')}
              className="w-full sm:w-auto self-start px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-primary hover:bg-blue-600 text-white transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <span>FIND TALENT →</span>
            </motion.button>
          </motion.div>

          {/* Path 2: For Talent */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="p-8 sm:p-10 rounded-2xl bg-[#0E0F12] border border-white/[0.08] hover:border-white/20 transition-colors duration-200 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider">
                JOIN THE NETWORK
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                FOR TALENT
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Discover opportunities with growing businesses.
              </p>

              <div className="space-y-2.5 pt-2">
                {talentPoints.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectTalentAction && onSelectTalentAction('join_talent')}
              className="w-full sm:w-auto self-start px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <span>EXPLORE OPPORTUNITIES →</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
