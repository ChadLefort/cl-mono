import { FC } from 'react';

import { Link } from './Link';

export const Menu: FC = () => {
  return (
    <nav className="shadow-primary/40 bg-primary flex h-16 w-full items-center justify-center px-9 shadow-lg dark:bg-slate-700">
      <div className="hidden h-full items-center space-x-6 text-sm font-semibold text-white md:flex">
        <Link variant="secondary" href="/">
          Job Experience
        </Link>
        <Link variant="secondary" href="/">
          Skills
        </Link>
        <Link variant="secondary" href="/">
          About Me
        </Link>
        <Link variant="secondary" href="/">
          Projects
        </Link>
      </div>
    </nav>
  );
};
