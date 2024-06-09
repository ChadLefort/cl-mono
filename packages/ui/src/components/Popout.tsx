import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import ReactDOM from 'react-dom';
import { FocusScope, OverlayContainer } from 'react-aria';

import { Button } from './Button';

type PopoutProps = {
  id: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
  isDismissable?: boolean;
  renderPopoverContent: () => React.ReactNode;
};

export const Popout: FC<PopoutProps> = ({
  id,
  children,
  showCloseButton,
  isDismissable = true,
  renderPopoverContent,
}) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelected(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <Button
        layoutId={`popout-${id}`}
        variant="ghost"
        className="p-0"
        onPress={() => setSelected(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </Button>

      <OverlayContainer>
        <PopoverContent
          id={id}
          selected={selected}
          setSelected={setSelected}
          showCloseButton={showCloseButton}
          isDismissable={isDismissable}
        >
          {renderPopoverContent()}
        </PopoverContent>
      </OverlayContainer>
    </>
  );
};

type PopoutContentProps = {
  id: string;
  selected: boolean;
  children: React.ReactNode;
  showCloseButton?: boolean;
  isDismissable?: boolean;
  setSelected: (selected: boolean) => void;
};

const PopoverContent: FC<PopoutContentProps> = ({
  id,
  selected,
  children,
  showCloseButton,
  isDismissable,
  setSelected,
}) => {
  const handleClose = () => setSelected(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelected(false);
      }
    };

    if (selected && isDismissable) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDismissable, selected, setSelected]);

  return ReactDOM.createPortal(
    <AnimatePresence>
      {selected && (
        <motion.div
          className="fixed inset-0 z-[100] block overflow-y-scroll bg-black/[50%] p-0 backdrop-blur-lg md:flex md:justify-center md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative m-auto">
            <motion.div
              className="max-w-auto mx-auto max-w-7xl"
              layoutId={`popout-${id}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              ref={modalRef}
            >
              <FocusScope contain restoreFocus autoFocus>
                {showCloseButton && (
                  <Button variant="ghost" onPress={handleClose} className="absolute right-0 top-0">
                    <XMarkIcon className="size-6" />
                  </Button>
                )}
                {children}
              </FocusScope>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
