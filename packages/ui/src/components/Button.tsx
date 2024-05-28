import { composeRenderProps, Button as RACButton, ButtonProps as RACButtonProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { FC } from 'react';
import { AnimatePresence, domAnimation, LazyMotion, motion, MotionProps } from 'framer-motion';

import { focusRing } from '../utils';

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
};

const button = tv({
  extend: focusRing,
  base: 'cursor-pointer rounded-2xl text-center font-semibold shadow-lg transition',
  variants: {
    variant: {
      primary: 'pressed:bg-slate-400 bg-slate-700 text-white hover:bg-slate-600',
      secondary: ' pressed:bg-zinc-400 bg-zinc-700 text-zinc-100 hover:bg-zinc-600',
      destructive: 'pressed:bg-red-400 bg-red-700 text-white hover:bg-red-600',
    },
    size: {
      sm: 'rounded-xl p-3 text-xs',
      md: 'p-4 text-sm',
      lg: 'p-5 text-lg',
    },
    isDisabled: {
      true: 'cursor-not-allowed border-white/5 bg-zinc-800 text-zinc-600 forced-colors:text-[GrayText]',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

const AnimatedButton = motion(RACButton);

export const Button: FC<ButtonProps & RACButtonProps & MotionProps> = (props) => {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        <AnimatedButton
          {...props}
          whileHover={{ scale: !props.isDisabled ? 1.1 : undefined }}
          whileTap={{ scale: !props.isDisabled ? 0.9 : undefined }}
          className={composeRenderProps(props.className, (className, renderProps) =>
            button({ ...renderProps, variant: props.variant, size: props.size, className })
          )}
        />
      </AnimatePresence>
    </LazyMotion>
  );
};
