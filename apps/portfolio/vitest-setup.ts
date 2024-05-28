import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';
import mediaQuery from 'css-mediaquery';

const createMatchMedia = (width: number) => {
  return (query: string): MediaQueryList => ({
    matches: mediaQuery.match(query, { width }) as boolean,
    media: '',
    addListener: () => vi.fn(),
    removeListener: () => vi.fn(),
    onchange: () => vi.fn(),
    addEventListener: () => vi.fn(),
    removeEventListener: () => vi.fn(),
    dispatchEvent: () => true,
  });
};

beforeAll(() => {
  window.matchMedia = createMatchMedia(window.innerWidth);
});
