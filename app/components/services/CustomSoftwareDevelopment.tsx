
'use client';


import { FaWhatsapp } from 'react-icons/fa';


const CustomSoftwareDevelopment: React.FC = () => {

  return (
    <section className="bg-white py-20 px-6 md:px-12">
    

      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700 list-disc pl-6 mb-6">
          <li>Discovery & Consultation</li>
          <li>User-Centered Design</li>
          <li>Agile Development</li>
          <li>Seamless Integration</li>
          <li>Reliable Support & Maintenance</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">We Build For You — and With You</h2>
        <p className="text-gray-600 mb-6">
          Our clients often say we feel more like a partner than a vendor. Every project is a collaboration — one where your voice shapes the product.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Solutions We’ve Built</h2>
        <ul className="grid sm:grid-cols-2 gap-4 text-gray-700 list-disc pl-6 mb-6">
          <li>Business process automation tools</li>
          <li>Custom CRM and ERP systems</li>
          <li>Inventory and warehouse management</li>
          <li>Booking and scheduling platforms</li>
          <li>Data analytics dashboards</li>
          <li>Mobile and web applications</li>
        </ul>

        
      </div>
    </section>
  );
};

export default CustomSoftwareDevelopment;
