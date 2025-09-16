import styled from 'styled-components';
import { media } from '../../styles/media';
import { theme } from '../../styles/theme';

export const FooterWrapper = styled.footer`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  margin-top: auto;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
`;

export const FooterMainContent = styled.div`
  /* Mobile-first: Single column layout */
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  padding: ${theme.spacing['2xl']} ${theme.spacing.md};

  /* Tablet: 2-column layout */
  ${media.tablet`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.xl};
    padding: ${theme.spacing['2xl']} ${theme.spacing.md};
  `}

  /* Desktop: 4-column layout */
  ${media.desktop`
    grid-template-columns: repeat(4, 1fr);
    gap: ${theme.spacing['2xl']};
    padding: ${theme.spacing['3xl']} ${theme.spacing.md};
  `}
`;

export const FooterColumn = styled.div`
  /* Mobile-first: Center alignment for better readability */
  text-align: center;

  /* Tablet and up: Left alignment for better layout */
  ${media.tablet`
    text-align: left;
  `}
`;

export const FooterColumnTitle = styled.h4`
  color: ${theme.colors.accent};
  font-size: ${theme.typography.fontSizes.lg};
  margin-bottom: ${theme.spacing.md};
  font-weight: ${theme.typography.fontWeights.semibold};

  ${media.tablet`
    font-size: ${theme.typography.fontSizes.xl};
  `}
`;

export const FooterLogo = styled.div`
  margin-bottom: ${theme.spacing.md};

  a {
    color: ${theme.colors.white};
    text-decoration: none;
    font-size: ${theme.typography.fontSizes['2xl']};
    font-weight: ${theme.typography.fontWeights.bold};
    display: block;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.accent};
    }

    ${media.tablet`
      font-size: ${theme.typography.fontSizes['3xl']};
    `}
  }
`;

export const FooterTagline = styled.p`
  color: ${theme.colors.background};
  line-height: ${theme.typography.lineHeights.relaxed};
  font-size: ${theme.typography.fontSizes.sm};
  margin: 0;

  ${media.tablet`
    font-size: ${theme.typography.fontSizes.base};
  `}
`;

export const FooterLinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FooterLinkItem = styled.li`
  margin-bottom: ${theme.spacing.sm};
`;

export const FooterLink = styled.a`
  color: ${theme.colors.background};
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: ${theme.typography.fontSizes.sm};

  &:hover {
    color: ${theme.colors.secondary};
  }

  &.active {
    color: ${theme.colors.secondary};
    font-weight: ${theme.typography.fontWeights.semibold};
  }

  ${media.tablet`
    font-size: ${theme.typography.fontSizes.base};
  `}
`;

export const ContactInfo = styled.div`
  p {
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.background};
    font-size: ${theme.typography.fontSizes.sm};
    line-height: ${theme.typography.lineHeights.normal};

    ${media.tablet`
      font-size: ${theme.typography.fontSizes.base};
    `}

    strong {
      color: ${theme.colors.accent};
    }
  }

  /* Mobile: Center the contact info for better readability */
  text-align: center;

  ${media.tablet`
    text-align: left;
  `}
`;

export const SocialLinks = styled.div`
  /* Mobile-first: Column layout */
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  align-items: center;

  ${media.tablet`
    align-items: flex-start;
  `}
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.background};
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: ${theme.typography.fontSizes.sm};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};

  &:hover {
    color: ${theme.colors.secondary};
  }

  ${media.tablet`
    font-size: ${theme.typography.fontSizes.base};
    padding: ${theme.spacing.xs} 0;
  `}

  .social-icon {
    font-size: ${theme.typography.fontSizes.lg};

    ${media.tablet`
      font-size: ${theme.typography.fontSizes.xl};
    `}
  }
`;

export const FooterCopyright = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: ${theme.spacing.md} 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  p {
    margin: 0;
    color: ${theme.colors.background};
    font-size: ${theme.typography.fontSizes.sm};

    ${media.tablet`
      font-size: ${theme.typography.fontSizes.base};
    `}
  }
`;