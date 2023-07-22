import PariticlesContainer from '../components/ParticlesContainer';
import Avatar from '../components/Avatar';

import { motion } from "framer-motion";

import { fadeIn } from '../variants';
import CustomBtn from "../components/CustomBtn";
import Head from "next/head";

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      <Head>
        <title>Yusron Arly</title>
      </Head>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full
        container mx-auto'>
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h1'>
            Full-stack <br />Web{' '}
            <span className='text-accent'>Developer</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
          >
            I am a student at Politeknik Harapan Bersama and a full-stack web developer.
            My passion in creating dynamic and interactive website applications for
            enhance user experiences.
          </motion.p>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='flex justify-center gap-x-2 lg:justify-start z-10'
          >
            <CustomBtn
              href="/work"
              text="Portfolio"
            />
            <CustomBtn
              href="/cv.pdf"
              text="Download CV"
              download="cv"
            />
          </motion.div>
        </div>
      </div>
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat
        w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        <div>
          <PariticlesContainer />
        </div>
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className='absolute -bottom-32 lg:bottom-0 lg:right-[14%]'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
