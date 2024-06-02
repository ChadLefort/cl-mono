import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Menu.Item href="#experience">Experience</Menu.Item>
        <Menu.Item href="#skills">Skills</Menu.Item>
        <Menu.Item href="#projects">Projects</Menu.Item>
        <Menu.Item href="#header">About</Menu.Item>
        <Menu.Item href="#contact">Contact</Menu.Item>
      </>
    ),
  },
};
