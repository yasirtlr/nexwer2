import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface BannerProps {
  pageName: string;
  backgroundUrl: StaticImageData;
}

const Banner: React.FC<BannerProps> = ({ pageName, backgroundUrl }) => {
  return (
    <section className='pb-[100px] pt-[250px] bg-[#f2f2f2] relative overflow-hidden'>
      <figure className='absolute top-0 bottom-0 z-0 w-full h-full'>
        <Image
          className='absolute w-full h-full object-cover object-center'
          src={backgroundUrl}
          width={1500}
          height={800}
          alt={`${pageName} banner`}
        />
      </figure>
      <div className="absolute w-full h-full bg-black z-[2] top-0 opacity-50"></div>
      <div className="container z-10 relative">
        <h1 className='text-[80px] text-white'>{pageName}</h1>
      </div>
    </section>
  );
};

export default Banner;
