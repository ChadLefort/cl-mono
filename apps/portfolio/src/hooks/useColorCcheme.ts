import { useLayoutEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

type Theme = 'light' | 'dark';

export const useColorScheme = () => {
  const defaultPreference = useMediaQuery('(prefers-color-scheme: light)') ? 'light' : 'dark';
  const [colorScheme, setColorScheme] = useState<Theme>(defaultPreference);

  const toggleTheme = () => {
    const oppositeTheme = colorScheme === 'light' ? 'dark' : 'light';

    colorScheme && document.documentElement.classList.remove(colorScheme);
    document.documentElement.classList.add(oppositeTheme);

    setColorScheme(oppositeTheme);
    localStorage.setItem('colorScheme', oppositeTheme);
  };

  useLayoutEffect(() => {
    const colorScheme = localStorage.getItem('colorScheme') as Theme | null;
    document.documentElement.classList.add(colorScheme || defaultPreference);
    setColorScheme(colorScheme || defaultPreference);
  }, [defaultPreference]);

  return {
    colorScheme,
    toggleTheme,
  };
};
