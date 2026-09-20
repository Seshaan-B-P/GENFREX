import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function InteractiveServices({ onSelectService, onExploreAllServices }) {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  const services = [
    {
      id: 'talent',
      num: '01',
      title: 'TALENT CONNECTIONS',
      subtitle: 'FLAGSHIP PROGRAMME',
      desc: 'Connecting ambitious brands with vetted creative, technical, and executive talent to solve high-impact growth milestones.',
      tags: ['Staff Augmentation', 'Fractional Leaders', 'Candidate Vetting'],
      accent: 'from-blue-600/30 to-cyan-500/20',
      isFlagship: true,
    },
    {
      id: 'strategy',
      num: '02',
      title: 'STRATEGY & CONSULTING',
      subtitle: 'MARKET POSITIONING',
      desc: 'Commercial roadmaps, customer segmentation, and competitive positioning that establish category authority.',
      tags: ['Brand Positioning', 'Audience Profiling', 'Go-To-Market'],
      accent: 'from-blue-700/30 to-indigo-600/20',
    },
    {
      id: 'branding',
      num: '03',
      title: 'BRANDING & IDENTITY',
      subtitle: 'VISUAL ARCHITECTURE',
      desc: 'Distinctive visual systems, memorable typographic hierarchies, and brand guidelines crafted for enduring trust.',
      tags: ['Design Systems', 'Iconography', 'Brand Bible'],
      accent: 'from-cyan-600/30 to-blue-500/20',
    },
    {
      id: 'content',
      num: '04',
      title: 'CONTENT CREATION & FILMS',
      subtitle: 'CULTURE & STORYTELLING',
      desc: 'High-volume short-form video, commercial video editing, 3D motion graphics, and editorial content that demands attention.',
      tags: ['Viral Reels', 'Product 3D Motion', 'Ghostwriting'],
      accent: 'from-sky-600/30 to-blue-600/20',
    },
    {
      id: 'social',
      num: '05',
      title: 'SOCIAL MEDIA ACCELERATION',
      subtitle: 'AUDIENCE & COMMUNITY',
      desc: 'End-to-end social management, founder thought leadership, creative campaigns, and high-velocity community growth.',
      tags: ['Cross-Platform Distribution', 'Influencer Network', 'Moderation'],
      accent: 'from-blue-600/30 to-teal-500/20',
    },
    {
      id: 'growth',
      num: '06',
      title: 'GROWTH MARKETING',
      subtitle: 'PERFORMANCE MEDIA',
      desc: 'Full-funnel paid media campaigns, programmatic conversion rate optimization, and weekly attributed ROI reporting.',
      tags: ['Meta & Google Ads', 'CPA Optimization', 'Attribution Matrices'],
      accent: 'from-indigo-600/30 to-blue-500/20',
    },
    {
      id: 'web',
      num: '07',
      title: 'WEB & AI DEVELOPMENT',
      subtitle: 'MODERN DIGITAL FLAGSHIPS',
      desc: 'High-performance React/Vite/Next.js web applications with futuristic micro-interactions, AI integrations, and 99+ speed scores.',
      tags: ['Headless Architecture', 'Framer Motion', 'Enterprise SEO'],
      accent: 'from-cyan-500/30 to-blue-600/20',
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-36 px-4 sm:px-8 lg:px-12 bg-[#050505] border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>CAPABILITIES DIRECTORY</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
              SERVICES LIST<span className="text-primary font-serif italic font-normal">.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {onExploreAllServices && (
              <button
                onClick={onExploreAllServices}
                className="px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-white/[0.05] hover:bg-primary text-white border border-white/10 transition-all flex items-center gap-2 group"
              >
                <span>EXPLORE FULL DIRECTORY</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            )}
            <span className="text-xs font-mono text-zinc-500">
              07 MODULES
            </span>
          </div>
        </div>

        {/* Full-Width Interactive Hover List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Services Vertical Accordion / List */}
          <div className="lg:col-span-8 space-y-2">
            {services.map((item, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ x: 8 }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onClick={() => onSelectService && onSelectService(item.title)}
                  data-cursor="explore"
                  className={`group py-5 sm:py-6 px-4 sm:px-6 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isHovered
                      ? 'bg-[#0B0D13] border-primary/60 shadow-glow-sm'
                      : 'border-transparent hover:border-white/10'
                  }`}
                  style={{
                    opacity: hoveredIdx !== null && !isHovered ? 0.45 : 1,
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-xs font-bold text-primary">
                        {item.num}
                      </span>
                      <h3 className={`font-display font-extrabold text-xl sm:text-3xl tracking-tight transition-colors ${
                        isHovered ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                      }`}>
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 sm:ml-auto">
                      <span className={`text-xs font-mono tracking-wider uppercase ${
                        item.isFlagship ? 'text-accent-cyan font-bold' : 'text-zinc-500'
                      }`}>
                        {item.subtitle}
                      </span>
                      <ArrowUpRight className={`w-4 h-4 transition-transform duration-200 ${
                        isHovered ? 'text-primary translate-x-1 -translate-y-1' : 'text-zinc-600'
                      }`} />
                    </div>
                  </div>

                  {/* On Mobile: inline details */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="lg:hidden pt-4 text-xs text-zinc-400 space-y-3"
                    >
                      <p>{item.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[10px]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Desktop Right Side: Dynamic Active Preview Card */}
          <div className="hidden lg:block lg:col-span-4 sticky top-32">
            <AnimatePresence mode="wait">
              {hoveredIdx !== null && (
                <motion.div
                  key={services[hoveredIdx].id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className={`p-8 rounded-3xl bg-gradient-to-b ${services[hoveredIdx].accent} border border-white/15 backdrop-blur-xl shadow-2xl space-y-6`}
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="font-mono text-xs font-bold text-accent-cyan">
                      ACTIVE PREVIEW // {services[hoveredIdx].num}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                      {services[hoveredIdx].subtitle}
                    </span>
                    <h4 className="font-display font-black text-2xl text-white tracking-tight leading-tight">
                      {services[hoveredIdx].title}
                    </h4>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {services[hoveredIdx].desc}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest block">
                      KEY CAPABILITIES:
                    </span>
                    <div className="space-y-1.5">
                      {services[hoveredIdx].tags.map((tag) => (
                        <div key={tag} className="flex items-center gap-2 text-xs text-zinc-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <MagneticButton
                    strength={0.2}
                    onClick={() => onSelectService && onSelectService(services[hoveredIdx].title)}
                    className="w-full py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>COMMISSION THIS SERVICE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </MagneticButton>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
