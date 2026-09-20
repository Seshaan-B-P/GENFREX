import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, Code2, Users } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: 'STRATEGY',
      description: 'Grounded market positioning, audience research, and clear commercial roadmaps that guide every creative and engineering decision.',
      icon: Compass,
    },
    {
      title: 'CREATIVITY',
      description: 'Distinctive visual identities, memorable design systems, and thoughtful storytelling designed to capture genuine consumer attention.',
      icon: Lightbulb,
    },
    {
      title: 'TECHNOLOGY',
      description: 'High-performance web flagships, resilient digital experiences, and scalable software built cleanly for modern standards.',
      icon: Code2,
    },
    {
      title: 'TALENT',
      description: 'Connecting growing teams with curated, specialized creative and digital operators to solve high-impact growth milestones.',
      icon: Users,
    },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-12 bg-[#08090A] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase font-semibold">
            ABOUT GENFREX
          </span>
        </motion.div>

        {/* Big Editorial Statement */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-12 sm:pb-16 border-b border-white/[0.08]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="lg:col-span-8">
            <h2
              className="font-display font-extrabold tracking-[-0.035em] text-white leading-[1.08] break-words"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 4rem)' }}
            >
              WE BUILD DIGITAL PRESENCE <br />
              <span className="text-zinc-400">THAT MOVES BUSINESSES FORWARD.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            <p>
              GENFREX is a modern marketing agency focused on digital growth, creative communication and talent connections. We combine strategy, creativity and technology to help businesses build stronger brands and reach the right audience.
            </p>
            <p className="text-xs font-mono text-zinc-500 pt-2">
              Bespoke engagements tailored to ambitious teams.
            </p>
          </div>
        </motion.div>

        {/* 4 Descriptive Agency Pillars (Staggered Entrance) */}
        <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-[#0E0F12] border border-white/[0.06] hover:border-white/20 transition-colors duration-200 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-primary font-semibold">
                      0{idx + 1}
                    </span>
                    <Icon className="w-4 h-4 text-zinc-400 group-hover:text-primary transition-colors" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-white tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
