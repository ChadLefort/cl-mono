import type { FC } from 'react';
import { Button, Card, Popout } from '@chadlefort/ui';

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
        <Popout
          id={'project-spear-cart'}
          showCloseButton
          renderPopoverContent={() => (
            <Card className="rounded-none p-6 md:rounded-2xl">
              <SpearCart />
            </Card>
          )}
        >
          {({ setSelected }) => (
            <Card className="project-spear-cart flex h-52 w-full overflow-hidden md:h-72 md:w-72">
              <div className="flex flex-1 items-end">
                <div className="flex w-full items-center justify-between bg-black p-3 opacity-75">
                  <h2 className="font-semibold">Spear Cart</h2>
                  <Button variant="secondary" size="sm" className="rounded-full" onPress={() => setSelected(true)}>
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </Popout>

        <Popout
          id={'project-spear-dashboard'}
          showCloseButton
          renderPopoverContent={() => (
            <Card className="rounded-none p-6 md:rounded-2xl">
              <SpearDashboard />
            </Card>
          )}
        >
          {({ setSelected }) => (
            <Card className="project-spear-dashboard flex h-52 w-full overflow-hidden md:h-72 md:w-72">
              <div className="flex flex-1 items-end">
                <div className="flex w-full items-center justify-between bg-black p-3 opacity-75">
                  <h2 className="font-semibold">Spear Dashboard</h2>
                  <Button variant="secondary" size="sm" className="rounded-full" onPress={() => setSelected(true)}>
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </Popout>

        <Popout
          id={'project-module-federation'}
          showCloseButton
          renderPopoverContent={() => (
            <Card className="rounded-none p-6 md:rounded-2xl">
              <ModuleFederation />
            </Card>
          )}
        >
          {({ setSelected }) => (
            <Card className="project-module-federation flex h-52 w-full overflow-hidden md:h-72 md:w-72">
              <div className="flex flex-1 items-end">
                <div className="flex w-full items-center justify-between bg-black p-3 opacity-75">
                  <h2 className="font-semibold">Module Federation </h2>
                  <Button variant="secondary" size="sm" className="rounded-full" onPress={() => setSelected(true)}>
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </Popout>

        <Popout
          id={'project-lerna'}
          showCloseButton
          renderPopoverContent={() => (
            <Card className="rounded-none p-6 md:rounded-2xl">
              <Lerna />
            </Card>
          )}
        >
          {({ setSelected }) => (
            <Card className="project-lerna flex h-52 w-full overflow-hidden md:h-72 md:w-72">
              <div className="flex flex-1 items-end">
                <div className="flex w-full items-center justify-between bg-black p-3 opacity-75">
                  <h2 className="font-semibold">Lerna Monorepo</h2>
                  <Button variant="secondary" size="sm" className="rounded-full" onPress={() => setSelected(true)}>
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </Popout>
      </div>
    </div>
  );
};
