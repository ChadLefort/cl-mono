import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import { sizes } from '../utils/sizes';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  args: {
    withBorder: false,
  },
  render: (args) => (
    <>
      {sizes.map((size) => (
        <div className="mb-3">
          <Avatar key={size} {...args} size={size} />
        </div>
      ))}
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: 'me.png',
    imgProps: { alt: 'Chad Lefort' },
  },
};
