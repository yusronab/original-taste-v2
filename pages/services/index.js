import { } from 'react-icons/rx';

export const serviceData = [];

import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Cirles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Head from 'next/head';

const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex flex-center'>
      <Head>
        <title>Services - Yusron Arly</title>
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
              My service <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'
            >
              Explore our comprehensive list of services and let us assist you in achieving
              your goals effectively and efficiently.
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
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
