'use client';

import Image from 'next/image';
import React from 'react';

const clients = [
  { name: 'Google', logo: '/assets/img/client/cl-01.svg' },
  { name: 'Google', logo: '/assets/img/client/cl-02.svg' },
  { name: 'Google', logo: '/assets/img/client/cl-03.svg' },
  { name: 'Google', logo: '/assets/img/client/cl-04.svg' },
{ name: 'Google', logo: '/assets/img/client/cl-01.svg' },
  { name: 'Google', logo: '/assets/img/client/cl-02.svg' },
];

const OurClients: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start">
        <div className="col-span-1 sm:col-span-2 md:col-span-1 ">
          <h2 className="text-xl font-semibold mb-2">Our clients</h2>
          <p className="text-[70px] leading-[60px] font-bold text-gray-300 mt-[100px]">Pleasure to work with</p>
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-2 grid grid-cols-2 sm:grid-cols-2 gap-[30px] ">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center">
              <Image
                src={client.logo}
                alt={client.name}
                width={250}
                height={100}
                className="h-6 sm:h-[100px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
