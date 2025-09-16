import React from 'react';
import Button from '../Button';
import { Container } from '../Layout';
import {
  HeroSection,
  HeroBackground,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButtonContainer
} from './styles';

const Hero = ({
  backgroundImage,
  title = "Realce sua Beleza Natural",
  subtitle = "Tratamentos de bioestética avançados para cuidar da sua pele com segurança e eficácia",
  ctaText = "Agende sua Consulta",
  ctaAction,
  ...props
}) => {
  return (
    <HeroSection {...props}>
      <HeroBackground backgroundImage={backgroundImage} />
      <Container>
        <HeroContent>
          <HeroTitle>{title}</HeroTitle>
          <HeroSubtitle>{subtitle}</HeroSubtitle>
          <HeroButtonContainer>
            <Button
              variant="primary"
              size="large"
              onClick={ctaAction}
            >
              {ctaText}
            </Button>
          </HeroButtonContainer>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;