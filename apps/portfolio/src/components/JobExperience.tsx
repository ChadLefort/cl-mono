import { Timeline } from '@chadlefort/ui';
import { FC } from 'react';

export const JobExperience: FC = () => {
  return (
    <>
      <h2 className="mb-3 text-center text-3xl font-bold text-white">Experience</h2>
      <div className="mb-8 h-[2px] w-full bg-gradient-to-r from-transparent via-slate-300 before:to-transparent"></div>
      <Timeline>
        <Timeline.Item title="Aperture Education" date="April 2024 - Present">
          <li>
            Currently developing a K-12 student assessment platform focusing on social and emotional learning,
            leveraging React, TypeScript, Zustand, and TanStack Query.
          </li>
        </Timeline.Item>

        <Timeline.Item title="CDIT" date="December 2020 - April 2024">
          <li>
            Built and architected a new mobile first dashboard, membership cart, and a live instructor-guided online
            education SaaS platform for dentist and their practices using Vue 3, TypeScript, Nuxt, and GraphQL.
            Extensive testing was done with Vitest, Vue Testing Library, and Cypress with meaningful code coverage
            averaging around 80%.
          </li>
          <li>
            In less than 2 years, launched 3 major high-impact projects that set speed and quality standards for the
            development team and brought measurable success for a client.
          </li>
          <li>
            Revitalized a registration cart by enhancing user experience, reducing friction points, and introducing
            promotional code functionality which exceeded new membership signup goals by 25%.
          </li>
          <li>
            Helped build a new platform in React for a VOIP SaaS and migrated modules from NPM packages to Webpack
            Module Federation to allow for a better Microfrontend architecture. This improvement helped with challenges
            such as application updates, deployments, and reduced the number of pull requests needed from 5 to 1.
          </li>
        </Timeline.Item>

        <Timeline.Item title="Veriforce" date="July 2017 - December 2020">
          <li>
            Architected several projects in React, Redux, TypeScript, and Material-UI and wrote unit tests with Jest and
            React Testing Library for a contractor management SaaS platform.
          </li>
          <li>
            Saved hours of manual deployment time by creating a monorepo with Lerna for 17 React projects and 6 NPM
            packages leading to cost efficiency and improved productivity for a team of 7 frontend developers.
          </li>
          <li>
            Oversaw and mentored a team of 5 frontend developers to complete 3 major revenue-growing projects ahead of
            schedule by having pair programming sessions and code reviews regularly.
          </li>
          <li>
            Advocated for UI and code consistency by creating design patterns and managing dependency upgrades,
            enhancing app stability and user experience.
          </li>
          <li>
            Collaborated with backend engineers on API design so REST endpoints were scalable to support multiple
            microservices and frontend applications.
          </li>
          <li>
            Migrated existing React projects to TypeScript which laid out the structure and configuration for future
            React projects.
          </li>
        </Timeline.Item>

        <Timeline.Item title="Netchex" date="November 2014 – July 2017">
          <li>
            Developed applications using domain driven design with C# for REST APIs and created single page applications
            using AngularJS, TypeScript, and Bootstrap for a payroll, benefits, and human resources SaaS platform.
          </li>
          <li>
            In 3 months led a project to build a mobile first onboarding dashboard to be released and presented at the
            company's annual client facing conference.
          </li>
          <li>
            Developed a custom reporting single page application using AngularJS for 6,000+ clients, enhancing their
            accounting and business insights.
          </li>
        </Timeline.Item>
      </Timeline>
    </>
  );
};
