import { Button } from '@chadlefort/ui';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

import { useColorScheme } from './hooks/useColorCcheme';

export const App = () => {
  const { colorScheme, toggleTheme } = useColorScheme();

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="mb-4 h-40 w-40 overflow-hidden rounded-full shadow-lg">
        <img src="me.png" alt="Chad Lefort" className="h-full w-full object-cover" />
      </div>
      <h1 className="mb-2 text-7xl font-bold text-white">Chad Lefort</h1>
      <h2 className="mb-6 text-5xl font-medium text-gray-800 dark:text-gray-500">Senior Frontend Engineer</h2>

      <Button variant="primary" className="rounded-full" onPress={toggleTheme}>
        {colorScheme === 'light' ? <MoonIcon className="size-6" /> : <SunIcon className="size-6" />}
      </Button>
    </div>
  );
};
