import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div className="text-white">
        <h1 className="text-2xl font-semibold">Card Title</h1>
        <p className="mt-2">Card Description</p>
      </div>
    ),
  },
};
