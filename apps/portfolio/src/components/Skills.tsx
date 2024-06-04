import { Card, CardIcon, Link } from '@chadlefort/ui';
import {
  SiJavascript,
  SiJavascriptHex,
  SiMockserviceworker,
  SiMockserviceworkerHex,
  SiNodedotjs,
  SiNodedotjsHex,
  SiNuxtdotjs,
  SiNuxtdotjsHex,
  SiReact,
  SiReactHex,
  SiRedux,
  SiReduxHex,
  SiTestinglibrary,
  SiTestinglibraryHex,
  SiTypescript,
  SiTypescriptHex,
  SiVite,
  SiViteHex,
  SiVitest,
  SiVitestHex,
  SiVuedotjs,
  SiVuedotjsHex,
} from '@icons-pack/react-simple-icons';
import type { FC } from 'react';
import clsx from 'clsx';

export const Skills: FC = () => {
  const baseIconCardClass = 'flex justify-center items-center px-0 py-3 w-20 min-h-20';

  return (
    <>
      <h2 className="mb-3 text-center text-3xl font-bold text-white">Skills</h2>
      <div className="mb-8 h-[2px] w-full bg-gradient-to-r from-transparent via-slate-300 before:to-transparent"></div>

      <Card className="w-fit self-center p-6">
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            animate
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <CardIcon icon={SiReact} title="React" className={clsx(`bg-[${SiReactHex}]`, baseIconCardClass)} />
          </Link>

          <Link
            animate
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <CardIcon icon={SiRedux} title="Redux" className={clsx(`bg-[${SiReduxHex}]`, baseIconCardClass)} />
          </Link>

          <Link
            animate
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <CardIcon
              icon={SiTypescript}
              title="TypeScript"
              className={clsx(`bg-[${SiTypescriptHex}]`, baseIconCardClass)}
            />
          </Link>

          <Link
            animate
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <CardIcon
              icon={SiJavascript}
              title="JavaScript"
              className={clsx(`bg-[${SiJavascriptHex}]`, baseIconCardClass)}
            />
          </Link>

          <Link
            animate
            href="https://vuejs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <CardIcon icon={SiVuedotjs} title="Vue.js" className={clsx(`bg-[${SiVuedotjsHex}]`, baseIconCardClass)} />
          </Link>

          <Link
            animate
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <CardIcon
              icon={SiNuxtdotjs}
              title="Nuxt.js"
              className={clsx(`bg-[${SiNuxtdotjsHex}]`, baseIconCardClass)}
            />
          </Link>

          <Link
            animate
            href="https://vitejs.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <CardIcon icon={SiVite} title="Vite" className={clsx(`bg-[${SiViteHex}]`, baseIconCardClass)} />
          </Link>

          <Link
            animate
            href="https://vitest.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <CardIcon icon={SiVitest} title="Vitest" className={clsx(`bg-[${SiVitestHex}]`, baseIconCardClass)} />
          </Link>

          <Link
            animate
            href="https://testing-library.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <CardIcon
              icon={SiTestinglibrary}
              title="Testing Lib"
              className={clsx(`bg-[${SiTestinglibraryHex}]`, baseIconCardClass)}
            />
          </Link>

          <Link animate href="https://mswjs.io/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <CardIcon
              icon={SiMockserviceworker}
              title="MSW"
              className={clsx(`bg-[${SiMockserviceworkerHex}]`, baseIconCardClass)}
            />
          </Link>

          <Link
            animate
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <CardIcon
              icon={SiNodedotjs}
              title="Node.js"
              className={clsx(`bg-[${SiNodedotjsHex}]`, baseIconCardClass)}
            />
          </Link>
        </div>
      </Card>
    </>
  );
};
