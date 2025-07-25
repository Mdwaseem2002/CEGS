/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="flex justify-center md:justify-start">
            <Link href="/" passHref>
              <Image
                src="/Assets/cges2.png"
                alt="Logo"
                width={200}
                height={100}
                className="object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* Services, Company, and Contact Us in One Row */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Services Column */}
            <div>
              <h3 className="text-[#D2BE60] font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="/services/hr-consulting" className="text-white hover:text-white">HR Consulting</a></li>
                <li><a href="/services/payroll-management" className="text-white hover:text-white">Payroll Management</a></li>
                <li><a href="/services/staffing-solutions" className="text-white hover:text-white">Staffing Solutions</a></li>
                <li><a href="/services/web-development" className="text-white hover:text-white">Web Development Services</a></li>
                <li><a href="/services/bpo-kpo-services" className="text-white hover:text-white">BPO/KPO & Inside Sales</a></li> 
                 </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-[#D2BE60] font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-white hover:text-white">About us</a></li>
                <li><a href="/careers" className="text-white hover:text-white">Careers</a></li>
              </ul>
            </div>

            {/* Contact Us Column */}
            <div>
              <h3 className="text-[#D2BE60] font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-white">
                <li>
                  <div className="flex items-center space-x-2">
                    <img src="/Assets/image-removebg-preview (10).png" alt="Email" className="h-5 w-5" />
                    <span>info@careerexpertglobalsolution.com</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2 whitespace-nowrap">
  <img src="/Assets/image-removebg-preview (9).png" alt="Phone" className="h-5 w-5" />
  <span>+91 7892220496 / +91 9743870225</span>
</div>

                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <img src="/Assets/image-removebg-preview (8).png" alt="Address" className="h-5 w-5" />
                    <span>Neelsandra, Bangalore 560047</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600">
            Copyright © 2017 CEGS. All rights reserved.
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
              <img src="/Assets/image-removebg-preview (11).png" alt="Instagram" className="h-10 w-10" />
            </a>
           
            <a href="https://www.linkedin.com/company/career-expert-global-solution-cegs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
              <img src="/Assets/image-removebg-preview (12).png" alt="LinkedIn" className="h-10 w-10" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
