import { FC } from 'react';
import clsx from 'clsx';
import { tv } from 'tailwind-variants';

import { focusRing } from '../utils';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  header?: string;
};

const card = tv({
  extend: focusRing,
  base: 'shadow-primary/40 bg-primary rounded-2xl text-white shadow-lg',
});

export const Card: FC<CardProps> = ({ children, className, header }) => {
  return (
    <div className={clsx(card(), className)}>
      {header && (
        <div className="bg-dark-pro flex h-12 items-center rounded-tl-2xl rounded-tr-2xl px-6 dark:bg-slate-700">
          <h3 className="text-lg font-semibold">{header}</h3>
        </div>
      )}

      <div className="p-6">{children}</div>
    </div>
  );
};
