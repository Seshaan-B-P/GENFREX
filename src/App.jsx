import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import SelfMadePage from './pages/SelfMade';

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
      if (['home', 'services', 'about', 'contact', 'self-made'].includes(hash)) {
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

      {/* Main Content Area with Silky Page Transition */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {activePage === 'home' && (
              <Home
                onNavigate={navigateTo}
                onSelectService={handleSelectService}
                preselectedService={preselectedService}
              />
            )}
            {activePage === 'services' && (
              <ServicesPage
                onSelectService={handleSelectService}
                onNavigate={navigateTo}
              />
            )}
            {activePage === 'about' && (
              <AboutPage
                onStartProject={() => navigateTo('contact')}
                onNavigate={navigateTo}
              />
            )}
            {activePage === 'contact' && (
              <ContactPage
                preselectedService={preselectedService}
                onNavigate={navigateTo}
              />
            )}
            {activePage === 'self-made' && (
              <SelfMadePage
                onNavigate={navigateTo}
                onStartProject={() => navigateTo('contact')}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Premium Multi-column Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
