import React from 'react';
import {
  FaCloudUploadAlt,
  FaCloud,
  FaLock,
  FaChartLine,
  FaHeadset,
} from 'react-icons/fa';

const offerings = [
  { title: 'Cloud migration and setup', icon: <FaCloudUploadAlt /> },
  { title: 'Hybrid and multi-cloud environments', icon: <FaCloud /> },
  { title: 'Secure file storage and backup', icon: <FaLock /> },
  { title: 'Cloud-based applications and dashboards', icon: <FaChartLine /> },
  { title: 'Ongoing monitoring and support', icon: <FaHeadset /> },
];

const WhatWeOffer: React.FC = () => {
  return (
    <section className="py-10 lg:py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center lg:mb-14">
          <h2 className="sbttl mb-4">What We Offer</h2>
        </div>

        {/* Offerings Grid */}
        <div className="grid gap-3 lg:gap-6 sm:grid-cols-2 md:grid-cols-3">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-secondary text-xl mr-4">{item.icon}</div>
              <p className="text-gray-800 font-medium">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Supporting Text */}
        <div className="mt-16 text-center ">
          <h3 className="thrdttl mb-6">Your Business. Your Cloud.</h3>
          <p className="text-gray-700 text-base">
            We don’t just move your data to the cloud — we help you build a cloud-first strategy that fits your goals, your people, and your day-to-day operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
