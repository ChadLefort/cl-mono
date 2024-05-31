import { Avatar, Button, Terminal } from '@chadlefort/ui';
import { FolderArrowDownIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-10 flex flex-col items-center md:flex-row">
        <Avatar src="me.png" imgProps={{ alt: 'Chad Lefort' }} />

        <div className="mx-6 hidden sm:flex sm:flex-col sm:items-center md:block">
          <h1 className="text-4xl font-extrabold text-white md:text-7xl">Chad Lefort</h1>
          <h2 className="text-primary text-2xl font-bold md:text-5xl dark:text-slate-700">Senior Frontend Engineer</h2>
        </div>
      </div>

      <Terminal
        textCommand="./chad-lefort.sh"
        onCommandComplete={
          <div className="text-white">
            <div className="mb-3 font-mono">
              &gt; Hello, I'm Chad, a senior frontend engineer from Mandeville, Louisiana with 11+ years of development
              experience.
            </div>
            <div className="mb-3 font-mono">
              &gt; Shortly after I was given my first computer, I developed a strong passion for programming.
            </div>
            <div className="mb-3 font-mono">
              &gt; I'm constantly furthering my skills to keep up with the ever changing demand the web has.
            </div>
            <div className="mb-3 font-mono">
              &gt; I enjoy the feeling of accomplishment when programming, and I take pride in writing maintainable and
              efficient code.
            </div>
            <div className="mb-3 font-mono">
              &gt; Committed to team success, I prioritize delivering exceptional products that provide an outstanding
              user experience.
            </div>
          </div>
        }
      />

      {/* <Button variant="primary" className="mt-6" size="lg" icon={FolderArrowDownIcon}>
        Download Resume
      </Button> */}
    </div>
  );
};
