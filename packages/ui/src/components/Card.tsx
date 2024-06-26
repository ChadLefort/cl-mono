import type { FC } from 'react';
import clsx from 'clsx';
import { tv } from 'tailwind-variants';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  header?: string;
};

const card = tv({
  base: 'shadow-primary/40 bg-primary focus-visible rounded-2xl text-white shadow-lg dark:bg-slate-700',
});

export const Card: FC<CardProps> = ({ children, className, header }) => {
  return (
    <div className={clsx(card(), className)}>
      {header && (
        <div className="bg-dark-pro flex h-12 items-center rounded-tl-2xl rounded-tr-2xl px-6 dark:bg-slate-700">
          <h3 className="text-lg font-semibold">{header}</h3>
        </div>
      )}

      {children}
    </div>
  );
};
