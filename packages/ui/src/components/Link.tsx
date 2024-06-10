import type { FC } from 'react';
import type { LinkProps as RACLinkProps } from 'react-aria-components';
import { composeRenderProps, Link as RACLink } from 'react-aria-components';
import type { MotionProps } from 'framer-motion';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import { tv } from 'tailwind-variants';

import { focusRing } from '../utils';

export type LinkProps = {
  variant?: 'primary' | 'secondary';
  animate?: boolean;
} & RACLinkProps &
  Omit<MotionProps, 'animate'>;

const link = tv({
  extend: focusRing,
  base: 'text-white ease-in-out dark:hover:dark:text-slate-700',
  variants: {
    variant: {
      primary: 'hover:text-primary dark:hover:text-slate-700',
      secondary: 'dark:hover:text-primary text-slate-400 hover:text-slate-300',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

const AnimatedLink = m(RACLink);

export const Link: FC<LinkProps> = (props) => {
  return props.animate ? (
    <LazyMotion features={domAnimation}>
      <AnimatedLink
        {...props}
        whileHover={{ scale: !props.isDisabled ? 1.2 : undefined }}
        whileTap={{ scale: !props.isDisabled ? 0.8 : undefined }}
        className={composeRenderProps(props.className, (className, renderProps) =>
          link({ ...renderProps, variant: props.variant, className })
        )}
      />
    </LazyMotion>
  ) : (
    <RACLink
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        link({ ...renderProps, variant: props.variant, className })
      )}
    />
  );
};
