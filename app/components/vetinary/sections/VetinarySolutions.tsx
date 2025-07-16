import Image from 'next/image';
import React from 'react';

const solutions = [
  {
    title: 'PIMS Integrations',
    icon: '/assets/img/PIMS-Integrations.jpg',
    points: [
      'Integration with ezyVet, Vetport, Hippo Manager & more',
      'Real-time sync of appointments, records & client info',
      'Custom API workflows and automation for clinic ops',
    ],
    quote: '“Your practice should run smoothly — let us handle the tech behind it.”',
  },
  {
    title: 'E-commerce for Veterinary Clinics',
    icon: '/assets/img/E-commerce-for-Veterinary-Clinics.jpg',
    points: [
      'Custom online store for pet food, meds & supplements',
      'Inventory sync with PIMS',
      'Payment gateway & secure checkout',
      'Order tracking & client notifications',
    ],
  },
  {
    title: 'Online Booking Portals',
    icon: '/assets/img/Online-Booking-Portals.jpg',
    points: [
      'User-friendly online booking interfaces',
      'Two-way sync with calendar/PIMS',
      'Mobile-optimized experience',
    ],
  },
  {
    title: 'Client Portal Development',
    icon: '/assets/img/Client-Portal-Development.jpg',
    points: [
      'Access pet health records, prescriptions, and visit history',
      'Receive invoices, make payments, manage appointments',
      'Email & SMS notifications for reminders and updates',
    ],
  },
  {
    title: 'Custom Mini-Apps for Clinics',
    icon: '/assets/img/Custom-Mini-Apps-for-Clinics.jpg',
    points: [
      'Clinic-branded mobile app (iOS/Android/Web)',
      'Appointment booking with push notifications',
      'Pet profile management',
      'Integrated messaging/chatbot support',
    ],
  },
];

const VeterinarySolutions = () => {
  return (
    <section className="py-[80px] px-4 ">
      <div className="container">
        <div className='mb-[80px]'>
           <h2 className='text-[45px] leading-[1.2] mb-5'>Empowering Veterinary Clinics with Integrated, Scalable & Client-Centric Technology</h2>
           <p>At *Nexwerx*, we specialize in building modern, intuitive, and efficient digital solutions tailored to the needs of veterinary clinics and animal hospitals. With deep expertise in veterinary practice workflows and integration with major PIMS (Practice Information Management Systems), we help clinics enhance their operational efficiency, client engagement, and online presence.
</p>
        </div>
      <h2 className="text-3xl font-bold text-left mb-10">🐾 What We Offer</h2>
      <div className="space-y-10 ">
        {solutions.map((item, idx) => {
          const isEven = idx % 2 !== 0;
          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 border-gray-300 border  ${
                isEven ? 'md:flex-row-reverse pl-[30px]' : ''
              }`}
            >
              <Image
                src={item.icon}
                alt={item.title} width={1000} height={1000}
                className="w-[30%] h-full"
              />
              <div className="flex-1">
                <h3 className="text-[40px] font-semibold mb-3">{item.title}</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                {item.quote && (
                  <blockquote className="text-sm text-gray-500 mt-3 italic">
                    {item.quote}
                  </blockquote>
                )}
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default VeterinarySolutions;
