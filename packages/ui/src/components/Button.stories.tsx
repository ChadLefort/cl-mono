import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { sizes } from '../utils/sizes';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive'],
    },
  },
  args: {
    isDisabled: false,
    children: 'Button',
  },
  render: (args) => (
    <>
      {sizes.map((size) => (
        <div className="mb-3">
          <Button key={size} {...args} size={size} />
        </div>
      ))}
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};
