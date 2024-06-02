import type { Meta, StoryObj } from '@storybook/react';

import { Timeline } from './Timeline';

const meta: Meta<typeof Timeline> = {
  title: 'Timeline',
  component: Timeline,
  argTypes: {},
  args: {},
  render: (args) => (
    <div className="container">
      <Timeline {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {};
