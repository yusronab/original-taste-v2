import Link from "next/link";

import {
  RiWhatsappLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubLine,
  RiTwitterLine
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link
        href={`https://wa.me/6289675270897?text=I%20interest%20with%20your%20work,%20let's%20make%20project%20together.`}
        target="_blank"
        rel="noopener noreferrer"
        className='hover:text-accent transition-all duration-300'>
        <RiWhatsappLine />
      </Link>
      <Link
        href={'https://www.instagram.com/yusr0nab'}
        target="_blank"
        rel="noopener noreferrer"
        className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link
        href={'https://www.linkedin.com/in/yusronab'}
        target="_blank"
        rel="noopener noreferrer"
        className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link
        href={'https://www.github.com/yusronab'}
        target="_blank"
        rel="noopener noreferrer"
        className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiTwitterLine />
      </Link>
    </div>
  );
};

export default Socials;
