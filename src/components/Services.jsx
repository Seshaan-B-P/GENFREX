import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Palette,
  Share2,
  Code2,
  Video,
  Users2,
  ArrowUpRight
} from 'lucide-react';

export default function Services({ onSelectService, onExploreAllServices }) {
  const services = [
    {
      num: '01',
      title: 'DIGITAL MARKETING',
      description: 'Performance campaigns, social media strategy, audience growth and digital marketing solutions.',
      icon: TrendingUp,
    },
    {
      num: '02',
      title: 'BRANDING',
      description: 'Brand strategy, visual identity, creative direction and brand positioning.',
      icon: Palette,
    },
    {
      num: '03',
      title: 'SOCIAL MEDIA',
      description: 'Content strategy, reels, campaigns, creatives and community growth.',
      icon: Share2,
    },
    {
      num: '04',
      title: 'WEB DEVELOPMENT',
      description: 'Modern responsive websites, landing pages and digital experiences.',
      icon: Code2,
    },
    {
      num: '05',
      title: 'CONTENT CREATION',
      description: 'Creative campaigns, graphics, video content, reels and storytelling.',
      icon: Video,
    },
    {
      num: '06',
      title: 'TALENT CONNECTIONS',
      description: 'Connecting businesses with relevant digital and creative talent.',
      icon: Users2,
    },
  ];

  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-12 bg-[#0A0B0D] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-white/[0.08] gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase font-semibold mb-3 sm:mb-4 block">
              OUR CAPABILITIES
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-tight text-white">
              WHAT WE DO
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-zinc-400 font-normal max-w-xl">
              Everything you need to build, grow and scale your digital presence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {onExploreAllServices && (
              <button
                onClick={onExploreAllServices}
                className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-white/20 transition-colors flex items-center gap-2 group"
              >
                <span>EXPLORE FULL DIRECTORY</span>
                <ArrowUpRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            )}
            <span className="text-xs font-mono text-zinc-500">
              06 CORE SERVICES
            </span>
          </div>
        </motion.div>

        {/* Structured Service Grid (Staggered Entrance) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.num}
                onClick={() => onSelectService && onSelectService(service.title)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-6 sm:p-8 rounded-2xl bg-[#0E0F12] border border-white/[0.07] hover:border-primary/50 transition-colors duration-200 cursor-pointer flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold text-zinc-500 group-hover:text-primary transition-colors">
                      {service.num}
                    </span>
                    <Icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-white tracking-tight group-hover:text-primary transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                  <span>Enquire Service</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 text-primary" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
