// Example usage of the global breakpoints and media query helper
// This file demonstrates how to use the new utilities in styled-components

const styled = require('styled-components').default;
const { media, theme, containerStyles } = require('./index.js');

// Example 1: Basic responsive styling with mobile-first approach
const ResponsiveHeading = styled.h1`
  // Mobile styles (default)
  font-size: ${theme.typography.fontSizes['2xl']};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.md};

  // Tablet and up
  ${media.tablet`
    font-size: ${theme.typography.fontSizes['3xl']};
    margin-bottom: ${theme.spacing.lg};
  `}

  // Desktop and up
  ${media.desktop`
    font-size: ${theme.typography.fontSizes['4xl']};
    margin-bottom: ${theme.spacing.xl};
  `}
`;

// Example 2: Using container styles
const PageContainer = styled.div`
  ${containerStyles}
  background-color: ${theme.colors.background};
`;

// Example 3: Using utility classes for show/hide
const MobileOnlyElement = styled.div`
  ${showOnlyOnMobile}
  background-color: ${theme.colors.accent};
  padding: ${theme.spacing.md};
`;

const DesktopOnlyElement = styled.div`
  ${hideOnMobile}
  background-color: ${theme.colors.secondary};
  padding: ${theme.spacing.lg};
`;

// Example 4: Custom responsive grid
const ResponsiveGrid = styled.div`
  display: grid;
  gap: ${theme.spacing.md};

  // Mobile: single column
  grid-template-columns: 1fr;

  // Tablet: two columns
  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
  `}

  // Desktop: three columns
  ${media.desktop`
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.xl};
  `}
`;

module.exports = {
  ResponsiveHeading,
  PageContainer,
  MobileOnlyElement,
  DesktopOnlyElement,
  ResponsiveGrid
};