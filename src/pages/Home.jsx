import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import AboutManifesto from '../components/AboutManifesto';
import EverythingSection from '../components/EverythingSection';
import InteractiveServices from '../components/InteractiveServices';
import ByTheNumbers from '../components/ByTheNumbers';
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
    <div className="relative w-full bg-[#050505] text-white">
      {/* 1. Cinematic Hero Section */}
      <Hero
        onStartProject={scrollToContact}
        onExploreServices={scrollToServices}
        onNavigate={onNavigate}
      />

      {/* 2. Trusted Technology Ecosystem Marquee */}
      <Marquee />

      {/* 3. Opening Act Style About Manifesto + 3D Cylinder Card Carousel */}
      <AboutManifesto
        onExploreAbout={() => onNavigate('about')}
        onExploreSelfMade={() => onNavigate('self-made')}
      />

      {/* 4. Massive 'WE DO EVERYTHING!' Section with embedded animated pills */}
      <EverythingSection />

      {/* 5. Interactive Hover Services Directory with live preview card & dimming */}
      <InteractiveServices
        onSelectService={(service) => {
          if (onSelectService) onSelectService(service);
          scrollToContact();
        }}
        onExploreAllServices={() => onNavigate('services')}
      />

      {/* 6. 'BY THE NUMBERS' Bento Grid with glowing blue SVG curve & 3-Phase Engine */}
      <ByTheNumbers onStartProject={scrollToContact} />

      {/* 7. Why Genfrex & Process */}
      <WhyGenfrex />
      <Process />

      {/* 8. Talent Connections Network */}
      <Talent
        onSelectTalentAction={(action) => {
          if (onSelectService) {
            onSelectService(action === 'hire_talent' ? 'Talent Connections' : 'Other');
          }
          scrollToContact();
        }}
      />

      {/* 9. Social Proof Testimonials */}
      <Testimonials />

      {/* 10. Direct Call To Action */}
      <CTA onStartProject={scrollToContact} />

      {/* 11. Interactive Contact Section */}
      <ContactSection preselectedService={preselectedService} />
    </div>
  );
}
