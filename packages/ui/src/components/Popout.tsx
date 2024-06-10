import type { FC, HTMLAttributes } from 'react';
import { useRef } from 'react';
import type { MotionProps } from 'framer-motion';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Overlay, useDialog, useModalOverlay, useOverlayTrigger } from 'react-aria';
import { type OverlayTriggerState, useOverlayTriggerState } from 'react-stately';
import type { DialogProps } from 'react-aria-components';

import { Button } from './Button';

type ChildrenFunction = (close: () => void) => React.ReactNode;

type PopoutTriggerProps = {
  id: string;
  children: React.ReactNode | ChildrenFunction;
  showCloseButton?: boolean;
  isDismissable?: boolean;
  renderTrigger: () => React.ReactNode;
};

export const PopoutTrigger: FC<PopoutTriggerProps> = ({
  id,
  children,
  showCloseButton,
  isDismissable = true,
  renderTrigger,
}) => {
  const state = useOverlayTriggerState({});
  const { triggerProps } = useOverlayTrigger({ type: 'dialog' }, state);

  return (
    <>
      <Button
        {...triggerProps}
        layoutId={`popout-${id}`}
        variant="ghost"
        className="p-0"
        transition={{ ease: 'backOut' }}
      >
        {renderTrigger()}
      </Button>

      <AnimatePresence mode="wait">
        {state.isOpen && (
          <Overlay>
            <PopoverOverlay id={id} showCloseButton={showCloseButton} isDismissable={isDismissable} state={state}>
              {typeof children === 'function' ? (children as ChildrenFunction)(state.close) : children}
            </PopoverOverlay>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

type PopContentWrapperProps = {
  children: React.ReactNode;
} & DialogProps;

const PopContentWrapper: FC<PopContentWrapperProps> = ({ children, ...props }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const { dialogProps } = useDialog(props, dialogRef);

  return (
    <div {...dialogProps} ref={dialogRef} className="outline-none">
      {children}
    </div>
  );
};

type PopoutOverlayProps = {
  id: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
  isDismissable?: boolean;
  state: OverlayTriggerState;
};

const PopoverOverlay: FC<PopoutOverlayProps> = ({ id, children, showCloseButton, isDismissable, state }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { modalProps, underlayProps } = useModalOverlay(
    { isDismissable, isKeyboardDismissDisabled: false },
    state,
    modalRef
  );

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        {...(underlayProps as HTMLAttributes<HTMLElement> & MotionProps)}
        className="fixed inset-0 z-[100] block overflow-y-scroll bg-black/[50%] p-0 backdrop-blur-lg md:flex md:justify-center md:p-6"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="relative m-auto">
          <m.div
            {...(modalProps as HTMLAttributes<HTMLElement> & MotionProps)}
            className="max-w-auto mx-auto max-w-3xl"
            layoutId={`popout-${id}`}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            ref={modalRef}
          >
            <PopContentWrapper>
              {showCloseButton && (
                <Button variant="ghost" onPress={() => state.close()} className="absolute right-2 top-2">
                  <XMarkIcon className="size-6" />
                </Button>
              )}

              {children}
            </PopContentWrapper>
          </m.div>
        </div>
      </m.div>
    </LazyMotion>
  );
};
