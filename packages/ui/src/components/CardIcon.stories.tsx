import type { Meta, StoryObj } from '@storybook/react';
import { SiReact } from '@icons-pack/react-simple-icons';

import { CardIcon } from './CardIcon';

const meta: Meta<typeof CardIcon> = {
  title: 'CardIcon',
  component: CardIcon,
  args: {},
};

export default meta;
type Story = StoryObj<typeof CardIcon>;

export const Default: Story = {
  args: {
    icon: SiReact,
    title: 'React',
    className: `bg-[#61DAFB] flex justify-center items-center px-0 py-3 w-20 min-h-20 text-white`,
  },
};
