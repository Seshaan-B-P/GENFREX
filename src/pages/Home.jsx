import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Services from '../components/Services';
import WhyGenfrex from '../components/WhyGenfrex';
import Process from '../components/Process';
import Talent from '../components/Talent';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import ContactSection from '../components/ContactSection';

export default function Home({ onNavigate, onSelectService, preselectedService }) {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('contact');
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('services');
    }
  };

  return (
    <div className="relative w-full">
      <Hero
        onStartProject={scrollToContact}
        onExploreServices={scrollToServices}
      />
      <Marquee />
      <About />
      <Services
        onSelectService={(service) => {
          if (onSelectService) onSelectService(service);
          scrollToContact();
        }}
      />
      <WhyGenfrex />
      <Process />
      <Talent
        onSelectTalentAction={(action) => {
          if (onSelectService) {
            onSelectService(action === 'hire_talent' ? 'Talent Connections' : 'Other');
          }
          scrollToContact();
        }}
      />
      <Testimonials />
      <CTA onStartProject={scrollToContact} />
      <ContactSection preselectedService={preselectedService} />
    </div>
  );
}
