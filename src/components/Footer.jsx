import React, { useState } from 'react';
import { ArrowUp, ArrowUpRight, X } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';

export default function Footer({ onNavigate }) {
  const [activeLegalModal, setActiveLegalModal] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Self-Made ★', id: 'self-made' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const serviceLinks = [
    'Digital Marketing',
    'Branding',
    'Social Media',
    'Web Development',
    'Content Creation',
    'Talent Connections',
  ];

  return (
    <footer className="relative bg-[#060708] border-t border-white/[0.08] pt-14 sm:pt-20 pb-12 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top: Brand Header */}
        <div className="pb-12 sm:pb-16 border-b border-white/[0.08] flex flex-row items-center justify-between gap-4">
          <div className="max-w-xs sm:max-w-lg">
            <img
              src="/logo-dark.png"
              alt="GENFREX — Empowering Your Digital Growth & Talent Connections"
              className="h-12 sm:h-16 md:h-20 w-auto max-w-[200px] sm:max-w-xs object-contain object-left"
            />
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 hover:border-white/25 flex items-center justify-center text-white transition-colors shrink-0"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Middle Navigation Columns */}
        <div className="py-12 sm:py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-semibold block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-semibold block mb-4">
              Services
            </span>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-sm text-zinc-400 hover:text-white transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-semibold block mb-4">
              Inquiries
            </span>
            <div className="space-y-2 text-sm text-zinc-400">
              <a
                href="mailto:genfrexofficial@gmail.com"
                className="text-white font-mono text-xs block hover:text-zinc-300 transition-colors break-all"
              >
                genfrexofficial@gmail.com
              </a>
              <a
                href="tel:+919047295361"
                className="text-white font-mono text-xs block hover:text-zinc-300 transition-colors"
              >
                +91 9047295361
              </a>
              <p className="text-xs text-zinc-500 pt-1">Worldwide Engagements</p>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-semibold block mb-4">
              Connect
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 text-center sm:text-left">
          <p>© 2026 GENFREX. All rights reserved.</p>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <button
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-zinc-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-zinc-300 transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Clean Legal Modal */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="relative w-full max-w-lg bg-[#111215] border border-white/15 rounded-2xl p-6 sm:p-8 space-y-4">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-display font-bold text-xl text-white">
              {activeLegalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {activeLegalModal === 'privacy'
                ? 'GENFREX operates with strict data protection. Client inquiries and proprietary project briefs are treated under complete commercial confidentiality.'
                : 'All creative deliverables and digital engineering assets are transferred to clients upon project sign-off according to our standard agency master service agreement.'}
            </p>

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="w-full py-2.5 rounded-xl bg-white/10 text-white text-xs font-bold uppercase"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
