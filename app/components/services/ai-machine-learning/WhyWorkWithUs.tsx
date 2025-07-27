import React from 'react';
import {
  FaRobot,
  FaSearch,
  FaSmile,
  FaClock,
} from 'react-icons/fa';

const benefits = [
  { title: 'Reduce manual work and human error', icon: <FaRobot /> },
  { title: 'Find patterns and trends in big data', icon: <FaSearch /> },
  { title: 'Improve customer experience', icon: <FaSmile /> },
  { title: 'Save time and cut operational costs', icon: <FaClock /> },
];

const WhyWorkWithUs: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Title + Description */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Why Work With Us?</h2>
          <p className="text-gray-700 text-base">
            We don&apos;t just plug in algorithms. We take time to understand your data, your challenges, and your goals, then craft a solution that fits your workflow — and keeps learning as you grow.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-secondary text-xl mr-4">{item.icon}</div>
              <p className="text-gray-800 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
