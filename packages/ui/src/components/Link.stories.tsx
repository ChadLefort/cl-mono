import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    href: 'https://github.com/ChadLefort',
    variant: 'primary',
    children: 'Github',
  },
};

export const Secondary: Story = {
  args: {
    href: 'https://github.com/ChadLefort',
    variant: 'secondary',
    children: 'Github',
  },
};
