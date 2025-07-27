import Image from 'next/image'
import React from 'react'

const FirstSection = () => {
  return (
    <section className='py-20'>
  <div className="container grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-gray-600 mb-4">
          Your customers are on mobile. Your team is on mobile. The world is mobile — and your business should be too.


          </p>
          <p className="text-gray-600 mb-6">
         At Nexwerx, we design and build mobile apps that are not just beautiful and fast — but purposeful. Whether it&apos;s iOS, Android, or cross-platform, we create apps that solve real problems, drive engagement, and grow with your business.
          </p>
          <h2 className="sbttl mt-5">Built Around Your Users</h2>
          <p className="text-gray-600 mb-4">
         We don’t just code — we understand your users. From smooth interfaces to seamless functionality, we make sure your app feels natural and intuitive in every tap and swipe.

          </p>
           <h2 className="thrdttl mt-5">Our Process</h2>
          <ul className="space-y-3 text-gray-700 list-inside list-disc mb-6">
            <li>Understand your goals</li>
 <li>Design for real-world use </li>
 <li>Develop with performance in mind</li>
 <li>Test, launch, and support
</li>
<p>Whether you’re launching a new idea, empowering your workforce, or enhancing customer experience — we’re with you every step of the way.
</p>
          </ul>
        </div>
        <div className="w-full h-full">
              <Image
                          src="/assets/img/srv-02.jpg"
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