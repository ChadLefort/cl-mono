import { Button } from '@chadlefort/ui';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Menu } from '@chadlefort/ui';

import { useColorScheme } from './hooks/useColorScheme';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { JobExperience } from './components/JobExperience';

export const App = () => {
  const { colorScheme, toggleTheme } = useColorScheme();

  return (
    <main className="h-screen snap-none overflow-y-auto md:snap-y md:snap-mandatory">
      <header className="sticky top-0 z-50">
        <Menu>
          <Menu.Item href="#experience">Experience</Menu.Item>
          <Menu.Item href="#skills">Skills</Menu.Item>
          <Menu.Item href="#projects">Projects</Menu.Item>
          <Menu.Item href="#header">About</Menu.Item>
          <Menu.Item href="#contact">Contact</Menu.Item>
        </Menu>
      </header>

      <div className="flex flex-col items-center space-y-10 px-6 md:space-y-20">
        <section className="snap-start md:w-6/12">
          <Header />
        </section>

        <section className="snap-start md:w-6/12 md:pt-24">
          <JobExperience />
        </section>

        <section className="snap-start">
          <Skills />
        </section>
      </div>

      <footer>
        <Contact />

        <div className="fixed bottom-0 right-0 mx-6 my-4 hidden md:block">
          <Button variant="primary" className="rounded-full" onPress={toggleTheme}>
            {colorScheme === 'light' ? <MoonIcon className="size-6" /> : <SunIcon className="size-6" />}
          </Button>
        </div>
      </footer>
    </main>
  );
};
