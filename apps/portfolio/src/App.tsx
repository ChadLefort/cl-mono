import { Button } from '@chadlefort/ui';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Menu } from '@chadlefort/ui';

import { useColorScheme } from './hooks/useColorScheme';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export const App = () => {
  const { colorScheme, toggleTheme } = useColorScheme();

  return (
    <>
      <header className="sticky top-0 z-50 flex justify-center pb-10">
        <Menu />
      </header>

      <main className="relative">
        <div className="flex flex-1 flex-col items-center pb-6">
          <div className="container flex flex-col items-center ">
            <div className="w-11/12 space-y-6 md:w-4/5">
              <Header />
              <Skills />
              <Contact />
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 right-0 mx-6 my-4">
        <Button variant="primary" className="rounded-full" onPress={toggleTheme}>
          {colorScheme === 'light' ? <MoonIcon className="size-6" /> : <SunIcon className="size-6" />}
        </Button>
      </div>
    </>
  );
};
