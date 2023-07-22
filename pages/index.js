import Image from "next/image";

import PariticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

import { motion } from "framer-motion";

import { fadeIn } from '../variants';
import Link from "next/link";

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
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
            <Link href={'/work'} className='border rounded-lg border-white/50
            p-3 flex my-auto'>Portfolio</Link>
            <button className='btn rounded-lg border border-white/50 px-3'>Download CV</button>
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
