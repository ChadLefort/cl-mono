import { composeRenderProps, Button as RACButton, ButtonProps as RACButtonProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { FC } from 'react';

import { focusRing } from '../utils';

export interface ButtonProps extends RACButtonProps {
  variant?: 'primary' | 'secondary';
}

const button = tv({
  extend: focusRing,
  base: 'cursor-pointer rounded-2xl p-5 text-center text-sm font-semibold shadow-lg transition',
  variants: {
    variant: {
      primary: 'pressed:bg-slate-800 bg-primary text-white hover:bg-slate-700',
      secondary:
        'pressed:bg-gray-300 dark:pressed:bg-zinc-400 bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-500',
    },
    isDisabled: {
      true: 'border-black/5 bg-gray-100 text-gray-300 dark:border-white/5 dark:bg-zinc-800 dark:text-zinc-600 forced-colors:text-[GrayText]',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export const Button: FC<ButtonProps> = (props) => {
  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        button({ ...renderProps, variant: props.variant, className })
      )}
    />
  );
};
