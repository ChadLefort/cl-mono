const { join } = require('path');

const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');

const theme = require('../../packages/ui/src/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector'],
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme,
  plugins: [require('tailwindcss-react-aria-components'), require('tailwindcss-animate')],
};
