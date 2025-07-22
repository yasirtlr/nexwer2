import Image from 'next/image'
import React from 'react'

const FirstSection = () => {
  return (
    <section className='py-20'>
  <div className="container grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-gray-600 mb-4">
            At Nexwerx, we believe that software should fit your business — not the other way around.
          </p>
          <p className="text-gray-600 mb-6">
            Whether you're a growing startup or a well-established enterprise, your business is unique. Your goals, workflows, and challenges deserve tailored software solutions.
          </p>
          <h2 className="sbttl mt-5">Why Custom Software?</h2>
          <p className="text-gray-600 mb-4">
            Off-the-shelf tools force you to adapt your processes to them. Custom software adapts to you — growing and evolving as your business does.
          </p>
          <ul className="space-y-3 text-gray-700 list-inside list-disc mb-6">
            <li>Streamline operations</li>
            <li>
              Improve efficiency
             <p> Custom software automates repetitive workflows, eliminates double-entry, and provides seamless access to relevant data.</p>
            </li>
            <li>Enhance customer experience</li>
            <li>Automate repetitive tasks</li>
            <li>Get real-time insights</li>
          </ul>
        </div>
        <div className="w-full h-full">
              <Image
                          src="/assets/img/websit.jpg"
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