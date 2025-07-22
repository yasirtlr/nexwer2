import React from 'react';
import { FaCogs, FaUsers, FaLightbulb, FaPlug, FaLifeRing } from 'react-icons/fa';

interface OfferItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const offers: OfferItem[] = [
  {
    icon: <FaLightbulb className="text-black text-2xl" />,
    title: 'Discovery & Consultation',
    description: 'We listen. We ask questions. We understand your pain points, goals, and existing systems before writing a single line of code.',
  },
  {
    icon: <FaUsers className="text-black text-2xl" />,
    title: 'User-Centered Design',
    description: 'Your team will love using the software — because it’s designed with them in mind. Simple, intuitive, and frustration-free.',
  },
  {
    icon: <FaCogs className="text-black text-2xl" />,
    title: 'Agile Development',
    description: 'We work in short cycles with frequent feedback. You see progress, give input, and stay in control throughout the project.',
  },
  {
    icon: <FaPlug className="text-black text-2xl" />,
    title: 'Seamless Integration',
    description: 'Whether you use CRM tools, ERPs, or other platforms — we make sure your custom software plays well with your existing tech.',
  },
  {
    icon: <FaLifeRing className="text-black text-2xl" />,
    title: 'Reliable Support & Maintenance',
    description: 'Our relationship doesn’t end at delivery. We’re always here to ensure your software continues to perform at its best.',
  },
];

const WhatWeOffer: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 text-left">
      <div className="container mx-auto px-4">
        <div className='mb-12'>
        <h2 className="font-bold sbttl ">What We Offer</h2>
        <p>We design and build powerful, easy-to-use software that’s tailored to your business. From the first conversation to the final launch (and beyond), we’re by your side.</p>
        </div>
        <h4 className='text-md font-semibold mb-5'>Here’s what you can expect:
</h4>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((item, index) => (
            <div key={index} className="rounded-2xl p-8 transition-transform hover:-translate-y-2 border border-gray-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-full mb-4 text-black">
                {item.icon}
              </div>
              <h3 className="text-[24px] font-semibold mb-2">{item.title}</h3>
              <p className="text-sm opacity-90">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
