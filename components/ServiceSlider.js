import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from 'react-icons/rx';

// data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Uniquely crafting brand identities that leave a lasting impression.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Creating visually stunning designs that captivate and inspire.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Building robust solutions for your digital presence.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Crafting compelling and persuasive content that tells your story.',
  },
  {
    icon: <RxRocket />,
    title: 'Deployment',
    description: 'Efficiently launching your projects for a seamless experience.',
  },
];

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper';

const ServiceSlider = () => {
  return (
    <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15
      }
    }}
    freeMode={true}
    pagination={{
      clickable: true
    }}
    modules={[FreeMode, Pagination]}
    className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex
          sm:flex-col gap-x-6 sm:gap-x-8 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]
          transition-all duration-300'>
            <div className='text-4xl text-accent mb-4'>{item.icon}</div>
            <div>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
            </div>
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent
              transition-all duration-300' />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
