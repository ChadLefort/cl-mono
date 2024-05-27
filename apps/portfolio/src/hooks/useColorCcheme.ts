import { useEffect, useState } from 'react';
import { useDarkMode } from 'usehooks-ts';

type Theme = 'light' | 'dark';

export const useColorScheme = () => {
  const { isDarkMode, toggle } = useDarkMode({ localStorageKey: 'isDarkMode' });
  const [colorScheme, setColorScheme] = useState<Theme>(isDarkMode ? 'dark' : 'light');

  const toggleTheme = () => {
    const oppositeTheme = colorScheme === 'light' ? 'dark' : 'light';

    document.documentElement.classList.remove(colorScheme);
    document.documentElement.classList.add(oppositeTheme);

    setColorScheme(oppositeTheme);
    toggle();
  };

  useEffect(() => {
    document.documentElement.classList.add(colorScheme);
    setColorScheme(colorScheme);
  }, [colorScheme]);

  return {
    colorScheme,
    toggleTheme,
  };
};
