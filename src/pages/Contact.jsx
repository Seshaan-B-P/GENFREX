import React from 'react';
import ContactSection from '../components/ContactSection';
import { Sparkles, Clock, MessageSquare, ShieldCheck } from 'lucide-react';

export default function ContactPage({ preselectedService }) {
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
