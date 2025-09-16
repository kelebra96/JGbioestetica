import styled from 'styled-components';
import { media, mediaMax } from '../../styles/media';

export const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #F5F5DC;
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : 'linear-gradient(135deg, #556B2F 0%, #4a5f28 50%, #3d4f22 100%)'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -2;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(85, 107, 47, 0.6);
    z-index: -1;
  }
`;

export const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  padding: 0 1rem;
  z-index: 1;

  ${media.tablet`
    padding: 0 2rem;
  `}

  ${media.desktop`
    padding: 0 2.5rem;
  `}
`;

export const HeroTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.3;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  ${media.tablet`
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  `}

  ${media.desktop`
    font-size: 4rem;
  `}
`;

export const HeroSubtitle = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  opacity: 0.95;

  ${media.tablet`
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  `}

  ${media.desktop`
    font-size: 1.4rem;
    margin-bottom: 2.5rem;
  `}
`;

export const HeroButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  align-items: center;

  button {
    width: 100%;
    max-width: 300px;
  }

  ${media.tablet`
    flex-direction: row;

    button {
      width: auto;
      max-width: none;
    }
  `}
`;