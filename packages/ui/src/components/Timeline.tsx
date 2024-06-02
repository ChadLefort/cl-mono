import React, { FC } from 'react';
import { motion } from 'framer-motion';

import { Card } from './Card';

const TimelineDot: FC = () => {
  return (
    <div className="mt-[30px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white bg-slate-300 text-slate-500 shadow"></div>
  );
};

type TimelineItemProps = {
  title: string;
  subtitle?: string;
  date: string;
  children: React.ReactNode;
};

const TimelineItem: FC<TimelineItemProps> = ({ title, subtitle, date, children }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="group relative flex items-start"
    >
      <TimelineDot />

      <motion.div
        variants={{
          offscreen: {
            y: 300,
          },
          onscreen: {
            y: 0,
            transition: {
              type: 'spring',
              bounce: 0.2,
              duration: 1,
            },
          },
        }}
        className="ml-6 w-full"
      >
        <Card>
          <div className="mb-1">
            <h3 className="text-lg font-bold text-gray-400">{title}</h3>
            {subtitle && <p className="text-sm font-semibold text-slate-500">{subtitle}</p>}
            <time className="text-sm font-medium text-slate-500">{date}</time>
          </div>

          <ul className="ml-4 list-outside list-disc space-y-4">{children}</ul>
        </Card>
      </motion.div>
    </motion.div>
  );
};

type TimelineProps = {
  children: React.ReactNode;
};

export const Timeline: FC<TimelineProps> & { Item: FC<TimelineItemProps> } & { Dot: FC } = ({ children }) => {
  return (
    <div className="relative space-y-6 before:absolute before:inset-0 before:ml-2 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      {children}
    </div>
  );
};

Timeline.Item = TimelineItem;
Timeline.Dot = TimelineDot;
