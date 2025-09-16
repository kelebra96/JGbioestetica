import React from 'react';
import Hero from '../../components/Hero';
import ServiceHighlights from '../../components/ServiceHighlights';
import Testimonials from '../../components/Testimonials';

const Home = () => {
  const handleCtaClick = () => {
    console.log('CTA clicked - Agende sua Consulta');
    // Future implementation: navigate to contact form or open appointment modal
  };

  return (
    <div>
      <Hero
        title="Realce sua Beleza Natural"
        subtitle="Tratamentos de bioestética avançados para cuidar da sua pele com segurança e eficácia"
        ctaText="Agende sua Consulta"
        ctaAction={handleCtaClick}
      />
      <ServiceHighlights />
      <Testimonials />
    </div>
  );
};

export default Home;