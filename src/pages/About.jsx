import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Target, Award, Users, Sparkles, ArrowUpRight, ArrowLeft } from 'lucide-react';
import About from '../components/About';
import WhyGenfrex from '../components/WhyGenfrex';

export default function AboutPage({ onStartProject, onNavigate }) {
  const leadership = [
    {
      name: 'Elena Rostova',
      role: 'Chief Creative Officer',
      specialty: 'Brand Systems & Visual Direction',
    },
    {
      name: 'Marcus Vance',
      role: 'Head of Growth Engineering',
      specialty: 'Algorithmic Media & Funnel Architecture',
    },
    {
      name: 'Aria Chen',
      role: 'VP of Digital Experiences',
      specialty: 'Interactive 3D & Frontend Architecture',
    },
    {
      name: 'Karthik Nair',
      role: 'Director of Talent Networks',
      specialty: 'Executive Search & Creative Placement',
    },
  ];

  return (
    <div className="relative pt-28 sm:pt-36 pb-20 px-4 sm:px-8 lg:px-12 bg-[#08090A] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb / Back to Merged Home */}
        {onNavigate && (
          <div className="mb-8 flex items-center justify-between">
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/20 text-xs font-mono text-zinc-300 hover:text-white transition-all group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span>Back to Overview</span>
            </button>
            <span className="text-xs font-mono text-zinc-500 hidden sm:inline-block">
              Home / About
            </span>
          </div>
        )}

        {/* Main About section */}
        <About />

        {/* Agency Philosophy & Pillars */}
        <div className="my-12 sm:my-16">
          <WhyGenfrex />
        </div>

        {/* Leadership & Studio Culture */}
        <div className="py-12 sm:py-16 border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-zinc-300 tracking-wider font-mono mb-4">
              <Users className="w-3.5 h-3.5 text-primary" />
              <span>THE COLLECTIVE</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight">
              LEADERSHIP & EXPERTISE
            </h2>
            <p className="mt-3 text-xs sm:text-base text-zinc-400">
              Strategists, engineers, and creative directors united by a single obsession: pushing the boundaries of what a modern agency can produce.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {leadership.map((person, idx) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#0E0F12] border border-white/[0.08] hover:border-white/20 transition-all text-center flex flex-col items-center group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white mb-4 group-hover:scale-105 transition-all">
                  <span className="font-display font-black text-lg sm:text-xl text-white">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white">
                  {person.name}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  {person.role}
                </p>
                <p className="text-xs text-zinc-400 mt-2">
                  {person.specialty}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#0E0F12] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-white">
              Ready to collaborate with our team?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Let's schedule a 30-minute discovery call to map your digital trajectory.
            </p>
          </div>
          <button
            onClick={onStartProject}
            className="w-full md:w-auto justify-center px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 border border-white/20 flex items-center gap-2 shrink-0 transition-all"
          >
            <span>SCHEDULE DISCOVERY</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
