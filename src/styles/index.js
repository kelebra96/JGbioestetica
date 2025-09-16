// Main styles export file
// Provides easy access to theme, media queries, and other style utilities

const { theme } = require('./theme');
const {
  media,
  mediaMax,
  mediaBetween,
  hideOnMobile,
  showOnlyOnMobile,
  hideOnDesktop,
  showOnlyOnDesktop,
  containerStyles
} = require('./media');

module.exports = {
  theme,
  media,
  mediaMax,
  mediaBetween,
  hideOnMobile,
  showOnlyOnMobile,
  hideOnDesktop,
  showOnlyOnDesktop,
  containerStyles
};