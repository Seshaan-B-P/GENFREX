import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const sampleNotes = [
    {
      quote: 'GENFREX helped us turn our digital presence into something that actually represents our brand.',
      author: 'Arun K.',
      company: 'Nexora',
    },
    {
      quote: 'From strategy to execution, the entire experience felt structured, creative and focused.',
      author: 'Priya S.',
      company: 'Lumora',
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-12 bg-[#0A0B0D] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-white/[0.08] gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase font-semibold mb-3 sm:mb-4 block">
              PARTNER NOTES
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-tight text-white">
              CLIENT FEEDBACK
            </h2>
          </div>

          <div className="text-xs font-mono text-zinc-500">
            [ SAMPLE / DEMO CLIENT TESTIMONIALS ]
          </div>
        </motion.div>

        {/* Clean Editorial Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {sampleNotes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#0E0F12] border border-white/[0.07] hover:border-white/20 transition-colors duration-200 flex flex-col justify-between space-y-6"
            >
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed italic">
                "{item.quote}"
              </p>

              <div className="pt-4 border-t border-white/[0.06]">
                <span className="font-display font-bold text-white text-sm block">
                  {item.author}
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  {item.company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
