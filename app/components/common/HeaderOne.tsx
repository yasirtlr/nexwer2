// components/Header.tsx
"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import {assets} from "../../../public/assets/assets"
import Image from "next/image";

export default function HeaderOne() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const servicesLinks = [
    { name: "Custom Software Development", href: "/services/custom-software" },
    { name: "Mobile App Development", href: "/services/mobile-app" },
    { name: "Online Booking Portals", href: "/services/booking-portals" },
    { name: "Cloud Solutions", href: "/services/cloud" },
    { name: "AI & Machine Learning", href: "/services/ai-ml" },
  ];

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    {
      name: "SERVICES +",
      href: "#",
      submenu: servicesLinks,
    },
    { name: "VETERINARY SOFTWARE SOLUTIONS", href: "/vet-software" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="container flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={assets.logo} alt="Logo" className="h-8 w-auto" />
        
        </Link>

        {/* Desktop Nav */}
       <nav className="hidden md:flex items-center space-x-6 relative">
  {navLinks.map((link) =>
    link.submenu ? (
      <div key={link.name} className="relative group">
        <button className="flex items-center font-semibold hover:text-secondary transition">
          {link.name}
        {/*   <ChevronDown size={16} className="ml-1" /> */}
        </button>

        {/* Submenu - fix hover issue */}
        <div
          className="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-lg
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-all duration-200 min-w-[220px] p-2 z-50"
        >
          {link.submenu.map((sub) => (
            <Link
              key={sub.name}
              href={sub.href}
              className="block px-4 py-2 rounded hover:bg-gray-100 whitespace-nowrap"
            >
              {sub.name}
            </Link>
          ))}
        </div>
      </div>
    ) : (
      <Link
        key={link.name}
        href={link.href}
        className="font-semibold hover::text-secondary transition"
      >
        {link.name}
      </Link>
    )
  )}
  <Link
    href="/contact"
    className="px-4 py-2 border rounded-full font-semibold hover:bg-blue-50 transition"
  >
    GET IN TOUCH
  </Link>
</nav>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) =>
            link.submenu ? (
              <div key={link.name}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full font-semibold hover::text-secondary"
                >
                  {link.name}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className="mt-2 ml-4 flex flex-col space-y-2">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="text-sm hover:text-secondary"
                        onClick={() => setMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="font-semibold hover:text-secondary"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="px-4 py-2 border rounded-full font-semibold hover:bg-blue-50 transition text-center"
            onClick={() => setMenuOpen(false)}
          >
            GET IN TOUCH
          </Link>
        </nav>
      </div>

      {/* Overlay Background */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
