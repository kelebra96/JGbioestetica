import styled from 'styled-components';
import { media } from '../../styles/media';

export const TestimonialsContainer = styled.section`
  padding: 40px 1rem;
  background-color: #F5F5DC; /* Bege (Fundo) */
  text-align: center;

  ${media.tablet`
    padding: 60px 2rem;
  `}

  ${media.desktop`
    padding: 80px 3rem;
  `}
`;

export const TestimonialsTitle = styled.h2`
  font-size: 1.8rem;
  color: #556B2F; /* Verde Musgo (Principal) */
  margin-bottom: 16px;
  font-weight: 600;

  ${media.tablet`
    font-size: 2.2rem;
  `}

  ${media.desktop`
    font-size: 2.5rem;
  `}
`;

export const TestimonialsSubtitle = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;

  ${media.tablet`
    font-size: 1.1rem;
    margin-bottom: 50px;
  `}

  ${media.desktop`
    font-size: 1.2rem;
    margin-bottom: 60px;
  `}
`;

export const SwiperContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  .swiper {
    padding-bottom: 50px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #556B2F; /* Verde Musgo (Principal) */
    display: none;

    &:after {
      font-size: 24px;
    }
  }

  .swiper-pagination-bullet {
    background-color: #556B2F; /* Verde Musgo (Principal) */
    opacity: 0.3;

    &.swiper-pagination-bullet-active {
      opacity: 1;
      background-color: #E2B850; /* Dourado (Acentos) */
    }
  }

  ${media.tablet`
    .swiper-button-next,
    .swiper-button-prev {
      display: block;
    }
  `}
`;