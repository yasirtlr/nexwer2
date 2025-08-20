"use client";

import React from "react";
import {assets} from "../../../public/assets/assets"
import Image from "next/image";

// The menu items array is defined here, as it's used directly in the component.
const menuItems = [
  {
    item: "Home",
    url: "/",
  },
  {
    item: "ABOUT",
    url: "/about",
  },
  {
    item: "SERVICES",
    children: [
      {
       item: "Custom Software Development",
        url: "/custom-software-development",
      },
      {
         item: "Mobile App Development",
        url: "/mobile-app-development",
      },
      {
         item: "Online Booking Portals",
        url: "/online-booking-portals",
      },
      {
         item: "Cloud Solutions",
        url: "/cloud-solutions",
      },
      {
           item: "AI & Machine Learning",
        url: "/ai-machine-learning",
      },
    ],
    url: "#",
  },
  {
    item: "Veterinary Software Solutions",
    url: "/veterinary-software-solutions",
  },
];


const Footer = () => {
  return (
    <footer className="bg-black py-12 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Column 1: Placeholder for brand/logo */}
          <div className="flex flex-col items-start space-y-4 md:col-span-1">
             <Image
                        src={assets.logow}
                        className="w-[200px]"
                        alt="Global Surf Digital Logo"
                        width={100}
                        height={100}
                      />
            <p className="text-sm text-gray-400 max-w-xs">
              Providing cutting-edge software solutions to help your business thrive.
            </p>
          </div>

          {/* Column 2: Main menu links */}
          <div className="md:col-span-1">
            <h3 className="text-[24px] md:text-[30px] font-semibold mb-4 text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              {menuItems.map((menuItem) => {
                // Only render top-level links that do not have children
                if (!menuItem.children) {
                  return (
                    <li key={menuItem.item}>
                      <a 
                        href={menuItem.url} 
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {menuItem.item}
                      </a>
                    </li>
                  );
                }
                return null;
              })}
               <li >
                      <a 
                        href="/contact" 
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      >
                        Get in touch
                      </a>
                    </li>
            </ul>
          </div>

          {/* Column 3: Services menu links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Find the 'SERVICES' item to render its children */}
              {menuItems.find(item => item.item === "SERVICES")?.children?.map((serviceItem) => (
                <a
                  key={serviceItem.item}
                  href={serviceItem.url}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {serviceItem.item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Separator line */}
        <hr className="my-8 border-gray-700" />

        {/* Copyright notice at the bottom */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            © 2025 Nexwerx. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
