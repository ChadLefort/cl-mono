import { Avatar, Button, Terminal } from '@chadlefort/ui';
import { FolderArrowDownIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="container flex flex-col items-center">
        <div className="mb-6 flex flex-col items-center md:flex-row">
          <Avatar src="me.png" imgProps={{ alt: 'Chad Lefort' }} size="lg" />

          <div className="mx-6 hidden sm:flex sm:flex-col sm:items-center md:block">
            <h1 className="text-4xl font-semibold text-white md:text-7xl">Chad Lefort</h1>
            <h2 className="text-2xl font-medium text-gray-800 md:text-5xl dark:text-gray-500">
              Senior Frontend Engineer
            </h2>
          </div>
        </div>

        <div className="w-11/12 md:w-4/5">
          <Terminal
            textCommand="./chad-lefort.sh"
            onCommandComplete={
              <div className="text-white">
                <div className="mb-3 font-mono">
                  &gt; Hello, I'm Chad, a senior frontend engineer from Mandeville, Louisiana with 11+ years of
                  development experience.
                </div>
                <div className="mb-3 font-mono">
                  &gt; Shortly after I was given my first computer, I developed a strong passion for programming.
                </div>
                <div className="mb-3 font-mono">
                  &gt; I'm constantly furthering my skills to keep up with the ever changing demand the web has.
                </div>
                <div className="mb-3 font-mono">
                  &gt; I enjoy the feeling of accomplishment when programming, and I take pride in writing maintainable
                  and efficient code.
                </div>
                <div className="mb-3 font-mono">
                  &gt; Committed to team success, I prioritize delivering exceptional products that provide an
                  outstanding user experience.
                </div>
              </div>
            }
          />
        </div>

        <Button variant="primary" className="mt-6" size="lg" icon={FolderArrowDownIcon}>
          Download Resume
        </Button>
      </div>
    </div>
  );
};
