import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Target, 
  Film, 
  TrendingUp, 
  Palette, 
  Share2, 
  Video, 
  CheckCircle2, 
  Users, 
  Zap, 
  ShieldCheck, 
  X, 
  ChevronRight,
  Code2,
  Layers,
  ArrowLeft
} from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';
import MagneticButton from '../components/MagneticButton';

export default function SelfMade({ onNavigate, onStartProject }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brandName: '',
    contactName: '',
    email: '',
    currentStage: 'Seed / Early Growth',
    objective: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setModalOpen(false);
      setFormData({
        brandName: '',
        contactName: '',
        email: '',
        currentStage: 'Seed / Early Growth',
        objective: '',
      });
    }, 2500);
  };

  const comparisonCards = [
    {
      label: 'THEN',
      title: 'Periodic Campaigns',
      desc: 'Marketing used to mean a few big campaigns a year, with quiet stretches in between. Audiences waited, brands broadcasted.',
      badgeColor: 'border-zinc-800 text-zinc-500',
    },
    {
      label: 'NOW',
      title: 'Always-On Media',
      desc: 'Today, the best brands act like media companies—showing up consistently, every day, across short-form, film, and interactive channels.',
      badgeColor: 'border-primary/40 text-accent-cyan bg-primary/[0.08]',
      highlight: true,
    },
    {
      label: 'THE GAP',
      title: 'The In-House Bottleneck',
      desc: 'Building a full in-house team to execute that takes 2–3 years of trial, error, and high salary churn. We skip that curve entirely.',
      badgeColor: 'border-zinc-800 text-zinc-500',
    },
  ];

  const timelinePhases = [
    {
      phase: 'PHASE 01 · ONBOARDING',
      duration: 'MONTH 0',
      title: 'We learn your business before we spend a single rupee.',
      desc: 'Product, unit economics, audience psychology, and competitive white-spaces. We map everything that matters so zero budget is burned on guesswork.',
      driver: 'GENFREX DRIVES',
      driverSide: 'genfrex',
    },
    {
      phase: 'PHASE 02 · THE BLUEPRINT',
      duration: 'MONTHS 1–3',
      title: 'A surgical roadmap, not a slow agency kickoff.',
      desc: 'By month three we know your category cold, the exact content buckets that win, and the distribution machine required. You bypass the trial year entirely.',
      driver: 'GENFREX DRIVES',
      driverSide: 'genfrex',
    },
    {
      phase: 'PHASE 03 · FULL PRODUCTION',
      duration: 'MONTHS 3–9',
      title: 'Everything shipped by our team, at full velocity.',
      desc: 'Through month nine we run the complete media engine—strategy, 4K film, daily viral shorts, paid acquisition, and interactive web. Zero payroll overhead on your books.',
      driver: 'GENFREX DRIVES',
      driverSide: 'genfrex',
    },
    {
      phase: 'PHASE 04 · BUILDING YOUR BENCH',
      duration: 'MONTHS 9–15',
      title: 'We scout, vet, and train the exact team you need.',
      desc: 'We recruit the specific creatives and operators your brand needs. They work alongside us on live deliverables with zero ramp-up lag or bad hires.',
      driver: 'HANDING TO YOUR TEAM',
      driverSide: 'transition',
    },
    {
      phase: 'PHASE 05 · THE HANDOVER',
      duration: 'MONTH 18',
      title: 'You own the engine. We transition to strategic advisors.',
      desc: 'Your in-house studio owns the engine. We step back to board-level advisory, keeping your momentum without the permanent external agency retainer.',
      driver: 'YOUR TEAM DRIVES',
      driverSide: 'client',
    },
  ];

  const engineDisciplines = [
    { name: 'Strategy & Positioning', icon: Target },
    { name: 'Branding & Visual Bible', icon: Palette },
    { name: 'Cinematic Brand Films', icon: Film },
    { name: '3D Motion & VFX Craft', icon: Layers },
    { name: 'Product Storytelling', icon: Zap },
    { name: 'Social Velocity & Community', icon: Share2 },
    { name: 'Reels, Shorts & Daily Drops', icon: Video },
    { name: 'Creative Direction', icon: Sparkles },
    { name: 'Full-Funnel Performance', icon: TrendingUp },
    { name: 'Web Flagships & Code', icon: Code2 },
    { name: 'Specialized Talent Engine', icon: Users },
    { name: 'Executive Thought Leadership', icon: ShieldCheck },
  ];

  return (
    <div className="relative w-full bg-[#050505] text-white min-h-screen selection:bg-primary selection:text-white pt-28 sm:pt-36 pb-28">
      {/* Ambient Electric Blue Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-primary/[0.08] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-[1800px] left-1/4 w-[600px] h-[400px] bg-cyan-600/[0.05] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Navigation Breadcrumb */}
        {onNavigate && (
          <div className="mb-10 flex items-center justify-between">
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/20 text-xs font-mono text-zinc-300 hover:text-white transition-all group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span>Back to Overview</span>
            </button>
            <span className="text-xs font-mono text-zinc-500">
              GENFREX / PROGRAMMES / SELF-MADE
            </span>
          </div>
        )}

        {/* 1. HERO INTRO SECTION */}
        <div className="pt-6 pb-20 sm:pb-28 max-w-4xl">
          {/* Top Programme Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E121A] border border-primary/40 shadow-glow-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-cyan font-bold">
              THE WORLD'S FIRST BRAND-TO-MEDIA PROGRAMME · SELF-MADE
            </span>
          </motion.div>

          {/* Main Provocative Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-8 text-white"
          >
            We don't want to be <br />
            your <span className="text-zinc-500">agency</span> forever. <br />
            We want to make you <br />
            <span className="relative inline-block mt-2">
              <span className="line-through decoration-red-500 decoration-4 text-zinc-600 mr-3">
                need one.
              </span>
              <span className="text-primary underline decoration-accent-cyan decoration-2 underline-offset-8">
                self-made.
              </span>
            </span>
          </motion.h1>

          {/* Subtitle Manifesto */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-2xl text-zinc-300 font-light leading-relaxed mb-10 max-w-3xl"
          >
            Every brand is now a media company expected to publish, daily, on every platform.
            We build that entire engine inside your business, run it from day one, then <span className="text-white font-semibold">hand you the keys</span>.
          </motion.p>

          {/* Action CTAs with Magnetic Physics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <MagneticButton
              strength={0.25}
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-mono uppercase tracking-wider font-semibold transition-all shadow-glow-md hover:shadow-glow-lg group cursor-pointer"
            >
              <span>Apply to Join Self-Made</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>

            <MagneticButton
              strength={0.2}
              onClick={() => {
                if (onStartProject) onStartProject();
                else if (onNavigate) onNavigate('contact');
              }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#0E1015] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white text-sm font-mono uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>Schedule Founder Briefing</span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* 2. THE JOB CHANGED (THEN VS. NOW VS. THE GAP) */}
        <div className="py-20 border-t border-white/[0.08]">
          <div className="mb-12">
            <span className="text-xs font-mono text-primary uppercase tracking-[0.25em] block mb-2">
              — THE PARADIGM SHIFT —
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              The job changed. <span className="text-zinc-500">Most brands didn't.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comparisonCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <SpotlightCard
                  className={`p-8 h-full flex flex-col justify-between ${
                    card.highlight ? 'border-primary/50 shadow-glow-sm' : ''
                  }`}
                  spotlightColor={card.highlight ? 'rgba(0, 102, 255, 0.25)' : 'rgba(0, 102, 255, 0.12)'}
                  borderColor={card.highlight ? 'rgba(0, 209, 255, 0.6)' : 'rgba(255, 255, 255, 0.2)'}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest border ${card.badgeColor}`}>
                        {card.label}
                      </span>
                      {card.highlight && (
                        <Sparkles className="w-4 h-4 text-accent-cyan" />
                      )}
                    </div>

                    <h3 className="font-display font-bold text-xl text-white mb-3">
                      {card.title}
                    </h3>

                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. 18-MONTH JOURNEY INTERACTIVE TIMELINE */}
        <div className="py-24 border-t border-white/[0.08] relative">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/[0.1] border border-primary/30 text-xs font-mono text-accent-cyan uppercase tracking-widest mb-4">
              <Clock className="w-3.5 h-3.5" />
              <span>THE 18-MONTH JOURNEY</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
              We build your media engine, <br />
              then <span className="text-primary">hand you the keys.</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Building an in-house content operation from scratch takes most brands two to three years of costly recruiter fees, mis-hires, and guesswork.
              <strong className="text-white font-semibold"> Self-Made gets you there in eighteen months</strong>, with elite commercial output running from day one and the agency invoice steadily phasing out.
            </p>
          </div>

          {/* Vertical Timeline Stack */}
          <div className="relative pl-6 sm:pl-10 border-l border-white/[0.12] space-y-12 sm:space-y-16 ml-2 sm:ml-4">
            {timelinePhases.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Glowing Node on Timeline */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-5 h-5 rounded-full bg-[#050505] border-2 border-primary group-hover:border-accent-cyan transition-colors flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-accent-cyan transition-colors" />
                </div>

                {/* Phase Content Box with Spotlight Glow */}
                <SpotlightCard className="p-6 sm:p-8 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                    <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
                      {phase.phase}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-accent-cyan font-bold">
                      {phase.duration}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {phase.title}
                  </h3>

                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    {phase.desc}
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                      OPERATIONAL RESPONSIBILITY:
                    </span>
                    <span className={`text-xs font-mono font-bold tracking-wider px-2.5 py-0.5 rounded ${
                      phase.driverSide === 'genfrex'
                        ? 'bg-primary/20 text-accent-cyan border border-primary/40'
                        : phase.driverSide === 'transition'
                        ? 'bg-blue-900/30 text-blue-300 border border-blue-500/30'
                        : 'bg-emerald-950/40 text-emerald-400 border border-emerald-500/30'
                    }`}>
                      {phase.driver}
                    </span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          {/* Timeline Culmination Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/40 via-[#0E121A] to-[#07090E] border border-primary/40 text-center relative overflow-hidden shadow-glow-md"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/[0.1] rounded-full blur-3xl pointer-events-none" />
            <span className="text-xs font-mono text-accent-cyan uppercase tracking-[0.25em] block mb-3 font-bold">
              — THE FINAL OUTCOME —
            </span>
            <h3 className="font-display font-black text-3xl sm:text-5xl text-white mb-4">
              You’re <span className="text-primary">Self-Made.</span>
            </h3>
            <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              A high-calibre commercial media engine that runs autonomously inside your business—built in a fraction of the time and cost of doing it alone.
            </p>
            <MagneticButton
              strength={0.25}
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-mono uppercase tracking-widest font-bold transition-all shadow-glow-md cursor-pointer"
            >
              <span>Submit Founder Application</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </motion.div>
        </div>

        {/* 4. PHILOSOPHY CORE STATEMENT */}
        <div className="py-24 border-t border-white/[0.08] text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] block mb-6">
              THE GENFREX OPERATING CREED
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              “So we don't just make your content. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-accent-cyan">
                We make you the company that creates it.
              </span>”
            </h2>
          </div>
        </div>

        {/* 5. THE FULL ENGINE (DISCIPLINES GRID) */}
        <div className="py-20 border-t border-white/[0.08]">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-primary uppercase tracking-[0.25em] block mb-2">
              — COMPREHENSIVE EXECUTION —
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mb-4">
              The full <span className="text-primary">engine.</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              No stitching together five fragmented freelancers and vendors. One cohesive studio delivers all creative, code, and talent while building the permanent bench to take it over.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {engineDisciplines.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  whileHover={{ y: -4 }}
                >
                  <SpotlightCard
                    className="p-5 h-full flex items-center gap-3.5 group cursor-default shadow-sm"
                    spotlightColor="rgba(0, 209, 255, 0.15)"
                    borderColor="rgba(0, 209, 255, 0.4)"
                  >
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-accent-cyan group-hover:bg-primary/20 transition-colors shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-zinc-300 group-hover:text-white font-semibold transition-colors">
                      {item.name}
                    </span>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      {/* APPLICATION MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-xl bg-[#0B0D13] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-6">
                <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-widest font-bold">
                  CONFIDENTIAL ADMISSION
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1">
                  Apply to Join Self-Made
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  We accept a strictly limited cohort of 4 enterprise brands per quarter to maintain bespoke production standards.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-accent-cyan mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-white">
                    Application Received
                  </h4>
                  <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                    Our managing directors will review your brief and schedule an executive discovery call within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Brand / Enterprise Name *
                    </label>
                    <input
                      type="text"
                      name="brandName"
                      required
                      value={formData.brandName}
                      onChange={handleInputChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-primary text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        required
                        value={formData.contactName}
                        onChange={handleInputChange}
                        placeholder="First & Last Name"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-primary text-white text-sm outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-primary text-white text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Current Stage
                    </label>
                    <select
                      name="currentStage"
                      value={formData.currentStage}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#11141C] border border-white/10 focus:border-primary text-white text-sm outline-none transition-colors cursor-pointer"
                    >
                      <option>Seed / Early Stage ($50k - $250k ARR)</option>
                      <option>Series A / Scaling ($1M - $10M ARR)</option>
                      <option>Established Enterprise ($10M+ ARR)</option>
                      <option>High-Growth Founder Brand</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Primary Objective
                    </label>
                    <textarea
                      name="objective"
                      rows={3}
                      value={formData.objective}
                      onChange={handleInputChange}
                      placeholder="What is your current content output and primary 18-month media milestone?"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-primary text-white text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-mono uppercase tracking-widest font-bold transition-all shadow-glow-md mt-2 cursor-pointer"
                  >
                    Submit Self-Made Application
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
