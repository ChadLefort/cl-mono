import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';
import { Card } from './Card';

const meta: Meta<typeof Popover> = {
  title: 'Popover',
  component: Popover,
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
      <Popover {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Popover>;

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
        <p className="mt-6">Popover content</p>
      </Card>
    ),
  },
};
