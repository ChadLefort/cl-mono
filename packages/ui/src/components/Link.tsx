import { FC } from 'react';
import { composeRenderProps, Link as RACLink, LinkProps as RACLinkProps } from 'react-aria-components';
import { motion, MotionProps } from 'framer-motion';
import { tv } from 'tailwind-variants';

import { focusRing } from '../utils';

type LinkProps = {
  variant?: 'primary' | 'secondary';
  animated?: boolean;
};

const link = tv({
  extend: focusRing,
  base: 'text-white duration-200 ease-in-out dark:hover:dark:text-slate-700',
  variants: {
    variant: {
      primary: 'hover:text-primary dark:hover:dark:text-slate-700',
      secondary: 'hover:text-slate-400 dark:hover:dark:text-slate-700',
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
