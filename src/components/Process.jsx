import React from 'react';
import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      desc: 'Understand the brand, audience and business goals.',
    },
    {
      num: '02',
      title: 'DEFINE',
      desc: 'Create the strategy and direction.',
    },
    {
      num: '03',
      title: 'CREATE',
      desc: 'Build the visual and digital experience.',
    },
    {
      num: '04',
      title: 'LAUNCH',
      desc: 'Launch campaigns, websites and content.',
    },
    {
      num: '05',
      title: 'GROW',
      desc: 'Measure, optimize and scale.',
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-12 bg-[#0A0B0D] border-b border-white/[0.08]">
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
            HOW WE WORK
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-tight text-white">
            OUR PROCESS
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-zinc-400 font-normal max-w-xl">
            A structured, collaborative approach to delivering high-impact outcomes.
          </p>
        </motion.div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:grid grid-cols-5 gap-8 relative pt-6">
          <motion.div
            className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.1] origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />

          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-3 pt-4"
            >
              <span className="font-mono text-xs text-primary font-semibold block">
                {step.num}
              </span>
              <h3 className="font-display font-bold text-lg text-white tracking-tight">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-8 pl-6 sm:pl-8 border-l border-white/[0.15] ml-3 sm:ml-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="relative space-y-1.5"
            >
              <span className="absolute -left-[30px] sm:-left-[38px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-[#0A0B0D]" />
              <span className="font-mono text-xs text-primary font-semibold block">
                {step.num}
              </span>
              <h3 className="font-display font-bold text-lg text-white tracking-tight">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
