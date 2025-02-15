"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function Header() {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const toggleMobileServices = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  // Navigation handler for services
  const navigateToService = (path) => {
    // Close all mobile menus
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsDropdownOpen(false);
    
    // Navigate to the specified service path
    router.push(path);
  };

  const services = [
    { 
      name: "HR Consulting", 
      path: "/services/hr-consulting" 
    },
    { 
      name: "Payroll Management", 
      path: "/services/payroll-management" 
    },
    { 
      name: "Staffing Solutions", 
      path: "/services/staffing-solutions" 
    },
    {
      name: "Web Development Services",
      path: "/services/web-development"
    },
    { 
      name: "BPO/KPO & Inside Sales Staffing", 
      path: "/services/bpo-kpo-services" 
    }
  ];

  return (
    <header className="bg-black shadow">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo - Link to Home Page */}
        <div className="flex items-center">
          <Link href="/" passHref>
            <img
              src="/Assets/cges2.png"
              alt="Logo"
              className="w-[200px] h-[100px] object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#D2BE60] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li className="text-white hover:text-[#D2BE60] cursor-pointer text-xl">
            <Link href="/about">About Us</Link>
          </li>
          <li 
            className="relative group text-white hover:text-[#D2BE60] cursor-pointer text-xl"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="flex items-center">
              Services
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-black border border-[#D2BE60] rounded-md shadow-lg z-20">
                <ul className="py-2">
                  {services.map((service) => (
                    <li 
                      key={service.path}
                      className="px-4 py-2 hover:bg-[#333] text-[#D2BE60] hover:text-white cursor-pointer text-sm"
                      onClick={() => navigateToService(service.path)}
                    >
                      {service.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li className="text-white hover:text-[#D2BE60] cursor-pointer text-xl">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Get Started Button - visible on both mobile and desktop */}
        <div className="hidden md:block">
          <button 
            className="bg-[#D2BE60] text-black px-4 py-2 rounded-md hover:bg-[#B5A050]"
            onClick={() => navigateToService("/contact")}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="bg-black shadow-md md:hidden">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            <li className="text-[#D2BE60] hover:text-white cursor-pointer">
              <Link href="/about">About Us</Link>
            </li>
            <li className="text-[#D2BE60] hover:text-white cursor-pointer">
              <div 
                className="flex justify-between items-center"
                onClick={toggleMobileServices}
              >
                Services
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 transform transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {isMobileServicesOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  {services.map((service) => (
                    <li 
                      key={service.path}
                      className="text-[#D2BE60] hover:text-white cursor-pointer py-2"
                      onClick={() => navigateToService(service.path)}
                    >
                      {service.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="text-[#D2BE60] hover:text-white cursor-pointer">
              <Link href="/contact">Contact</Link>
            </li>
            {/* Get Started Button for mobile */}
            <li className="pt-2">
              <button 
                className="w-full bg-[#D2BE60] text-black px-4 py-2 rounded-md hover:bg-[#B5A050]"
                onClick={() => navigateToService("/contact")}
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}