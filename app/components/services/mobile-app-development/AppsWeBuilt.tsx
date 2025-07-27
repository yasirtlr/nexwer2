import React from 'react';
import {
  FaCalendarCheck,
  FaShoppingCart,
  FaUsersCog,
  FaGift,
  FaHeartbeat,
} from 'react-icons/fa';

const apps = [
  { title: 'Booking and service apps', icon: <FaCalendarCheck /> },
  { title: 'E-commerce and delivery platforms', icon: <FaShoppingCart /> },
  { title: 'Internal team tools', icon: <FaUsersCog /> },
  { title: 'Customer loyalty and engagement apps', icon: <FaGift /> },
  { title: 'Healthcare, education, and wellness solutions', icon: <FaHeartbeat /> },
];

const AppsWeBuilt: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="sbttl mb-6">Apps We’ve Built</h2>
        </div>

        {/* Apps List */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {apps.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-secondary text-xl mr-4 mt-1">{item.icon}</div>
              <p className="text-gray-800 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppsWeBuilt;
