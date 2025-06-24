"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const currentIndexRef = useRef(0);
  const [spanContent, setSpanContent] = useState("Digital Marketing");
  const [isHovered, setIsHovered] = useState(false);

  const contentArray = [
    "Smart Tech for Every Need",
"Seamless, Smart Systems",
"Scalable Software Tools",
"AI & Machine Learning",
"Digital Data Analysis",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndexRef.current = (currentIndexRef.current + 1) % contentArray.length;
      setSpanContent(contentArray[currentIndexRef.current]);
    }, isHovered ? 200 : 1000); // Faster change on hover

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <motion.section
      className="bnrnmn relative flex items-center py-24 text-black h-[70vh] xl:h-screen z-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
     <div className="absolute z-10 bg-black w-full h-full opacity-50"></div>

      {/* Video plays continuously in the background */}
     
      <video
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover opacity-100"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/video/banner2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      
      <div className="container mx-auto px-4 relative z-20 pt-7">
        <motion.h1
          className="text-[80px] leading-22 cursor-pointer inline-block text-white duration-100"
          id="triggerSection"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
        Powering the Future with <br />
          <span className="relative linbsx">
            {spanContent}
          </span>
        </motion.h1>
      </div>
    </motion.section>
  );
};

export default HeroSection;
