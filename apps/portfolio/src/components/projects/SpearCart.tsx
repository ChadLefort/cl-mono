import { CardIcon, Link } from '@chadlefort/ui';
import {
  SiBootstrap,
  SiDocker,
  SiLaravel,
  SiMockserviceworker,
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

export const SpearCart: FC = () => {
  const baseIconCardClass = 'flex justify-center items-center px-0 py-3 w-20 min-h-20';

  return (
    <>
      <h3 className="text-xl font-bold">Spear Education Cart</h3>
      <p className="mb-6 text-sm">Aug 2023 - Feb 2024</p>

      <p className="mb-3">
        Built and architected a new mobile-first cart for an education SaaS platform tailored to dentists and their
        practices. This project revitalized the cart by enhancing user experience, reducing friction points, and
        introducing promotional code functionality which exceeded new membership signup goals by 25%. This cart was
        specifically designed to accommodate various cart types including memberships, campus events, and future
        offerings. Previously, different areas of the education platform had their own separate carts, but the primary
        goal of this project was to introduce a new redesign and consolidate them into a single cohesive solution.
      </p>
      <p className="mb-3">
        The application was developed using Vue, Nuxt, Typescript, and Bootstrap, with Laravel serving as the backend
        REST API. It also made use of Vue's composable API, VeeValidate to handle form validation, and incorporated
        client-side mocks using Mock Service Worker. Extensive code coverage was ensured through unit tests written with
        Vue Testing Library with meaningful code coverage averaging around 80%.
      </p>
      <p>
        While the project might change in the future, you can check out the{' '}
        <Link variant="secondary" href="https://signup.speareducation.com/" target="_blank" rel="noopener noreferrer">
          Spear Cart
        </Link>{' '}
        to see the current version. Please be mindful that the website is a live production version.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-6">
        <Link animate href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <CardIcon icon={SiVuedotjs} title="Vue.js" className={clsx(`bg-[#4FC08D]`, baseIconCardClass)} />
        </Link>

        <Link animate href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <CardIcon icon={SiNuxtdotjs} title="Nuxt.js" className={clsx(`bg-[#00DC82]`, baseIconCardClass)} />
        </Link>

        <Link
          animate
          href="https://www.typescriptlang.org/"
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

        <Link
          animate
          href="https://storybook.js.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <CardIcon icon={SiStorybook} title="Storybook" className={clsx(`bg-[#FF4785]`, baseIconCardClass)} />
        </Link>

        <Link
          animate
          href="https://laravel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <CardIcon icon={SiLaravel} title="Laravel" className={clsx(`bg-[#FF2D20]`, baseIconCardClass)} />
        </Link>

        <Link animate href="https://docker.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <CardIcon icon={SiDocker} title="Docker" className={clsx(`bg-[#2496ED]`, baseIconCardClass)} />
        </Link>
      </div>
    </>
  );
};
