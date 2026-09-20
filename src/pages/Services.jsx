import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Palette, 
  Share2, 
  Code2, 
  Video, 
  Users2, 
  ArrowUpRight, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function ServicesPage({ onSelectService }) {
  const serviceDetails = [
    {
      id: 'digital-marketing',
      num: '01',
      title: 'DIGITAL MARKETING',
      subtitle: 'Engineered Customer Acquisition',
      desc: 'Performance campaigns, social media strategy, audience growth and digital marketing solutions designed to drive scalable, high-intent traffic.',
      deliverables: [
        'Full-funnel paid ad management (Meta, Google, LinkedIn)',
        'Algorithmic audience profiling & retargeting matrices',
        'Data attribution modelling & conversion rate optimization',
        'Custom weekly analytics dashboards and ROI reporting',
      ],
      icon: TrendingUp,
    },
    {
      id: 'branding',
      num: '02',
      title: 'BRANDING',
      subtitle: 'Distinctive Visual Identity Systems',
      desc: 'Brand strategy, visual identity, creative direction and brand positioning that establishes immediate category authority and customer loyalty.',
      deliverables: [
        'Comprehensive brand strategy & competitive positioning',
        'Logo systems, iconography, and typographic design',
        'Component design systems & brand guidelines bible',
        'Packaging, merchandise, and physical experience design',
      ],
      icon: Palette,
    },
    {
      id: 'social-media',
      num: '03',
      title: 'SOCIAL MEDIA',
      subtitle: 'Viral Reach & Community Cultivation',
      desc: 'Content strategy, reels, campaigns, creatives and community growth designed to command attention and spark organic cultural conversation.',
      deliverables: [
        'High-volume short-form video production (Reels, TikTok, Shorts)',
        'Founder & executive ghostwriting / thought leadership',
        'Community moderation & proactive brand engagement',
        'Creator collaborations & influencer alignment networks',
      ],
      icon: Share2,
    },
    {
      id: 'web-development',
      num: '04',
      title: 'WEB DEVELOPMENT',
      subtitle: 'High-Performance Digital Flagships',
      desc: 'Modern responsive websites, landing pages and digital experiences engineered with futuristic aesthetics and blazing-fast performance.',
      deliverables: [
        'Bespoke React, Next.js, and Vite web applications',
        'Interactive 3D visuals, GSAP, and Framer Motion micro-interactions',
        'Headless CMS integrations (Sanity, Strapi, Contentful)',
        'Enterprise SEO architecture & 99+ Lighthouse speed scores',
      ],
      icon: Code2,
    },
    {
      id: 'content-creation',
      num: '05',
      title: 'CONTENT CREATION',
      subtitle: 'Cinematic Storytelling & Visual Assets',
      desc: 'Creative campaigns, graphics, video content, reels and storytelling built to stop thumbs and evoke strong emotional resonance.',
      deliverables: [
        '3D motion graphics & abstract product CGI renders',
        'High-fidelity ad creatives & multi-variant asset batches',
        'Commercial video editing and sound engineering',
        'Long-form editorial essays and corporate whitepapers',
      ],
      icon: Video,
    },
    {
      id: 'talent-connections',
      num: '06',
      title: 'TALENT CONNECTIONS',
      subtitle: 'Embedded Specialized Teams',
      desc: 'Connecting businesses with relevant digital and creative talent to solve mission-critical capabilities and fuel long-term expansion.',
      deliverables: [
        'Rigorous technical and portfolio candidate vetting',
        'Fractional Creative Directors & Growth Executives',
        'Rapid staff augmentation within 5 to 7 business days',
        'End-to-end contract administration & milestone management',
      ],
      icon: Users2,
    },
  ];

  return (
    <div className="relative pt-28 sm:pt-36 pb-20 px-4 sm:px-8 lg:px-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-zinc-300 tracking-wider font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>FULL CAPABILITIES DIRECTORY</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
            OUR SPECIALIZED <br />
            <span className="text-zinc-400">SERVICES.</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            Explore our end-to-end digital solutions designed to elevate your brand from initial momentum to undisputed market leadership.
          </p>
        </div>

        {/* Detailed Services Stack */}
        <div className="space-y-8 sm:space-y-12">
          {serviceDetails.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-[#0E0F12] border border-white/[0.08] hover:border-white/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-primary shrink-0">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold text-zinc-400">
                          {service.num} // SERVICE MODULE
                        </span>
                        <h2 className="font-display font-black text-xl sm:text-2xl md:text-3xl text-white tracking-tight">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-zinc-300 font-mono">
                      {service.subtitle}
                    </p>

                    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                      {service.desc}
                    </p>

                    <div className="pt-2 sm:pt-4">
                      <button
                        onClick={() => onSelectService(service.title)}
                        className="w-full sm:w-auto justify-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 border border-white/20 flex items-center gap-2 transition-all"
                      >
                        <span>COMMISSION THIS SERVICE</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-6 bg-zinc-900/60 p-4 sm:p-7 rounded-xl sm:rounded-2xl border border-white/[0.06] space-y-3">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                      Key Deliverables & Scope
                    </h3>
                    <div className="space-y-2.5 pt-1">
                      {service.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
