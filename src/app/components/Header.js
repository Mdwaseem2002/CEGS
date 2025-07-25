"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import Image from "next/image";  // Import Next.js Image

export default function Header() {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

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
            <Image
              src="/Assets/cges2.png"
              alt="Logo"
              width={150}
              height={100}
              className="object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#D2BE60] focus:outline-none"
            aria-label="Toggle mobile menu"
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
            ref={dropdownRef}
            className="relative text-white hover:text-[#D2BE60] cursor-pointer text-xl"
          >
            <button 
              className="flex items-center focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
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
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-black border border-[#D2BE60] rounded-md shadow-lg z-20">
                <ul className="py-2" role="menu" aria-orientation="vertical">
                  {services.map((service) => (
                    <li 
                      key={service.path}
                      className="px-4 py-2 hover:bg-[#333] text-[#D2BE60] hover:text-white cursor-pointer text-sm"
                      onClick={() => navigateToService(service.path)}
                      role="menuitem"
                    >
                      {service.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li className="text-white hover:text-[#D2BE60] cursor-pointer text-xl">
            <Link href="/careers">Careers</Link>
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
              <button 
                className="flex justify-between items-center w-full"
                onClick={toggleMobileServices}
                aria-expanded={isMobileServicesOpen}
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
              </button>
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
              <Link href="/careers">Careers</Link>
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