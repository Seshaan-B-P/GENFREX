import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [fullMenuOpen, setFullMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState('');

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      setTimeString(new Intl.DateTimeFormat('en-GB', options).format(now) + ' IST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', id: 'about' },
    { name: 'SERVICES', id: 'services' },
    { name: 'NUMBERS', id: 'numbers' },
    { name: 'SELF-MADE', id: 'self-made', isSpecial: true },
    { name: 'CONTACT', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setFullMenuOpen(false);

    if (['about', 'services', 'contact', 'self-made'].includes(id)) {
      setActivePage(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (id === 'numbers') {
      if (activePage !== 'home') {
        setActivePage('home');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/[0.08] py-3.5 sm:py-4'
            : 'bg-transparent py-5 sm:py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 focus:outline-none group text-left"
            aria-label="GENFREX Home"
          >
            <img
              src="/logo-horizontal.png"
              alt="GENFREX"
              className="h-6 sm:h-7 md:h-8 w-auto max-w-[190px] sm:max-w-none object-contain transition-opacity duration-200 group-hover:opacity-90"
            />
          </button>

          {/* Desktop Navigation Links */}
          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-mono tracking-widest uppercase">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              if (link.isSpecial) {
                return (
                  <MagneticButton
                    strength={0.2}
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider transition-all border ${
                      isActive
                        ? 'bg-primary text-white border-accent-cyan shadow-glow-sm'
                        : 'bg-primary/15 text-accent-cyan border-primary/40 hover:bg-primary hover:text-white'
                    }`}
                  >
                    ★ {link.name}
                  </MagneticButton>
                );
              }
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`transition-colors relative py-1 ${isActive
                      ? 'text-primary font-bold'
                      : 'text-zinc-400 hover:text-white'
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: Live Clock & MENU Button */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Live IST Clock */}
            <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-zinc-400 bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span>{timeString}</span>
            </div>

            {/* Menu Trigger Button with Magnetic Physics */}
            <MagneticButton
              strength={0.25}
              onClick={() => setFullMenuOpen(!fullMenuOpen)}
              className="px-4 py-1.5 rounded-full text-xs font-mono tracking-wider font-semibold uppercase bg-white/[0.06] hover:bg-primary hover:text-white border border-white/10 text-white transition-all flex items-center gap-2 cursor-pointer"
              aria-label="Open Fullscreen Menu"
            >
              <span>{fullMenuOpen ? 'CLOSE' : 'MENU'}</span>
              {fullMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            </MagneticButton>
          </div>
        </div>
      </header>

      {/* Opening Act Style Full-Screen Menu Overlay */}
      <AnimatePresence>
        {fullMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#050505] pt-24 sm:pt-28 px-6 sm:px-12 lg:px-20 pb-10 flex flex-col justify-between overflow-y-auto"
          >
            {/* Top Row inside overlay */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 text-xs font-mono text-zinc-400">
              <span>GENFREX DIGITAL & TALENT AGENCY</span>
              <span className="text-accent-cyan">{timeString}</span>
            </div>

            {/* Giant Editorial Nav Menu */}
            <div className="my-auto py-8 sm:py-12 space-y-4 sm:space-y-6">
              {[
                { num: '01', name: 'HOME', id: 'home', sub: 'The Master Experience' },
                { num: '02', name: 'ABOUT US', id: 'about', sub: 'Our Story, Philosophy & Collective' },
                { num: '03', name: 'SERVICES DIRECTORY', id: 'services', sub: 'End-to-End Digital Capabilities' },
                { num: '04', name: 'NUMBERS', id: 'numbers', sub: 'Measurable Outcomes & Growth' },
                { num: '05', name: 'SELF-MADE', id: 'self-made', sub: "The World's First Brand-to-Media Programme" },
                { num: '06', name: 'START A PROJECT', id: 'contact', sub: 'Schedule a 30-Min Discovery Brief' },
              ].map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-white/[0.06] pb-3"
                >
                  <span className="font-mono text-xs text-primary font-bold">
                    {item.num}
                  </span>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white group-hover:text-primary transition-colors text-left tracking-tight"
                  >
                    {item.name}
                  </button>
                  <span className="text-xs font-mono text-zinc-500 sm:ml-auto group-hover:text-zinc-300 transition-colors">
                    {item.sub}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom Contact Details */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono text-zinc-400">
              <div>
                <span className="text-zinc-500 uppercase block mb-1">INQUIRIES</span>
                <a href="mailto:genfrexofficial@gmail.com" className="text-white hover:text-primary transition-colors">
                  genfrexofficial@gmail.com
                </a>
              </div>
              <div>
                <span className="text-zinc-500 uppercase block mb-1">CALL DIRECT</span>
                <a href="tel:+919047295361" className="text-white hover:text-primary transition-colors">
                  +91 9047295361
                </a>
              </div>
              <div>
                <span className="text-zinc-500 uppercase block mb-1">LOCATION</span>
                <span className="text-white">KARUR· Worldwide Engagements</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
