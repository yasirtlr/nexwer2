"use client";
import React, {  } from "react";
import { motion } from "framer-motion";

import Link from "next/link";

export const services = [
    {
      id: "1",
      image: "/assets/img/srv-01.jpg",
      title: "PIMS Integrations",
      url: "#",
      description:
        "Seamlessly connect your clinic’s existing systems with top veterinary software",
    },
    {
      id: "2",
      image: "/assets/img/srv-02.jpg",
      title: "E-commerce for Veterinary Clinics",
      url: "#",
      description:
        "Expand your services online with a secure and scalable e-commerce solution",
    },
    {
      id: "3",
      image: "/assets/img/srv-03.jpg",
      title: "Online Booking Portals",
      url: "#",
      description:
        "Make it easy for pet parents to schedule appointments",
    },
    {
      id: "4",
      image: "/assets/img/srv-04.jpg",
      title: "Client Portal Development",
      url: "#",
      description:
        "Give your clients control with a secure, personalized portal",
    },
    {
      id: "5",
      image: "/assets/img/srv-05.jpg",
      title: "Custom Mini-Apps for Clinics",
      url: "#",
      description:
        "Want a branded mobile experience? We can build lightweight, powerful apps",
    }
];


  

const OurServices = () => {
  

  return (
    <section className="pb-[80px]">
      {/* Section Heading */}
      <div className="container mx-auto ">
    <hr className="mb-[100px] opacity-30"/>
        <motion.div
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
          <div className="mb-5 flex items-center gap-2 lg:mb-[30px]">
            <h2 className="text-2xl font-[400] leading-[1.5]">Our Services</h2>
            <div className="size-3 bg-primary md:size-4 lg:size-5"></div>
          </div>
        </motion.div>
      </div>
      <div className="container mx-auto flex flex-col px-4 py-8">
        {/* Services */}
        {services.map((service, index) => (

          <div
          key={service.id}>
          <motion.div
      className="srv-item ref-ht grid grid-cols-1  md:grid-cols-2  relative"
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }} // Trigger animation once when 50% visible
            variants={{
              hidden: { opacity: 0, y: 50 }, // Start below and invisible
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeOut" },
              }, // Slide up and fade in
            }}
          >
            {/* Service Image */}

            <div
              // style={{ minHeight: divheight }}
              className={`srv-im targ-ht   justify-end border-b-gray-400  ${
                index % 2 === 1 ? "md:order-1" : ""
              }`}
            >
              <motion.div
                className=""
                variants={{
                  hidden: { y: 50, opacity: 0 }, // Start below and fade in
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 1, delay: 0.2 },
                  },
                }}
              ><Link href={service.url} >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  // className="h-full object-cover objectstm"
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  </Link>
              </motion.div>
            </div>

            {/* Service Details */}
            <motion.div
              // style={{ minHeight: divheight }}
              className="h-full"
            >
              {/* Content Block */}
              <div className={`cntntblc flex flex-col gap-3 h-full py-[60px] ${
                index % 2 === 1 ? "pr-[60px]" : "pl-[60px]"
              }`}>
              <div className="mb-3 flex">
                <span className="text-gray-300  font-lig text-center text-[30px]">0{service.id}</span>
              </div>
                <div className="group relative mt-auto">
               
                <Link href={service.url} > <h3 className="text-xl max-w-[14ch] macst transition-all duration-300 ease-in-out group-hover:text-secondary text-[#023a53] leading-none mb-5">
                    {service.title}
                  </h3>
                 </Link>
                 <p
                    className={`mb-2 text-md leading-lh1p4 font-light text-[#000]`}
                  >
                    {service.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2 lg:gap-7">
               
                 {/*  <div className="srvbt mb-5 flex flex-wrap gap-2 xl:mb-[4em]">
                    {service.buttonTexts.map((item, index) => (
                      <button
                        className="rounded-full border px-4 py-3 pmac text-font19 font-[500] text-gray-500 duration-200 ease-in hover:border-primary hover:text-black"
                        key={index}
                      >
                        {item.title}
                      </button>
                    ))}
                  </div> */}
                </div>
              </div>

              {/* Service ID */}
            
            </motion.div>
        {/*     <Link href={service.url} className="linkabs"> </Link> */}
          </motion.div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
