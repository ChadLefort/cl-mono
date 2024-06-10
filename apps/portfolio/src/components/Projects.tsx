import type { FC } from 'react';
import { Card, PopoutTrigger } from '@chadlefort/ui';

import { SpearCart } from './projects/SpearCart';
import { SpearDashboard } from './projects/SpearDashboard';
import { ModuleFederation } from './projects/ModuleFederation';
import { Lerna } from './projects/Lerna';

export const Projects: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-3 text-center text-3xl font-bold text-white">Projects</h2>
      <div className="mb-8 h-[2px] w-full bg-gradient-to-r from-transparent via-slate-300 before:to-transparent"></div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <PopoutTrigger
          id={'project-spear-cart'}
          showCloseButton
          renderTrigger={() => (
            <Card className="project-spear-cart flex h-52 w-full overflow-hidden md:h-72 md:w-72">
              <div className="flex flex-1 items-end">
                <div className="bg-primary/[50%] flex min-h-14 w-full items-center justify-between p-3 backdrop-blur-lg">
                  <h2 className="font-semibold">Spear Education Cart</h2>
                </div>
              </div>
            </Card>
          )}
        >
          <Card className="rounded-none p-6 md:rounded-2xl">
            <SpearCart />
          </Card>
        </PopoutTrigger>

        <PopoutTrigger
          id={'project-spear-dashboard'}
          showCloseButton
          renderTrigger={() => (
            <Card className="project-spear-dashboard flex h-52 w-full overflow-hidden md:h-72 md:w-72">
              <div className="flex flex-1 items-end">
                <div className="bg-primary/[50%] flex min-h-14 w-full items-center justify-between p-3 backdrop-blur-lg">
                  <h2 className="font-semibold">Spear Education Dashboard</h2>
                </div>
              </div>
            </Card>
          )}
        >
          <Card className="rounded-none p-6 md:rounded-2xl">
            <SpearDashboard />
          </Card>
        </PopoutTrigger>

        <PopoutTrigger
          id={'project-module-federation'}
          showCloseButton
          renderTrigger={() => (
            <Card className="project-module-federation flex h-52 w-full overflow-hidden md:h-72 md:w-72">
              <div className="flex flex-1 items-end">
                <div className="bg-primary/[50%] flex min-h-14 w-full items-center justify-between p-3 backdrop-blur-lg">
                  <h2 className="font-semibold">Module Federation Demo</h2>
                </div>
              </div>
            </Card>
          )}
        >
          <Card className="rounded-none p-6 md:rounded-2xl">
            <ModuleFederation />
          </Card>
        </PopoutTrigger>

        <PopoutTrigger
          id={'project-lerna'}
          showCloseButton
          renderTrigger={() => (
            <Card className="project-lerna flex h-52 w-full overflow-hidden md:h-72 md:w-72">
              <div className="flex flex-1 items-end">
                <div className="bg-primary/[50%] flex min-h-14 w-full items-center justify-between p-3 backdrop-blur-lg">
                  <h2 className="font-semibold">Lerna Monorepo Migration</h2>
                </div>
              </div>
            </Card>
          )}
        >
          <Card className="rounded-none p-6 md:rounded-2xl">
            <Lerna />
          </Card>
        </PopoutTrigger>
      </div>
    </div>
  );
};
