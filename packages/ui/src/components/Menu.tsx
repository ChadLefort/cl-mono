import type { FC } from 'react';
import type { LinkProps as RACLinkProps } from 'react-aria-components';
import type { MotionProps } from 'framer-motion';

import type { LinkProps } from './Link';
import { Link } from './Link';

type MenuItemProps = LinkProps & RACLinkProps & MotionProps;

const MenuItem: FC<MenuItemProps> = (props) => {
  return <Link {...props} variant="secondary" />;
};

type MenuProps = {
  children: React.ReactNode;
};

export const Menu: FC<MenuProps> & { Item: FC<MenuItemProps> } = ({ children }) => {
  return (
    <nav className="shadow-primary/40 bg-primary flex h-16 w-full items-center justify-center px-9 shadow-lg dark:bg-slate-700">
      <div className="hidden h-full items-center space-x-6 text-sm font-semibold text-white md:flex">{children}</div>
    </nav>
  );
};

Menu.Item = MenuItem;
