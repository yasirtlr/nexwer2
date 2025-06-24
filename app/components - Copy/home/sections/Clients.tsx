"use client";

import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

export const Clientsdata = [
    {
        id: 1,
        image: "assets/img/client/cl-01.svg",
        alt: "client"
    },
    {
        id: 2,
        image: "assets/img/client/cl-02.svg",
             alt: "client"
    },
    {
        id: 3,
        image: "assets/img/client/cl-03.svg",
             alt: "client"
    },
    {
        id: 3,
        image: "assets/img/client/cl-04.svg",
             alt: "client"
    }
]
const Clients = () => {
  return (
    <section className="section-spacing ">
    <div className="container mx-auto px-4">
      <div className="flex flex-col ">
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 50% visible
          variants={{
            hidden: { opacity: 0, y: 50 }, // Start below and invisible
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            }, // Slide up and fade in
          }}
        >
          <h2 className="title-65">Discover Our Success Stories</h2>
        </motion.div> */}
        <div>
          <Swiper
            loop
            speed={3000}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="clntsSwpr w-full"
          >
            {Clientsdata.map((itm, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="clngsb text-center ">
                    <Image
                      src={itm.image}
                      alt={itm.alt || "global"}
                      width={250}
                      height={80}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Clients;
