import Image from 'next/image'
import React from 'react'

const FirstSection = () => {
  return (
    <section className='py-10 lg:py-20'>
  <div className="container grid md:grid-cols-2 gap-5 lg:gap-16 items-start">
        <div>
          <p className="text-gray-600 mb-4">
         Missed calls, messy spreadsheets, double bookings — sound familiar?


          </p>
          <p className="text-gray-600 mb-6">
        At Nexwerx, we build smart, reliable, and user-friendly online booking portals that take the hassle out of managing appointments and reservations. Whether you&apos;re a clinic, salon, service provider, or events business — we help your customers book in real-time, anytime.

         </p>
       
           <h2 className="thrdttl mt-5">Why Go Online?  </h2>
             <p className="text-gray-600 mb-4">
      Your customers want convenience. Give them the freedom to book appointments, classes, or services — from anywhere, on any device, without waiting.</p>
      
             <p className="text-gray-600 mb-4">
     With our custom-built portals, you get:
</p>

          <ul className="space-y-3 text-gray-700 list-inside list-disc mb-6">
            <li>24/7 self-service booking</li>
 <li>Instant confirmations and reminders</li>
 <li>Calendar sync and availability management</li>
 <li>Payment integration and invoicing</li>
 <li>Admin dashboard for full control

</li>
          </ul>
        </div>
        <div className="w-full h-full">
              <Image
                          src="/assets/img/srv-03.jpg"
                          alt="E-commerce Platform"
                          width={1000} height={1000}
                          className="rounded-md shadow-md object-cover w-full h-auto"
                        />
      
        </div>
      </div>
    </section>
  )
}

export default FirstSection