import Image from "next/image";
import React from "react";

const FirstSection = () => {
  return (
    <section className="py-14 lg:py-20">
      <div className="container grid md:grid-cols-2 gap-5 lg:gap-15 items-start">
        <div>
          <h3 className="thrdttl mb-5">
            AI & Machine Learning Solutions That Think Ahead
          </h3>
          <p className="text-gray-600 mb-4">
            Artificial Intelligence isn’t the future — it’s already transforming
            the way we live, work, and grow.
          </p>
          <p className="text-gray-600 mb-4">
            At Nexwerx, we help businesses harness the power of AI and machine
            learning to solve real-world problems, automate complex tasks, and
            make smarter decisions — faster.
          </p>
          <p className="text-gray-600 mb-4">
            Whether you’re exploring AI for the first time or looking to scale
            an existing solution, we build intelligent systems that adapt,
            learn, and deliver results.
          </p>

          <h2 className="thrdttl mt-5">What We Build</h2>
          <p className="text-gray-600 mb-4">
            The cloud isn’t just about storage — it’s about smarter ways of
            working. With our tailored cloud solutions, you can:
          </p>

          <ul className="space-y-3 text-gray-700 list-inside list-disc mb-6">
            <li>Predictive analytics and forecasting tools</li>
            <li>Recommendation engines</li>
            <li>Image and voice recognition solutions</li>
            <li>Process automation powered by machine learning</li>
          </ul>
        </div>
        <div className="w-full h-full">
          <Image
            src="/assets/img/future_of_ai.jpg"
            alt="E-commerce Platform"
            width={1000}
            height={1000}
            className="rounded-md shadow-md object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
