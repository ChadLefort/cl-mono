import { FC } from 'react';
import { tv } from 'tailwind-variants';
import clsx from 'clsx';

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
      lg: 'h-52 w-52',
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
    <div className="relative">
      <div
        className={clsx(
          avatar({ size: props.size, withBorder: props.withBorder }),
          'absolute z-10 -translate-x-1 -translate-y-1'
        )}
      >
        <img
          src={props.src}
          alt="Avatar"
          {...props.imgProps}
          className={clsx('h-full w-full object-cover', props.imgProps?.className)}
        />
      </div>

      <div className={clsx(avatar({ size: props.size, withBorder: props.withBorder }), 'z-0 blur-lg')}>
        <img
          src={props.src}
          alt="Avatar"
          {...props.imgProps}
          className={clsx('h-full w-full object-cover', props.imgProps?.className)}
        />
      </div>
    </div>
  );
};
