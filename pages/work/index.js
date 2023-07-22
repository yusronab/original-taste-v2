import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Cirles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Link from 'next/link';
import Head from 'next/head';

const Work = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex flex-center'>
      <Head>
        <title>Project - Yusron Arly</title>
      </Head>
      <Cirles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4
          xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-8'
            >
              My project <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0 z-20'
            >
              Find all source code of my project in
              <Link
                href={'https://github.com/yusronab'}
                className='font-semibold z-20'> github repository.
              </Link>
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
