import type { FC } from 'react';
import type { LinkProps as RACLinkProps } from 'react-aria-components';
import { composeRenderProps, Link as RACLink } from 'react-aria-components';
import type { MotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { tv } from 'tailwind-variants';

import { focusRing } from '../utils';

export type LinkProps = {
  variant?: 'primary' | 'secondary';
  animated?: boolean;
};

const link = tv({
  extend: focusRing,
  base: 'text-white duration-200 ease-in-out dark:hover:dark:text-slate-700',
  variants: {
    variant: {
      primary: 'hover:text-primary dark:hover:text-slate-700',
      secondary: 'dark:hover:text-primary hover:text-slate-400',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

const AnimatedLink = motion(RACLink);

export const Link: FC<LinkProps & RACLinkProps & MotionProps> = (props) => {
  return props.animated ? (
    <AnimatedLink
      {...props}
      whileHover={{ scale: !props.isDisabled ? 1.4 : undefined }}
      whileTap={{ scale: !props.isDisabled ? 0.8 : undefined }}
      className={composeRenderProps(props.className, (className, renderProps) =>
        link({ ...renderProps, variant: props.variant, className })
      )}
    />
  ) : (
    <RACLink
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        link({ ...renderProps, variant: props.variant, className })
      )}
    />
  );
};
