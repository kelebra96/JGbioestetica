const { css } = require('styled-components');
const { theme } = require('./theme');

// Media query helper utility for styled-components
// Provides a mobile-first approach with min-width queries

/**
 * Media query breakpoints helper
 * Usage:
 *
 * const StyledComponent = styled.div`
 *   font-size: 14px;
 *
 *   ${media.tablet`
 *     font-size: 16px;
 *   `}
 *
 *   ${media.desktop`
 *     font-size: 18px;
 *   `}
 * `;
 */

const media = Object.keys(theme.breakpoints).reduce((acc, label) => {
  // Skip mobile since we use mobile-first approach (no media query needed for mobile)
  if (label === 'mobile') {
    return acc;
  }

  acc[label] = (...args) => css`
    @media (min-width: ${theme.breakpoints[label]}) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

/**
 * Custom media query helpers for specific use cases
 */

// Max-width queries (useful for specific mobile-only styles)
const mediaMax = Object.keys(theme.breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${parseInt(theme.breakpoints[label]) - 1}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

// Between two breakpoints
const mediaBetween = (minBreakpoint, maxBreakpoint) => (...args) => css`
  @media (min-width: ${theme.breakpoints[minBreakpoint]}) and (max-width: ${parseInt(theme.breakpoints[maxBreakpoint]) - 1}px) {
    ${css(...args)}
  }
`;

// Utility functions for common responsive patterns
const hideOnMobile = css`
  ${mediaMax.tablet`
    display: none;
  `}
`;

const showOnlyOnMobile = css`
  ${media.tablet`
    display: none;
  `}
`;

const hideOnDesktop = css`
  ${media.desktop`
    display: none;
  `}
`;

const showOnlyOnDesktop = css`
  ${mediaMax.desktop`
    display: none;
  `}
`;

// Container with responsive max-width
const containerStyles = css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  ${media.tablet`
    padding: 0 2rem;
  `}

  ${media.desktop`
    padding: 0 3rem;
  `}
`;

module.exports = {
  media,
  mediaMax,
  mediaBetween,
  hideOnMobile,
  showOnlyOnMobile,
  hideOnDesktop,
  showOnlyOnDesktop,
  containerStyles
};

// Also support ES6 style imports for React components
module.exports.media = media;
module.exports.mediaMax = mediaMax;
module.exports.mediaBetween = mediaBetween;
module.exports.hideOnMobile = hideOnMobile;
module.exports.showOnlyOnMobile = showOnlyOnMobile;
module.exports.hideOnDesktop = hideOnDesktop;
module.exports.showOnlyOnDesktop = showOnlyOnDesktop;
module.exports.containerStyles = containerStyles;
module.exports.default = media;