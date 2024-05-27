const { join } = require('path');

const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');

const theme = require('./src/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme,
  safelist: ['dark:bg-dark-pro', 'bg-gray-500'],
  plugins: [require('tailwindcss-react-aria-components'), require('tailwindcss-animate')],
};
