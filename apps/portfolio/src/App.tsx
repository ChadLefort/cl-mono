import { Button } from '@chadlefort/ui';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

import { useColorScheme } from './hooks/useColorScheme';
import { Header } from './components/Header';

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

      <Header />
    </>
  );
};
