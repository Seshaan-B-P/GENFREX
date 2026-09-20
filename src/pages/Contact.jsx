import React from 'react';
import ContactSection from '../components/ContactSection';
import { Sparkles, Clock, MessageSquare, ShieldCheck, ArrowLeft } from 'lucide-react';

export default function ContactPage({ preselectedService, onNavigate }) {
  const guarantees = [
    {
      icon: Clock,
      title: '24-Hour Response Guarantee',
      desc: 'Every client brief receives an executive review and preliminary proposal within one business day.',
    },
    {
      icon: ShieldCheck,
      title: 'Strict Non-Disclosure',
      desc: 'All project information, intellectual property, and proprietary data are treated under rigorous confidentiality.',
    },
    {
      icon: MessageSquare,
      title: 'Direct Strategist Access',
      desc: 'No account-manager layers. You collaborate directly with the senior strategists and engineers executing your vision.',
    },
  ];

  return (
    <div className="relative pt-28 sm:pt-36 pb-20 bg-[#08090A] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mb-8">
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
              Home / Contact
            </span>
          </div>
        )}

        {/* Top Guarantee Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {guarantees.map((g, idx) => {
            const Icon = g.icon;
            return (
              <div
                key={idx}
                className="p-4 sm:p-6 rounded-2xl bg-[#0E0F12] border border-white/[0.08] flex items-start gap-3.5 sm:gap-4"
              >
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-sm mb-1">
                    {g.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {g.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Contact Section */}
      <ContactSection preselectedService={preselectedService} />
    </div>
  );
}
