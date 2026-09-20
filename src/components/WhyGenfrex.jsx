import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, Cpu, Target } from 'lucide-react';

export default function WhyGenfrex() {
  const principles = [
    {
      num: '01',
      title: 'STRATEGY FIRST',
      desc: 'We define the commercial objective and customer psychology before writing a line of code or designing an asset. Every move has clear intent.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'CREATIVE THINKING',
      desc: 'Attention is earned, not bought. We craft memorable visual identities and distinct brand personalities that stand out in crowded feeds.',
      icon: Lightbulb,
    },
    {
      num: '03',
      title: 'TECHNOLOGY DRIVEN',
      desc: 'From high-speed modern web stacks to automated growth systems, we use modern engineering to build lasting competitive advantage.',
      icon: Cpu,
    },
    {
      num: '04',
      title: 'RESULTS FOCUSED',
      desc: 'We care about numbers that actually move the needle: qualified leads, customer retention, and verifiable business value.',
      icon: Target,
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-12 bg-[#090A0C] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Large Typography */}
          <motion.div
            className="lg:col-span-6 lg:sticky lg:top-32 space-y-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase font-semibold block">
              OUR PHILOSOPHY
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.04]">
              NOT JUST <br />
              <span className="text-zinc-500">ANOTHER AGENCY.</span>
            </h2>

            <div className="pt-2">
              <p className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-primary leading-[1.08]">
                WE BUILD <br />
                DIGITAL <br />
                MOMENTUM.
              </p>
            </div>

            <p className="text-sm sm:text-base text-zinc-400 max-w-md font-normal leading-relaxed pt-2">
              We operate as a close strategic partner for ambitious founders and modern teams who value craft, speed, and genuine business impact.
            </p>
          </motion.div>

          {/* Right 4 Principles */}
          <div className="lg:col-span-6 space-y-4">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="p-5 sm:p-8 rounded-2xl bg-[#0E0F12] border border-white/[0.07] hover:border-white/20 transition-colors duration-200"
                >
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-xs font-bold text-primary pt-0.5">
                      {p.num}
                    </span>

                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-lg text-white tracking-tight">
                        {p.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
