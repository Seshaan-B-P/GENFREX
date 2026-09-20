import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          scrolled
            ? 'bg-[#08090A]/95 backdrop-blur-md border-b border-white/[0.08] py-4'
            : 'bg-transparent py-6'
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
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-white'
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

          {/* Right Action Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-primary hover:bg-blue-600 text-white transition-colors duration-200 flex items-center gap-1.5"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Clean Mobile Slide-Down / Overlay Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#08090A] pt-24 px-6 pb-8 flex flex-col justify-between md:hidden overflow-y-auto">
          <nav className="space-y-5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left font-display text-xl sm:text-2xl font-bold transition-colors ${
                  activePage === link.id ? 'text-primary' : 'text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="pt-8 border-t border-white/10 space-y-4 mt-6">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3.5 rounded-full text-center text-xs font-bold uppercase tracking-wider bg-primary text-white flex items-center justify-center gap-2"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-zinc-500 text-center">
              Empowering Your Digital Growth & Talent Connections
            </p>
          </div>
        </div>
      )}
    </>
  );
}
