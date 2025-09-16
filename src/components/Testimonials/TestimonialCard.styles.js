import styled from 'styled-components';
import { media } from '../../styles/media';

export const CardContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  height: auto;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  ${media.tablet`
    padding: 30px 25px;
    min-height: 260px;
  `}

  ${media.desktop`
    padding: 40px 30px;
    min-height: 280px;
  `}
`;

export const QuoteIcon = styled.div`
  font-size: 4rem;
  color: #E2B850; /* Dourado (Acentos) */
  line-height: 1;
  margin-bottom: -10px;
  font-family: serif;
`;

export const QuoteText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #333;
  font-style: italic;
  flex-grow: 1;
  margin: 16px 0;

  ${media.tablet`
    font-size: 1rem;
    margin: 18px 0;
  `}

  ${media.desktop`
    font-size: 1.1rem;
    margin: 20px 0;
  `}
`;

export const AuthorInfo = styled.div`
  margin-top: 20px;
  text-align: left;
`;

export const AuthorName = styled.h4`
  font-size: 1.2rem;
  color: #556B2F; /* Verde Musgo (Principal) */
  margin: 0 0 5px 0;
  font-weight: 600;
`;

export const AuthorRole = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;