import React from 'react';
import { Container } from '../Layout';
import {
  ServiceHighlightsContainer,
  SectionTitle,
  SectionSubtitle,
  ServicesGrid,
  ServiceCard
} from './styles';

const ServiceHighlights = () => {
  const services = [
    {
      id: 1,
      icon: '💆‍♀️',
      title: 'Limpeza de Pele',
      description: 'Tratamento profundo para renovação e purificação da pele, deixando-a mais limpa e saudável.'
    },
    {
      id: 2,
      icon: '✨',
      title: 'Rejuvenescimento',
      description: 'Procedimentos avançados para combater o envelhecimento e devolver a vitalidade à sua pele.'
    },
    {
      id: 3,
      icon: '🌟',
      title: 'Harmonização Facial',
      description: 'Técnicas especializadas para realçar a beleza natural e harmonizar os traços faciais.'
    },
    {
      id: 4,
      icon: '💫',
      title: 'Peeling Químico',
      description: 'Renovação celular profunda para melhorar textura, manchas e uniformidade da pele.'
    }
  ];

  return (
    <ServiceHighlightsContainer>
      <Container>
        <SectionTitle>Nossos Serviços</SectionTitle>
        <SectionSubtitle>
          Descubra os tratamentos que vão transformar sua beleza e autoestima
        </SectionSubtitle>

        <ServicesGrid>
          {services.map(service => (
            <ServiceCard key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServiceHighlightsContainer>
  );
};

export default ServiceHighlights;