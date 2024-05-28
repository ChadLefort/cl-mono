import { FC } from 'react';
import { tv } from 'tailwind-variants';

type AvatarProps = {
  src: string;
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  withBorder?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const avatar = tv({
  base: 'overflow-hidden rounded-full shadow-lg',
  variants: {
    size: {
      sm: 'h-20 w-20',
      md: 'h-40 w-40',
      lg: 'h-64 w-64',
    },
    withBorder: {
      true: 'border-4 border-white',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const Avatar: FC<AvatarProps> = (props) => {
  return (
    <div className={avatar({ size: props.size, withBorder: props.withBorder })}>
      <img src={props.src} className="h-full w-full object-cover" alt="Avatar" {...props.imgProps} />
    </div>
  );
};
