import { Card, CardIcon, Link } from '@chadlefort/ui';
import {
  SiJavascript,
  SiMockserviceworker,
  SiNodedotjs,
  SiNuxtdotjs,
  SiReact,
  SiRedux,
  SiTestinglibrary,
  SiTypescript,
  SiVite,
  SiVitest,
  SiVuedotjs,
} from '@icons-pack/react-simple-icons';
import { FC } from 'react';
import clsx from 'clsx';

export const Skills: FC = () => {
  const baseIconCardClass = 'flex justify-center items-center px-0 py-3 w-20 min-h-20';

  return (
    <>
      <h2 className="mb-3 text-center text-3xl font-bold text-white">Skills</h2>
      <div className="mb-8 h-[2px] w-full bg-gradient-to-r from-transparent via-slate-300 before:to-transparent"></div>

      <Card>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <CardIcon icon={SiReact} title="React" className={clsx('bg-[#61DAFB]', baseIconCardClass)} />
          </Link>

          <Link href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
            <CardIcon icon={SiRedux} title="Redux" className={clsx('bg-[#764ABC]', baseIconCardClass)} />
          </Link>

          <Link href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
            <CardIcon icon={SiTypescript} title="TypeScript" className={clsx('bg-[#3178C6]', baseIconCardClass)} />
          </Link>

          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardIcon icon={SiJavascript} title="JavaScript" className={clsx('bg-[#F7DF1E]', baseIconCardClass)} />
          </Link>

          <Link href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
            <CardIcon icon={SiVuedotjs} title="Vue.js" className={clsx('bg-[#4FC08D]', baseIconCardClass)} />
          </Link>

          <Link href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">
            <CardIcon icon={SiNuxtdotjs} title="Nuxt.js" className={clsx('bg-[#00DC82]', baseIconCardClass)} />
          </Link>

          <Link href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
            <CardIcon icon={SiVite} title="Vite" className={clsx('bg-[#646CFF]', baseIconCardClass)} />
          </Link>

          <Link href="https://vitest.dev/" target="_blank" rel="noopener noreferrer">
            <CardIcon icon={SiVitest} title="Vitest" className={clsx('bg-[#6E9F18]', baseIconCardClass)} />
          </Link>

          <Link href="https://testing-library.com/" target="_blank" rel="noopener noreferrer">
            <CardIcon icon={SiTestinglibrary} title="Testing Lib" className={clsx('bg-[#E33332]', baseIconCardClass)} />
          </Link>

          <Link href="https://mswjs.io/" target="_blank" rel="noopener noreferrer">
            <CardIcon icon={SiMockserviceworker} title="MSW" className={clsx('bg-[#FF6A33]', baseIconCardClass)} />
          </Link>

          <Link href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
            <CardIcon icon={SiNodedotjs} title="Node.js" className={clsx('bg-[#5FA04E]', baseIconCardClass)} />
          </Link>
        </div>
      </Card>
    </>
  );
};
