import type { FC } from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { tv } from 'tailwind-variants';

import type { Icon } from './Button';
import { focusRing } from '../utils';

type CardProps = {
  children?: React.ReactNode;
  className?: string;
  icon: Icon;
  title?: string;
  animate?: boolean;
};

const cardIcon = tv({
  extend: focusRing,
  base: 'shadow-primary/40 rounded-2xl p-6 shadow-lg',
});

export const CardIcon: FC<CardProps> = ({ children, className, icon, title }) => {
  const Icon = icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={clsx(cardIcon(), className)}
    >
      {!isHovered && <Icon className="size-8" />}
      {isHovered && title && <h1 className="text-xs font-semibold">{title}</h1>}
      {children}
    </motion.div>
  );
};
