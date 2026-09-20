import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, CheckCircle2 } from 'lucide-react';

export default function Work({ onViewAllWork, onSelectProject }) {
  const [selectedCase, setSelectedCase] = useState(null);

  const projects = [
    {
      id: 'nexora',
      num: '01',
      name: 'NEXORA',
      category: 'Brand Strategy + Digital Growth',
      description: 'Scaled Nexora through an integrated brand revamp, high-velocity acquisition funnels, and executive positioning.',
      fullDesc: 'We partnered with Nexora to overhaul their market positioning and digital acquisition infrastructure. Through disciplined performance marketing and a cohesive visual identity, Nexora established undisputed category authority.',
      deliverables: ['Brand Architecture', 'Performance Marketing', 'Web Experience', 'Creative Direction'],
    },
    {
      id: 'voltix',
      num: '02',
      name: 'VOLTIX',
      category: 'Website + Performance Marketing',
      description: 'Engineered a modern web platform paired with automated lifecycle paid media, driving enterprise demo conversions.',
      fullDesc: 'Voltix required a high-performing digital flagship to support rapid enterprise expansion. We designed and engineered an ultra-fast web experience combined with targeted search and paid media campaigns.',
      deliverables: ['Web Development', 'Search Campaigns', 'Conversion Rate Optimization', 'Analytics Setup'],
    },
    {
      id: 'orbita',
      num: '03',
      name: 'ORBITA',
      category: 'Social Media + Content',
      description: 'Directed an omni-channel short-form video and social strategy, positioning Orbita as the premier lifestyle tech product.',
      fullDesc: 'We directed the digital product rollout for Orbita, creating an authentic content engine across short-form video, creative social storytelling, and community engagement that drove rapid brand recall.',
      deliverables: ['Content Creation', 'Social Media Strategy', 'Video Production', 'Community Growth'],
    },
    {
      id: 'lumora',
      num: '04',
      name: 'LUMORA',
      category: 'Brand Identity + Web Experience',
      description: 'Complete visual identity architecture and bespoke digital storefront for luxury tech accessories with immersive storytelling.',
      fullDesc: 'An end-to-end design engagement encompassing brand guidelines, typographic design, and a minimalist web experience engineered for high-ticket customer conversion.',
      deliverables: ['Visual Identity', 'Typography System', 'Responsive Website', 'Brand Guidelines'],
    },
  ];

  return (
    <section id="work" className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#08090A] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08] gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase font-semibold mb-4 block">
              SELECTED WORK
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
              FEATURED PROJECTS
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400 font-normal max-w-xl">
              Ideas designed to create attention and generate impact.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onViewAllWork ? onViewAllWork() : setSelectedCase(projects[0])}
            className="self-start md:self-end px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-white/20 transition-colors duration-200 flex items-center gap-2 group"
          >
            <span>VIEW ALL WORK</span>
            <ArrowUpRight className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>
        </motion.div>

        {/* Asymmetric Case Studies Layout */}
        <div className="space-y-16 sm:space-y-24">
          {/* Project 01 — Large Hero Showcase Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            onClick={() => setSelectedCase(projects[0])}
            className="group cursor-pointer space-y-6"
          >
            {/* Visual Container */}
            <div className="w-full h-80 sm:h-[480px] rounded-3xl bg-[#12141A] border border-white/[0.08] group-hover:border-primary/50 transition-colors duration-200 overflow-hidden relative flex flex-col justify-between p-8 sm:p-12">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs text-zinc-400 font-semibold px-3 py-1 rounded bg-black/40 border border-white/10">
                  CASE STUDY 01
                </span>
                <div className="w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="my-auto max-w-lg space-y-3">
                <span className="text-xs font-mono text-primary uppercase tracking-widest">
                  GLOBAL BRAND & DIGITAL GROWTH
                </span>
                <h3 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
                  Nexora Capital
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  High-velocity acquisition funnels and modern identity systems that repositioned an international fintech brand.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                {projects[0].deliverables.map((d) => (
                  <span key={d} className="text-xs font-mono px-2.5 py-1 rounded bg-black/40 text-zinc-300">
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-2">
              <div>
                <h4 className="font-display font-bold text-xl text-white">NEXORA</h4>
                <p className="text-sm text-zinc-400">Brand Strategy + Digital Growth</p>
              </div>
              <button className="inline-flex items-center gap-1 text-xs font-bold text-primary tracking-wider uppercase group-hover:underline">
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>

          {/* Project 02 & 04 Grid (Offset & Split Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
            {/* Project 02 — Offset Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              onClick={() => setSelectedCase(projects[1])}
              className="lg:col-span-7 group cursor-pointer space-y-5"
            >
              <div className="w-full h-72 sm:h-[380px] rounded-3xl bg-[#111317] border border-white/[0.08] group-hover:border-primary/50 transition-colors duration-200 overflow-hidden p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs text-zinc-400 px-3 py-1 rounded bg-black/40 border border-white/10">
                    CASE STUDY 02
                  </span>
                  <div className="w-9 h-9 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="my-auto space-y-2">
                  <span className="text-xs font-mono text-primary uppercase tracking-widest">
                    ENERGY & MOBILITY PLATFORM
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                    Voltix Systems
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
                    High-speed web platform paired with automated lifecycle paid media for autonomous fleet operations.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.06]">
                  {projects[1].deliverables.map((d) => (
                    <span key={d} className="text-xs font-mono px-2 py-0.5 rounded bg-black/40 text-zinc-300">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-2">
                <h4 className="font-display font-bold text-lg text-white">VOLTIX</h4>
                <p className="text-sm text-zinc-400">Website + Performance Marketing</p>
                <div className="mt-2 text-xs font-bold text-primary tracking-wider uppercase inline-flex items-center gap-1 group-hover:underline">
                  <span>VIEW CASE STUDY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>

            {/* Project 04 — Split Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              onClick={() => setSelectedCase(projects[3])}
              className="lg:col-span-5 group cursor-pointer space-y-5 lg:pt-12"
            >
              <div className="w-full h-72 sm:h-[380px] rounded-3xl bg-[#14151B] border border-white/[0.08] group-hover:border-primary/50 transition-colors duration-200 overflow-hidden p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs text-zinc-400 px-3 py-1 rounded bg-black/40 border border-white/10">
                    CASE STUDY 04
                  </span>
                  <div className="w-9 h-9 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="my-auto space-y-2">
                  <span className="text-xs font-mono text-primary uppercase tracking-widest">
                    LUXURY ARCHITECTURAL LIGHTING
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                    Lumora Studio
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Complete visual identity and bespoke digital storefront for architectural luminaires.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.06]">
                  {projects[3].deliverables.slice(0, 2).map((d) => (
                    <span key={d} className="text-xs font-mono px-2 py-0.5 rounded bg-black/40 text-zinc-300">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-2">
                <h4 className="font-display font-bold text-lg text-white">LUMORA</h4>
                <p className="text-sm text-zinc-400">Brand Identity + Web Experience</p>
                <div className="mt-2 text-xs font-bold text-primary tracking-wider uppercase inline-flex items-center gap-1 group-hover:underline">
                  <span>VIEW CASE STUDY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Project 03 — Large Horizontal Image Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            onClick={() => setSelectedCase(projects[2])}
            className="group cursor-pointer space-y-6"
          >
            <div className="w-full h-80 sm:h-[420px] rounded-3xl bg-[#101216] border border-white/[0.08] group-hover:border-primary/50 transition-colors duration-200 overflow-hidden p-8 sm:p-12 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs text-zinc-400 px-3 py-1 rounded bg-black/40 border border-white/10">
                  CASE STUDY 03
                </span>
                <div className="w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="my-auto max-w-xl space-y-3">
                <span className="text-xs font-mono text-primary uppercase tracking-widest">
                  CONSUMER HARDWARE DTC
                </span>
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                  Orbita Acoustic Labs
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  Omni-channel video and social campaigns that transformed a spatial audio product into a cultural category leader.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                {projects[2].deliverables.map((d) => (
                  <span key={d} className="text-xs font-mono px-2.5 py-1 rounded bg-black/40 text-zinc-300">
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-2">
              <div>
                <h4 className="font-display font-bold text-xl text-white">ORBITA</h4>
                <p className="text-sm text-zinc-400">Social Media + Content</p>
              </div>
              <button className="inline-flex items-center gap-1 text-xs font-bold text-primary tracking-wider uppercase group-hover:underline">
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Clean Case Study Detail Dialog with AnimatePresence */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-[#101114] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6"
            >
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="text-xs font-mono text-primary uppercase tracking-wider font-semibold">
                  CASE STUDY {selectedCase.num} // {selectedCase.category}
                </span>
                <h3 className="font-display font-extrabold text-3xl text-white">
                  {selectedCase.name}
                </h3>
              </div>

              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                {selectedCase.fullDesc}
              </p>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                  Deliverables Included
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedCase.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedCase(null)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-primary hover:bg-blue-600 text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <span>DISCUSS SIMILAR PROJECT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-white/10 text-zinc-300 transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
