import { CardIcon, Link } from '@chadlefort/ui';
import {
  SiBootstrap,
  SiDocker,
  SiGraphql,
  SiMockserviceworker,
  SiNodedotjs,
  SiNuxtdotjs,
  SiSass,
  SiStorybook,
  SiTestinglibrary,
  SiTypescript,
  SiVitest,
  SiVuedotjs,
} from '@icons-pack/react-simple-icons';
import type { FC } from 'react';
import clsx from 'clsx';

export const SpearDashboard: FC = () => {
  const baseIconCardClass = 'flex justify-center items-center px-0 py-3 w-20 min-h-20';

  return (
    <>
      <h3 className="text-xl font-bold">Spear Education Dashboard</h3>
      <p className="mb-6 text-sm">Apr 2022 - Feb 2023</p>

      <p className="mb-3">
        Built and architected a new mobile-first dashboard for an education SaaS platform tailored to dentists and their
        practices. Each area of the platform is represented by a widget on the dashboard, requiring me to quickly
        familiarize myself with the entire platform.
      </p>
      <p className="mb-3">
        Drawing from my experience with the previous project I worked on, this application was also developed using Vue,
        Nuxt, Typescript, GraphQL, and Bootstrap. Additionally, it leveraged Vue's composable API and featured fully
        typed GraphQL type definitions generated using GraphQL Code Generator. Client-side mocks were implemented using
        Mock Service Worker, and extensive code coverage was achieved through unit tests written with Vue Testing
        Library with meaningful code coverage averaging around 80%.
      </p>
      <p>
        The project underwent multiple rounds of UX reviews, including A/B testing and several beta releases to users,
        culminating in a successful launch. The dashboard witnessed substantial growth across all aspects of the website
        with significant increases in views, clicks, and user engagement, ranging from 325% to 9564% over a 90 day
        period.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-6">
        <Link animate href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <CardIcon icon={SiVuedotjs} title="Vue.js" className={clsx(`bg-[#4FC08D]`, baseIconCardClass)} />
        </Link>

        <Link animate href="https://nuxt.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <CardIcon icon={SiNuxtdotjs} title="Nuxt.js" className={clsx(`bg-[#00DC82]`, baseIconCardClass)} />
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

        <Link
          animate
          href="https://getbootstrap.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <CardIcon icon={SiBootstrap} title="Bootstrap" className={clsx(`bg-[#7952B3]`, baseIconCardClass)} />
        </Link>

        <Link
          animate
          href="https://sass-lang.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <CardIcon icon={SiSass} title="Sass" className={clsx(`bg-[#CD6799]`, baseIconCardClass)} />
        </Link>

        <Link
          animate
          href="https://graphql.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <CardIcon icon={SiGraphql} title="GraphQL" className={clsx(`bg-[#E535AB]`, baseIconCardClass)} />
        </Link>

        <Link animate href="https://vitest.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <CardIcon icon={SiVitest} title="Vitest" className={clsx(`bg-[#6E9F18]`, baseIconCardClass)} />
        </Link>

        <Link
          animate
          href="https://testing-library.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <CardIcon icon={SiTestinglibrary} title="Testing Lib" className={clsx(`bg-[#E33332]`, baseIconCardClass)} />
        </Link>

        <Link animate href="https://mswjs.io/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <CardIcon icon={SiMockserviceworker} title="MSW" className={clsx(`bg-[#FF6A33]`, baseIconCardClass)} />
        </Link>

        <Link animate href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <CardIcon icon={SiNodedotjs} title="Node.js" className={clsx(`bg-[#5FA04E]`, baseIconCardClass)} />
        </Link>

        <Link
          animate
          href="https://storybook.js.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <CardIcon icon={SiStorybook} title="Storybook" className={clsx(`bg-[#FF4785]`, baseIconCardClass)} />
        </Link>

        <Link animate href="https://docker.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <CardIcon icon={SiDocker} title="Docker" className={clsx(`bg-[#2496ED]`, baseIconCardClass)} />
        </Link>
      </div>
    </>
  );
};
