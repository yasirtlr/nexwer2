'use client';

import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const clients = [
  { name: 'fortizo', logo: '/assets/img/client/fortizo.png' },
  { name: 'modernvet', logo: '/assets/img/client/modernvet.png' },
  { name: 'seekers', logo: '/assets/img/client/seekers.png' },
  { name: 'floof', logo: '/assets/img/client/floof.png' },
  { name: 'blusky', logo: '/assets/img/client/blusky.png' },
  { name: 'seekers', logo: '/assets/img/client/seekers.png' },
];

const OurClients: React.FC = () => {
  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl font-[400] leading-[1.5] mb-2">Our clients</h2>
          <p className="text-[20px] leading-[16px] font-light text-gray-300">
            Pleasure to work with
          </p>
        </div>

        {/* Right Side - Slider */}
        <div className="col-span-2">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4,  spaceBetween: 50 },
            }}
            loop
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={200}
                  height={80}
                  className="h-16 sm:h-[100px] object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
