import { Avatar, Button } from '@chadlefort/ui';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

import { useColorScheme } from './hooks/useColorCcheme';

export const App = () => {
  const { colorScheme, toggleTheme } = useColorScheme();

  return (
    <>
      <nav>
        <div className="mx-6 my-4 flex justify-end">
          <Button variant="primary" className="rounded-full" onPress={toggleTheme}>
            {colorScheme === 'light' ? <MoonIcon className="size-6" /> : <SunIcon className="size-6" />}
          </Button>
        </div>
      </nav>

      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex items-center">
          <Avatar src="me.png" imgProps={{ alt: 'Chad Lefort' }} />

          <div className="mx-6">
            <h1 className="mb-2 text-7xl font-bold text-white">Chad Lefort</h1>
            <h2 className="text-5xl font-medium text-gray-800 dark:text-gray-500">Senior Frontend Engineer</h2>
          </div>
        </div>
      </div>
    </>
  );
};
