import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function AboutManifesto({ onExploreAbout, onExploreSelfMade }) {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate 3D cylinder smoothly when not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.25) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [isPaused]);

  const cards = [
    {
      id: 1,
      num: '01',
      title: 'BRAND STRATEGY',
      subtitle: 'Market Positioning & Category Architecture',
      tag: 'GROWTH BLUEPRINT',
      gradient: 'from-blue-600/25 via-blue-900/10 to-[#0A0D14]',
    },
    {
      id: 2,
      num: '02',
      title: 'DIGITAL FLAGSHIPS',
      subtitle: 'Bespoke Next.js & React Web Engineering',
      tag: 'WEB & INTERACTIVE',
      gradient: 'from-cyan-600/25 via-blue-900/10 to-[#0A0D14]',
    },
    {
      id: 3,
      num: '03',
      title: 'CONTENT & FILMS',
      subtitle: 'Short-Form Culture & Cinematic Video',
      tag: 'VIRAL PRODUCTION',
      gradient: 'from-sky-600/25 via-blue-900/10 to-[#0A0D14]',
    },
    {
      id: 4,
      num: '04',
      title: 'PERFORMANCE MEDIA',
      subtitle: 'Full-Funnel Algorithmic Acquisition',
      tag: 'PAID GROWTH',
      gradient: 'from-indigo-600/25 via-blue-900/10 to-[#0A0D14]',
    },
    {
      id: 5,
      num: '05',
      title: 'TALENT CONNECTIONS',
      subtitle: 'Embedded Specialized Growth Bench',
      tag: 'CURATED NETWORK',
      gradient: 'from-blue-500/25 via-cyan-900/10 to-[#0A0D14]',
    },
    {
      id: 6,
      num: '06',
      title: 'GENFREX STUDIO',
      subtitle: 'Modern Marketing & Technology Agency',
      tag: 'KARUR// GLOBAL',
      gradient: 'from-blue-700/30 via-zinc-900 to-[#0A0D14]',
    },
  ];

  const totalCards = cards.length;
  const [radius, setRadius] = useState(205);
  const [cardWidth, setCardWidth] = useState(185);
  const [cardHeight, setCardHeight] = useState(265);

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 640) {
        setRadius(160);
        setCardWidth(145);
        setCardHeight(210);
      } else if (window.innerWidth < 1024) {
        setRadius(185);
        setCardWidth(168);
        setCardHeight(240);
      } else {
        setRadius(205);
        setCardWidth(185);
        setCardHeight(265);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const rotateBy = (degrees) => {
    setRotationAngle((prev) => prev + degrees);
  };

  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#050505] border-b border-white/[0.08] overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[450px] h-[450px] bg-primary/[0.05] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

        {/* Left Column: Contained 3D Cylinder Carousel */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="w-full max-w-[360px] h-[350px] sm:h-[380px] flex items-center justify-center carousel-3d-scene select-none relative cursor-grab active:cursor-grabbing"
          >
            <div
              className="carousel-3d-ring"
              style={{
                transform: `rotateY(${rotationAngle}deg)`,
              }}
            >
              {cards.map((card, idx) => {
                const angle = (idx * 360) / totalCards;
                return (
                  <div
                    key={card.id}
                    className="carousel-3d-card"
                    style={{
                      width: `${cardWidth}px`,
                      height: `${cardHeight}px`,
                      marginLeft: `-${cardWidth / 2}px`,
                      marginTop: `-${cardHeight / 2}px`,
                      transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    }}
                  >
                    <div
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                      className={`w-full h-full rounded-2xl p-5 flex flex-col justify-between bg-[#0A0D14] bg-gradient-to-b ${card.gradient} border border-white/15 shadow-2xl backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:border-primary/80`}
                    >
                      {/* Top Meta */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-primary font-bold tracking-wider">
                          {card.num} // GENFREX
                        </span>
                        <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                      </div>

                      {/* Main Title & Subtitle */}
                      <div className="space-y-1.5 my-auto">
                        <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-widest font-semibold block">
                          {card.tag}
                        </span>
                        <h4 className="font-display font-black text-xl text-white tracking-tight leading-snug">
                          {card.title}
                        </h4>
                        <p className="text-[11px] font-mono text-zinc-400 leading-relaxed">
                          {card.subtitle}
                        </p>
                      </div>

                      {/* Bottom Footer */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                        <span>DISCIPLINE</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-primary" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Clean Carousel Controls (No messy labels) */}
          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={() => rotateBy(-60)}
              aria-label="Previous card"
              className="p-2 rounded-full bg-white/[0.04] hover:bg-primary hover:text-white text-zinc-400 border border-white/10 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest px-2">
              DISCIPLINES · ROTATE
            </span>
            <button
              onClick={() => rotateBy(60)}
              aria-label="Next card"
              className="p-2 rounded-full bg-white/[0.04] hover:bg-primary hover:text-white text-zinc-400 border border-white/10 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Editorial Manifesto with Generous Spacing */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 pl-0 lg:pl-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>THE MANIFESTO</span>
          </div>

          <div className="space-y-5 text-zinc-400 text-lg sm:text-xl md:text-2xl font-normal leading-[1.5] tracking-tight">
            <p>
              The era of running one campaign a year and calling it marketing is{' '}
              <span className="text-white font-semibold">dead.</span> Nobody’s watching anymore.{' '}
              <span className="font-serif italic text-primary font-normal">
                They’re scrolling.
              </span>{' '}
              And by the time they stop, they’ve already forgotten you.
            </p>

            <p>
              So you can’t behave like a traditional agency anymore. You have to build a{' '}
              <span className="text-white font-semibold">media company</span> — making something worth watching every single day, everywhere. Most brands can’t, simply because nobody ever set up the engine for them.
            </p>

            <p>
              That’s what we do. <span className="text-white font-bold">That’s GENFREX.</span> Through{' '}
              <button
                onClick={onExploreSelfMade}
                className="text-primary hover:text-accent-cyan font-bold underline decoration-primary/40 underline-offset-4 cursor-pointer transition-colors"
              >
                Self-Made
              </button>
              , we run the entire machine in-house for you, then build and train the specialized team that takes it over, until it's completely yours. The goal was never to make you depend on us forever — it’s to make you self-made.
            </p>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/[0.08]">
            <p className="font-serif italic text-xl sm:text-2xl text-white">
              We’re GENFREX.{' '}
              <span className="text-primary font-serif italic font-normal">
                It’s time to tell stories, better.
              </span>
            </p>

            <div className="flex items-center gap-3 shrink-0">
              {onExploreSelfMade && (
                <button
                  onClick={onExploreSelfMade}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-primary/20 hover:bg-primary text-accent-cyan hover:text-white border border-primary/40 transition-all cursor-pointer"
                >
                  <span>EXPLORE SELF-MADE ★</span>
                </button>
              )}

              {onExploreAbout && (
                <button
                  onClick={onExploreAbout}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white transition-all group cursor-pointer"
                >
                  <span>READ STORY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
