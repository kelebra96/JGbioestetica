import styled from 'styled-components';
import { media } from '../../styles/media';

export const ServiceHighlightsContainer = styled.section`
  padding: 60px 1rem;
  background-color: #F5F5DC;
  text-align: center;

  ${media.tablet`
    padding: 80px 2rem;
  `}

  ${media.desktop`
    padding: 80px 3rem;
  `}
`;

export const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #556B2F;
  margin-bottom: 16px;
  letter-spacing: -0.5px;

  ${media.tablet`
    font-size: 2rem;
  `}

  ${media.desktop`
    font-size: 2.5rem;
  `}
`;

export const SectionSubtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  ${media.tablet`
    font-size: 1.125rem;
    margin-bottom: 60px;
  `}
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  max-width: 400px;
  margin: 0 auto;

  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
    max-width: 800px;
  `}

  ${media.desktop`
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
    max-width: 1200px;
  `}
`;

export const ServiceCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px 20px;
  box-shadow: 0 4px 24px rgba(85, 107, 47, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(85, 107, 47, 0.1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(85, 107, 47, 0.15);
    border-color: rgba(85, 107, 47, 0.2);
  }

  .service-icon {
    font-size: 2.5rem;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    margin-left: auto;
    margin-right: auto;
    background: linear-gradient(135deg, #EDE5B0 0%, #E2B850 100%);
    border-radius: 50%;
    box-shadow: 0 4px 16px rgba(226, 184, 80, 0.3);
  }

  .service-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #556B2F;
    margin-bottom: 16px;
    margin-top: 0;
  }

  .service-description {
    font-size: 0.875rem;
    color: #666;
    line-height: 1.6;
    margin: 0;
  }

  ${media.tablet`
    padding: 36px 22px;

    .service-icon {
      font-size: 2.75rem;
      width: 75px;
      height: 75px;
      margin-bottom: 22px;
    }

    .service-title {
      font-size: 1.2rem;
    }

    .service-description {
      font-size: 0.9rem;
    }
  `}

  ${media.desktop`
    padding: 40px 24px;

    .service-icon {
      font-size: 3rem;
      width: 80px;
      height: 80px;
      margin-bottom: 24px;
    }

    .service-title {
      font-size: 1.25rem;
    }

    .service-description {
      font-size: 0.9rem;
    }
  `}
`;