// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'https://suite-test-yusronab.vercel.app/',
          path: '/thumb8.jpg',
        },
        {
          title: 'https://binar-car-rental.yusronab.repl.co/',
          path: '/thumb5.jpg',
        },
        {
          title: 'https://garudanih.vercel.app/',
          path: '/thumb6.jpg',
        },
        {
          title: 'https://detikcom-yusroab.netlify.app/',
          path: '/thumb7.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'https://github.com/yusronab/Hoteloka.git',
          path: '/thumb9.jpg',
        },
        {
          title: 'https://binar-car-rental.yusronab.repl.co/',
          path: '/thumb5.jpg',
        },
        {
          title: 'https://garudanih.vercel.app/',
          path: '/thumb6.jpg',
        },
        {
          title: '/',
          path: '/thumb4.jpg',
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';
import Image from 'next/image';

import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor pointer'>
            {slide.images.map((image, index) => (
              <div key={index} className='relative rounded-lg overflow-hidden flex
              items-center justify-center group'>
                <div className='flex items-center justify-center relative overflow-hidden
                h-[120px] md:h-[200px]'>
                  <Image
                    src={image.path}
                    width={500}
                    height={200}
                    alt=''
                  />
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc]
                to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                </div>
                <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10
                group-hover:xl:-translate-y-20 transition-all duration-300'>
                  <Link
                    href={image.title}
                    target='_blank'
                    rel="noopener noreferrer"
                    className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'
                  >
                    <div className='delay-100'>Live</div>
                    <div className='translate-y-[500%] group-hover:translate-y-0 transition-all
                  duration-300 delay-150'>demo</div>
                    <div className='text-xl translate-y-[500%] group-hover:translate-y-0
                  transition-all duration-300 delay-200'>
                      <BsArrowRight />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
