import '@testing-library/jest-dom/vitest';
import mediaQuery from 'css-mediaquery';

const createMatchMedia = (width: number) => {
  return (query: string): MediaQueryList => ({
    matches: mediaQuery.match(query, { width }) as boolean,
    media: '',
    addListener: () => {},
    removeListener: () => {},
    onchange: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
  });
};

beforeAll(() => {
  window.matchMedia = createMatchMedia(window.innerWidth);
});
