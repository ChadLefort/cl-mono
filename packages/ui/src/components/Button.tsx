import type { ButtonProps as RACButtonProps } from 'react-aria-components';
import { composeRenderProps, Button as RACButton } from 'react-aria-components';
import { tv } from 'tailwind-variants';
import type { FC, PropsWithoutRef, RefAttributes, SVGProps } from 'react';
import type { MotionProps } from 'framer-motion';
import { domMax, LazyMotion, m } from 'framer-motion';
import clsx from 'clsx';

import { focusRing } from '../utils';

export type Icon = React.ForwardRefExoticComponent<
  PropsWithoutRef<SVGProps<SVGSVGElement>> & {
    title?: string;
    titleId?: string;
  } & RefAttributes<SVGSVGElement>
>;

type IconProps = {
  children: React.ReactNode;
  icon: Icon;
  iconPosition?: 'left' | 'right';
};

export const Icon: FC<IconProps> = ({ icon, iconPosition, children }) => {
  const Icon = icon;

  return (
    <div className={clsx('flex items-center', iconPosition === 'right' && 'flex-row-reverse')}>
      <Icon className="size-5" />
      <span className={iconPosition === 'right' ? 'me-2' : 'ms-2'}>{children}</span>
    </div>
  );
};

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: Icon;
  iconPosition?: 'left' | 'right';
} & RACButtonProps &
  MotionProps;

const button = tv({
  extend: focusRing,
  base: 'shadow-primary/40 bg-primary text-primary-foregroundtransition cursor-pointer rounded-2xl text-center font-semibold shadow-lg',
  variants: {
    variant: {
      primary: 'pressed:bg-slate-400 bg-primary text-white hover:bg-slate-600 dark:bg-slate-700',
      secondary: 'pressed:bg-zinc-400 bg-zinc-700 text-zinc-100 hover:bg-zinc-600',
      destructive: 'pressed:bg-red-400 bg-red-700 text-white hover:bg-red-600',
      ghost: 'text-primary-foregroundtransition bg-transparent text-white shadow-none',
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

const AnimatedButton = m(RACButton);

export const Button: FC<ButtonProps> = (props) => {
  return (
    <LazyMotion features={domMax}>
      <AnimatedButton
        {...props}
        whileHover={{ scale: !props.isDisabled ? 1.1 : undefined }}
        whileTap={{ scale: !props.isDisabled ? 0.9 : undefined }}
        className={composeRenderProps(props.className, (className, renderProps) =>
          button({ ...renderProps, variant: props.variant, size: props.size, className })
        )}
      >
        {props.icon ? (
          <Icon icon={props.icon} iconPosition={props.iconPosition}>
            {props.children as React.ReactNode}
          </Icon>
        ) : (
          props.children
        )}
      </AnimatedButton>
    </LazyMotion>
  );
};
