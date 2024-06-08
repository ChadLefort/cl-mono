import { CardIcon, Link } from '@chadlefort/ui';
import { SiJenkins, SiMui, SiNx, SiReact, SiRedux, SiTypescript, SiWebpack } from '@icons-pack/react-simple-icons';
import type { FC } from 'react';
import clsx from 'clsx';

export const ModuleFederation: FC = () => {
  const baseIconCardClass = 'flex justify-center items-center px-0 py-3 w-20 min-h-20';

  return (
    <>
      <h3 className="text-xl font-bold">Micro Frontend with Webpack 5 Module Federation</h3>
      <p className="mb-6 text-sm">Jan 2021 - Mar 2021</p>

      <p className="mb-3">
        At the time, this client faced significant challenges with application updates, deployments, and overall
        workflow, particularly when it came to creating pull requests for ticket resolution. At times it could take up
        to 4 to 7 pull requests to get your issue to code review. Many of the concepts showcased in this demo
        application were successfully incorporated into their production applications and workflow.
      </p>
      <p className="mb-3">
        The demo application I built for the client demonstrates the use of Webpack 5 Module Federation to address these
        issues. It consists of multiple federated modules designed to enhance app functionality and necessitate frequent
        updates. I integrated these modules into a monorepo using NX. The applications showcased in the demo were built
        with React and Redux, featuring the implementation of injectable Redux reducers.
      </p>
      <p>
        If you want to learn more about the project, you can check out the{' '}
        <Link href="https://github.com/ChadLefort/mf-mfe-demo" target="_blank" rel="noopener">
          GitHub repository
        </Link>
        . The repository contains a detailed{' '}
        <Link href="https://github.com/ChadLefort/mf-mfe-demo/blob/master/README.md" target="_blank" rel="noopener">
          README file
        </Link>{' '}
        that goes into explaining how to setup and run the project. Additionally, it also contains infomation on the{' '}
        <Link
          href="https://github.com/ChadLefort/mf-mfe-demo/blob/master/docs/ARCHITECTURE.md"
          target="_blank"
          rel="noopener"
        >
          architecture
        </Link>
        .
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-6">
        <Link
          animate
          href="https://webpack.js.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <CardIcon icon={SiWebpack} title="Webpack" className={clsx(`bg-[#8DD6F9]`, baseIconCardClass)} />
        </Link>

        <Link animate href="https://nx.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <CardIcon icon={SiNx} title="Nx" className={clsx(`bg-[#123456]`, baseIconCardClass)} />
        </Link>

        <Link animate href="https://jenkins.io/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <CardIcon icon={SiJenkins} title="Jenkins" className={clsx(`bg-[#D24939]`, baseIconCardClass)} />
        </Link>

        <Link animate href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
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

        <Link animate href="https://mui.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <CardIcon icon={SiMui} title="Material UI" className={clsx(`bg-[#0081CB]`, baseIconCardClass)} />
        </Link>
      </div>
    </>
  );
};
