import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [preselectedService, setPreselectedService] = useState('Digital Marketing');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Handle browser back/forward or hash change if needed
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'services', 'about', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (serviceName) => {
    setPreselectedService(serviceName);
    navigateTo('contact');
  };

  return (
    <div className="min-h-screen bg-background text-white font-sans selection:bg-primary selection:text-white flex flex-col justify-between overflow-x-hidden relative">
      {/* 2px Minimal Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Desktop Custom Glowing Cursor */}
      <CustomCursor />

      {/* Floating Glass Navbar */}
      <Navbar activePage={activePage} setActivePage={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <Home
            onNavigate={navigateTo}
            onSelectService={handleSelectService}
            preselectedService={preselectedService}
          />
        )}
        {activePage === 'services' && (
          <ServicesPage onSelectService={handleSelectService} />
        )}
        {activePage === 'about' && (
          <AboutPage onStartProject={() => navigateTo('contact')} />
        )}
        {activePage === 'contact' && (
          <ContactPage preselectedService={preselectedService} />
        )}
      </main>

      {/* Premium Multi-column Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
