import { FC, useState } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

type CommandTextProps = {
  textCommand: string;
  delay?: number;
};

const CursorBlinker: FC = () => {
  return (
    <motion.div
      variants={{
        blinking: {
          opacity: [0, 0, 1, 1],
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
            ease: 'linear',
            times: [0, 0.5, 0.5, 1],
          },
        },
      }}
      animate="blinking"
      className="inline-block h-5 w-[3px] translate-y-1 bg-slate-300"
    />
  );
};

const CommandText: FC<CommandTextProps> = ({ textCommand, delay = 0 }) => {
  const textIndex = useMotionValue(0);
  const baseText = useTransform(textIndex, () => textCommand);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => baseText.get().slice(0, latest));

  useEffect(() => {
    animate(count, 60, {
      type: 'tween',
      delay: delay,
      duration: 3,
      ease: 'easeIn',
    });
  }, [count, delay]);

  return (
    <motion.span whileInView="visible" className="inline font-mono">
      {displayText}
    </motion.span>
  );
};

type TerminalProps = {
  textCommand: string;
  onCommandComplete: React.ReactNode;
  delay?: number;
};

export const Terminal: FC<TerminalProps> = ({ textCommand, onCommandComplete, delay = 0 }) => {
  const [complete, setComplete] = useState(false);
  const count = useMotionValue(0);

  useEffect(() => {
    const controls = animate(count, textCommand.length, {
      type: 'tween',
      delay,
      duration: 2,
      ease: 'easeInOut',
      onComplete: () => setComplete(true),
    });

    return controls.stop;
  }, [textCommand.length, count, delay]);

  return (
    <div className="bg-primary shadow-primary/40 text-primary-foreground flex min-h-80 w-full flex-col rounded-2xl shadow-lg">
      <div className="bg-dark-pro flex items-center rounded-tl-2xl rounded-tr-2xl px-6 py-4 dark:bg-slate-700">
        <div className="flex items-center">
          <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
          <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
      </div>

      <div className="px-6 py-4 text-white">
        <div className="mb-3">
          <CommandText textCommand={textCommand} delay={delay} />
          {!complete && <CursorBlinker />}
        </div>
        {complete && (
          <>
            {onCommandComplete}
            <CursorBlinker />
          </>
        )}
      </div>
    </div>
  );
};
