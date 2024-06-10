import type { Meta, StoryObj } from '@storybook/react';

import { PopoutTrigger } from './Popout';
import { Card } from './Card';

const meta: Meta<typeof PopoutTrigger> = {
  title: 'Popout',
  component: PopoutTrigger,
  argTypes: {
    showCloseButton: {
      control: 'boolean',
    },
  },
  args: {
    showCloseButton: false,
  },
  render: (args) => (
    <div className="flex h-screen items-center justify-center">
      <PopoutTrigger {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof PopoutTrigger>;

export const Default: Story = {
  args: {
    id: '1',
    children: (
      <Card className="p-6">
        <h2 className="mb-3 text-lg">Ullamco Veniam</h2>
        <p className="mb-3">
          Ullamco veniam in deserunt cupidatat dolore proident non occaecat ipsum fugiat proident quis dolor. Sit sint
          elit aliquip commodo qui sunt nulla et pariatur tempor dolore pariatur consequat. Ut eu nisi do. Ut commodo
          cillum non qui. Laborum qui adipisicing exercitation dolore tempor adipisicing do aliquip ullamco laborum.
        </p>
        <p>
          Nisi dolore commodo incididunt voluptate quis ex reprehenderit aliqua amet dolor. Eu cillum reprehenderit
          dolor nulla consequat voluptate tempor magna id ea anim dolor est magna. Est magna velit officia mollit
          excepteur ex veniam enim aute minim enim. Officia veniam Lorem pariatur mollit sunt exercitation consectetur
          culpa.
        </p>
      </Card>
    ),
    renderTrigger: () => <Card className="p-6">Ullamco Veniam</Card>,
  },
};

export const WithCloseButton: Story = {
  args: {
    id: '1',
    children: (
      <Card className="p-6">
        <h2 className="mb-3 text-lg">Ullamco Veniam</h2>
        <p className="mb-3">
          Ullamco veniam in deserunt cupidatat dolore proident non occaecat ipsum fugiat proident quis dolor. Sit sint
          elit aliquip commodo qui sunt nulla et pariatur tempor dolore pariatur consequat. Ut eu nisi do. Ut commodo
          cillum non qui. Laborum qui adipisicing exercitation dolore tempor adipisicing do aliquip ullamco laborum.
        </p>
        <p>
          Nisi dolore commodo incididunt voluptate quis ex reprehenderit aliqua amet dolor. Eu cillum reprehenderit
          dolor nulla consequat voluptate tempor magna id ea anim dolor est magna. Est magna velit officia mollit
          excepteur ex veniam enim aute minim enim. Officia veniam Lorem pariatur mollit sunt exercitation consectetur
          culpa.
        </p>
      </Card>
    ),
    showCloseButton: true,
    renderTrigger: () => <Card className="p-6">Ullamco Veniam</Card>,
  },
};
