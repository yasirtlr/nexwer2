import Image from "next/image";
import React from "react";

const FirstSection = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container grid md:grid-cols-2 gap-5 lg:gap-16 items-start">
        <div>
          <p className="text-gray-600 mb-4">
            Work from anywhere. Access everything. Scale without stress.
          </p>
          <p className="text-gray-600 mb-6">
            At Nexwerx, we help businesses move to the cloud — securely,
            smoothly, and strategically. Whether you’re starting fresh or
            migrating from legacy systems, our cloud solutions are built to give
            you freedom, flexibility, and control.
          </p>

          <h2 className="thrdttl mt-5">Why Cloud?</h2>
          <p className="text-gray-600 mb-4">
            The cloud isn’t just about storage — it’s about smarter ways of
            working. With our tailored cloud solutions, you can:
          </p>

          <ul className="space-y-3 text-gray-700 list-inside list-disc mb-6">
            <li>Access your systems and data from anywhere</li>
            <li>Collaborate in real-time </li>
            <li>Reduce infrastructure costs</li>
            <li>Scale up as your business grows</li>
            <li>Keep everything backed up and secure</li>
          </ul>
        </div>
        <div className="w-full h-full">
          <Image
            src="/assets/img/srv-04.jpg"
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
