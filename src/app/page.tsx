"use client"; // Add this line to mark the component as a client component

import { useState } from "react";
import Image from "next/image"; // Import Image component
import IntroSection from "./components/IntroSection"; // Adjust the import path as needed

export default function HomePage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#1A7DB4] to-[#C4206F] text-white py-2">

        <div className="container mx-auto flex items-center justify-center px-4">
          <p className="text-sm md:text-base flex items-center space-x-2 text-center">
            <span>Start your digital journey now and elevate your online presence to new heights!</span>
            <a
            href="#contact"
            className="text-white font-semibold border-b-2 border-pink-500 hover:text-white hover:border-b-2 hover:border-pink-500 pb-1"
            >
            Let&rsquo;s Connect!
            </a>
          </p>
        </div>
      </div>

      {/* Navigation Bar */}
      <header className="bg-white shadow">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/Assets/logo.png" // Path to your logo
              alt="Logo"
              width={200} // Adjust width as needed
              height={200} // Adjust height as needed
              className="object-contain"
            />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-blue-500 focus:outline-none"
            >
              {/* Hamburger Icon */}
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
            <li className="text-[#1A7DB4] hover:text-blue-500 cursor-pointer text-xl">About Us</li>
            <li
              className="relative text-[#1A7DB4] hover:text-blue-500 cursor-pointer text-xl"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              Services
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Salesforce Consulting</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Web Development</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Consulting And training </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Digital Marketing</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">App Development</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Data Migration</li>
                </ul>
              )}
            </li>
            <li className="text-[#1A7DB4] hover:text-blue-500 cursor-pointer text-xl">Contact</li>
          </ul>

          {/* Get Started Button */}
          <div>
            <button className="bg-[#086B92] text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Get Started
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="bg-white shadow-md md:hidden">
            <ul className="flex flex-col space-y-4 py-4 px-6">
              <li className="text-[#1A7DB4] hover:text-blue-500 cursor-pointer">About Us</li>
              <li
                className="text-[#1A7DB4] hover:text-blue-500 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Services
                {isDropdownOpen && (
                  <ul className="mt-2 pl-4 space-y-2">
                    <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Salesforce Consulting</li>
                    <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Web Development</li>
                    <li className="text-gray-700 hover:text-blue-500 cursor-pointer">SEO</li>
                    <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Integration</li>
                  </ul>
                )}
              </li>
              <li className="text-[#1A7DB4] hover:text-blue-500 cursor-pointer">Contact</li>
            </ul>
          </div>
        )}
      </header>

      {/* Add the IntroSection component */}
      <IntroSection />
    </div>
  );
}
