import Image from "next/image";
import React from "react";

const ProjectsSection: React.FC = () => {
  return (
    <section className="bg-white py-[80px] px-4 md:px-12">
      <div className="container  mx-auto">
        {/* Section Header */}
       
        <p className="text-black font-semibold text-lg mb-12 max-w-3xl">
          Purpose-Built Solutions for Veterinary Businesses
        </p>
        <p className="text-gray-700 text-base mb-8 max-w-4xl">
          At <strong>Nexwerx</strong>, we specialize in delivering smart, scalable, and seamless tech tailored for the veterinary industry.
          From custom software to full-fledged platforms, here are a few projects that reflect our expertise and passion:
        </p>

        {/* Project Cards */}
        <div className="space-y-12 mt-[60px]">
          {/* Project 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/assets/img/websit.jpg"
              alt="E-commerce Platform"
              width={1000} height={1000}
              className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
            />
            <div className="md:w-1/2 md:pl-[50px]">
            <h3 className="text-[45px] leading-[1.1] font-semibold mb-2 flex items-center gap-2 mb-[30px]">
               E-commerce Platform for Pet Products
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We developed a feature-rich, mobile-friendly e-commerce solution for a pet brand looking to expand its digital footprint.
                With real-time inventory sync, smooth checkout flow, and seamless backend management, the platform now supports thousands of customers across the UAE and beyond.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <Image
              width={1000} height={1000}
              src="/assets/img/custom-tech.jpg"
              alt="Veterinary Hospital Tech Suite"
              className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
            />
            <div className="md:w-1/2 md:pr-[50px]">
              <h3 className="text-[45px] leading-[1.1] font-semibold mb-2 flex items-center gap-2 mb-[30px]">
                Custom Tech Suite for a Multi-Branch Veterinary Hospital
              </h3>
              <ul className="text-gray-600 list-disc list-inside space-y-2">
                <li>A fully custom appointment booking portal</li>
                <li>Automated reminder system for appointments, vaccinations, and follow-ups</li>
                <li>A PACS integration for efficient imaging workflow</li>
                <li>Advanced PIMS integrations to ensure smooth, real-time data syncing across their branches</li>
              </ul>
              <p className="mt-4 text-gray-600">
                These tools drastically improved operational efficiency, customer engagement, and overall patient care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
