import type { Meta, StoryObj } from '@storybook/react';

import { Terminal } from './Terminal';

const meta: Meta<typeof Terminal> = {
  title: 'Terminal',
  component: Terminal,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Terminal>;

export const Default: Story = {
  args: {
    textCommand: './chad-lefort.sh',
    onCommandComplete: (
      <div className="text-white">
        <div className="mb-3 font-mono">
          &gt; Hello, I'm Chad, a senior frontend engineer from Mandeville, Louisiana with 11+ years of development
          experience.
        </div>
        <div className="mb-3 font-mono">
          &gt; Shortly after I was given my first computer, I developed a strong passion for programming.
        </div>
        <div className="mb-3 font-mono">
          &gt; I'm constantly furthering my skills to keep up with the ever changing demand the web has.
        </div>
        <div className="mb-3 font-mono">
          &gt; I enjoy the feeling of accomplishment when programming, and I take pride in writing maintainable and
          efficient code.
        </div>
        <div className="mb-3 font-mono">
          &gt; Committed to team success, I prioritize delivering exceptional products that provide an outstanding user
          experience.
        </div>
      </div>
    ),
  },
};
