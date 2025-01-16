/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="flex justify-center md:justify-start">
            <a href="/www.pentacloud.in">
              <Image
                src="/Assets/logo.png"
                alt="Salesforce Consulting"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </a>
          </div>

          {/* Services Column */}
          <div className="pt-8">
            <h3 className="text-blue-500 font-semibold mb-4 ">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/salesforce" className="hover:text-blue-500">Salesforce Consulting</a></li>
              <li><a href="/services/web-development" className="hover:text-blue-500">Web Development</a></li>
              <li><a href="/services/consulting" className="hover:text-blue-500">Consulting And Training</a></li>
              <li><a href="/services/digital-marketing" className="hover:text-blue-500">Digital Marketing</a></li>
              <li><a href="/services/app-development" className="hover:text-blue-500">App Development</a></li>
              <li><a href="/services/data-migration" className="hover:text-blue-500">Data Migration</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="pt-8">
            <h3 className="text-blue-500 font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="hover:text-blue-500">Contact us</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="pt-8">
            <h3 className="text-blue-500 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-500">About us</a></li>
              <li><a href="/careers" className="hover:text-blue-500">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600">
            Copyright © 2024 Pentacloud. All rights reserved.
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-pink-500 hover:text-pink-600"
  >
    <img src="\Assets\instagram.png" alt="Instagram" className="h-6 w-6" />
  </a>
  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-500"
  >
    <img src="\Assets\twitter.png" alt="Twitter" className="h-6 w-6" />
  </a>
  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-700"
  >
    <img src="\Assets\linked in.png" alt="LinkedIn" className="h-6 w-6" />
  </a>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
