import React from 'react';
import {
  FaCogs,
  FaChartBar,
  FaMobileAlt,
  FaCalendarAlt,
  FaBoxes,
  FaDatabase,
} from 'react-icons/fa';

const solutions = [
  { title: 'Business Process Automation Tools', icon: <FaCogs /> },
  { title: 'Custom CRM and ERP Systems', icon: <FaDatabase /> },
  { title: 'Inventory & Warehouse Management', icon: <FaBoxes /> },
  { title: 'Booking & Scheduling Platforms', icon: <FaCalendarAlt /> },
  { title: 'Data Analytics Dashboards', icon: <FaChartBar /> },
  { title: 'Mobile and Web Applications', icon: <FaMobileAlt /> },
];

const BuildWithYou: React.FC = () => {
  return (
    <section className="py-20  bg-gradient-to-t from-gray-200">
      <div className="container mx-auto px-4">
        {/* Intro Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">We Build For You — and With You</h2>
          <p className="text-md text-gray-700 mx-auto">
            Our clients often say we feel more like a partner than a vendor. That’s because we care —
            about your business outcomes, your user experience, your team, and your vision. Every project
            is a collaboration — one where your voice shapes the product.
          </p>
        </div>

        {/* Solutions List */}
        <div>
          <h3 className="sbttl mb-6 text-center">Solutions We’ve Built</h3>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-6 bg-white  rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 text-xl mr-4 mt-1">{item.icon}</div>
                <p className="text-gray-800 font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Note */}
        <div className="mt-12 text-center text-gray-700 text-base">
          <p>
            No matter your industry — <strong>retail, healthcare, logistics, education, or services</strong> — we build software that solves real problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuildWithYou;
