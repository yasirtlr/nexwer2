import React from 'react';
import { FaClinicMedical, FaSpa, FaChalkboardTeacher, FaBuilding, FaHome } from 'react-icons/fa';

const industries = [
  { title: 'Veterinary & medical clinics', icon: <FaClinicMedical /> },
  { title: 'Beauty & wellness', icon: <FaSpa /> },
  { title: 'Training & education centers', icon: <FaChalkboardTeacher /> },
  { title: 'Event & facility rentals', icon: <FaBuilding /> },
  { title: 'Home services and more', icon: <FaHome /> },
];

const DesignedForBusiness: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 ">
          <h2 className="sbttl font-bold mb-6">Designed for Your Business</h2>
          <p className="text-md text-gray-700">
            We don’t use one-size-fits-all templates. We craft booking systems that match your brand, your
            workflow, and your customer needs — whether you&apos;re a solo provider or a large team.
          </p>
        </div>

        {/* Industry List */}
        <div className="text-center mb-8">
          <h3 className="thrdttl mb-6">Industries We Serve</h3>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {industries.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-left"
              >
                <div className="text-secondary text-xl mr-3">{item.icon}</div>
                <p className="text-gray-800 font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignedForBusiness;
