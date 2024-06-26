import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import ReactDOM from 'react-dom';

import { Button } from './Button';

type ChildrenFunction = ({ setSelected }: { setSelected: (selected: boolean) => void }) => React.ReactNode;

type PopoutProps = {
  id: string;
  renderPopoverContent: () => React.ReactNode;
  children: React.ReactNode | ChildrenFunction;
  showCloseButton?: boolean;
};

export const Popout: FC<PopoutProps> = ({ id, children, renderPopoverContent, showCloseButton }) => {
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
      <motion.div
        className="focus-visible cursor-pointer"
        layoutId={`card-container-${id}`}
        onClick={() => setSelected(true)}
        onKeyDown={(e) => e.key === 'Enter' && setSelected(true)}
        key={id}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        {typeof children === 'function' ? (children as ChildrenFunction)({ setSelected }) : children}
      </motion.div>

      <PopoverContent id={id} selected={selected} setSelected={setSelected} showCloseButton={showCloseButton}>
        {renderPopoverContent()}
      </PopoverContent>
    </>
  );
};

type PopoutContentProps = {
  id: string;
  selected: boolean;
  setSelected: (selected: boolean) => void;
  children: React.ReactNode;
  showCloseButton?: boolean;
};

const PopoverContent: FC<PopoutContentProps> = ({ id, selected, setSelected, children, showCloseButton }) => {
  const handleClose = () => setSelected(false);

  return ReactDOM.createPortal(
    <AnimatePresence>
      {selected && (
        <motion.div
          className="fixed inset-0 z-[100] block overflow-y-scroll bg-black bg-opacity-75 p-0 md:flex md:justify-center md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <div className="relative m-auto">
            <motion.div
              className="max-w-auto mx-auto max-w-7xl"
              layoutId={`card-container-${id}`}
              key={id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {showCloseButton && (
                <Button variant="ghost" onPress={handleClose} className="absolute right-0 top-0">
                  <XMarkIcon className="size-6" />
                </Button>
              )}
              {children}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
