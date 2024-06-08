import { CardIcon, Link } from '@chadlefort/ui';
import { SiJenkins, SiLerna, SiNpm, SiReact, SiRedux, SiTypescript } from '@icons-pack/react-simple-icons';
import type { FC } from 'react';
import clsx from 'clsx';

export const Lerna: FC = () => {
  const baseIconCardClass = 'flex justify-center items-center px-0 py-3 w-20 min-h-20';

  return (
    <>
      <h3 className="text-xl font-bold">Lerna Monorepo Migration</h3>
      <p className="mb-6 text-sm">Oct 2019 - Dec 2019</p>

      <p className="mb-3">
        Saved hours of manual deployment time by creating a monorepo with Lerna for 17 React apps and 6 NPM packages,
        leading to cost efficiency and improved productivity for a team of 7 frontend developers.
      </p>
      <p>
        I encountered challenges in configuring Typescript to integrate with shared packages, and a substantial portion
        of the project involved ensuring that our continuous integration system, Jenkins, effectively built and released
        Docker containers and NPM packages. Our packages still needed to be published to NPM as we have a couple of
        external legacy applications that consumed them for components. I also had to ensure that our Jenkins pipeline
        was able to build and deploy our applications in parallel as previously we had to build and release them one by
        one.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-6">
        <Link
          animate
          href="https://lerna.js.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <CardIcon icon={SiLerna} title="Lerna" className={clsx(`bg-[#553399]`, baseIconCardClass)} />
        </Link>

        <Link animate href="https://jenkins.io/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <CardIcon icon={SiJenkins} title="Jenkins" className={clsx(`bg-[#D24939]`, baseIconCardClass)} />
        </Link>

        <Link animate href="https://npmjs.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <CardIcon icon={SiNpm} title="NPM" className={clsx(`bg-[#CB3837]`, baseIconCardClass)} />
        </Link>

        <Link animate href="https://react.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <CardIcon icon={SiReact} title="React" className={clsx(`bg-[#61DAFB]`, baseIconCardClass)} />
        </Link>

        <Link
          animate
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <CardIcon icon={SiRedux} title="Redux" className={clsx(`bg-[#764ABC]`, baseIconCardClass)} />
        </Link>

        <Link
          animate
          href="https://typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <CardIcon icon={SiTypescript} title="TypeScript" className={clsx(`bg-[#3178C6]`, baseIconCardClass)} />
        </Link>
      </div>
    </>
  );
};
