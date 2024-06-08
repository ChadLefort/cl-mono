import { Button } from '@chadlefort/ui';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Menu } from '@chadlefort/ui';

import { useColorScheme } from './hooks/useColorScheme';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Projects } from './components/Projects';

export const App = () => {
  const { colorScheme, toggleTheme } = useColorScheme();

  return (
    <main className="h-screen snap-none overflow-y-auto md:snap-y md:snap-mandatory">
      <header className="sticky top-0 z-50">
        <Menu>
          <Menu.Item href="#experience">Experience</Menu.Item>
          <Menu.Item href="#projects">Projects</Menu.Item>
          <Menu.Item href="#skills">Skills</Menu.Item>
          <Menu.Item href="#header">About</Menu.Item>
          <Menu.Item href="#contact">Contact</Menu.Item>
        </Menu>
      </header>

      <div className="flex flex-col items-center">
        <div className="container space-y-10 px-6 md:space-y-20">
          <section className="snap-start">
            <Header />
          </section>

          <section className="snap-start md:pt-24">
            <Experience />
          </section>

          <section className="snap-start">
            <Projects />
          </section>

          <section className="flex snap-start flex-col">
            <Skills />
          </section>

          <section className="snap-start">
            <About />
          </section>
        </div>
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
