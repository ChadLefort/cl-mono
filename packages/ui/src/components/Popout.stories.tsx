import type { Meta, StoryObj } from '@storybook/react';

import { Popout } from './Popout';
import { Card } from './Card';

const meta: Meta<typeof Popout> = {
  title: 'Popout',
  component: Popout,
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
      <Popout {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Popout>;

export const Default: Story = {
  args: {
    id: '1',
    children: <Card className="p-6">Click me</Card>,
    renderPopoverContent: () => <Card className="p-6">Popover content</Card>,
  },
};

export const WithCloseButton: Story = {
  args: {
    id: '1',
    children: <Card className="p-6">Click me</Card>,
    showCloseButton: true,
    renderPopoverContent: () => (
      <Card className="p-6">
        <p className="mt-6">Popout content</p>
      </Card>
    ),
  },
};
