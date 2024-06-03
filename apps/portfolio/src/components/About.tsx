import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Popover } from '@chadlefort/ui';

export const About: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-3 text-center text-3xl font-bold text-white">About</h2>
      <div className="mb-8 h-[2px] w-full bg-gradient-to-r from-transparent via-slate-300 before:to-transparent"></div>

      <div className="mb-6 flex flex-col md:flex-row">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <Popover
              key={`about-${index}`}
              id={`about-${index}`}
              renderPopoverContent={() => (
                <img src={`about/about-${index + 1}.png`} alt="Chad Lefort" className="rounded-2xl" />
              )}
            >
              <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
                <motion.img
                  variants={{
                    offscreen: {
                      y: 300,
                    },
                    onscreen: {
                      y: 0,
                      transition: {
                        type: 'spring',
                        bounce: 0.2,
                        duration: 1,
                      },
                    },
                  }}
                  src={`about/about-${index + 1}.png`}
                  alt="Chad Lefort"
                  className="m-4 max-h-44 max-w-44 rounded-2xl object-contain"
                />
              </motion.div>
            </Popover>
          ))}
      </div>

      <p className="text-center text-white">
        I've been a technology enthusiast ever since a young age. Whether it's looking at source code or computer
        hardware, I've always enjoyed tinkering around to understand how things work. Shortly after I was given my first
        computer at 11 years old, I started the journey of creating web sites and fell in love with the web and
        programming.
      </p>

      <p className="mt-8 text-center text-white">
        When I'm not programming, I enjoy taking daily walks with my wife Melanie and taking naps on the couch with my
        cat. I also enjoy skateboarding a couple of times week (even though my knees don't), riding my bike on trails,
        playing guitar, and adventuring in video games!
      </p>
    </div>
  );
};
