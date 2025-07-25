'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import TestimonialSlider from '../components/TestimonialSlider';
import Footer from '../components/Footer';

const jobs = [
  // Customer Support Executive - Multiple locations
  {
    id: 1,
    title: 'Customer Support Executive',
    location: 'Bangalore, India',
    type: 'Full-Time',
    description: 'Handle inbound calls and resolve customer queries efficiently.',
    category: 'Customer Service'
  },
  {
    id: 2,
    title: 'Customer Support Executive',
    location: 'Thane, India',
    type: 'Full-Time',
    description: 'Handle inbound calls and resolve customer queries efficiently.',
    category: 'Customer Service'
  },
  {
    id: 3,
    title: 'Customer Support Executive',
    location: 'Noida, India',
    type: 'Full-Time',
    description: 'Handle inbound calls and resolve customer queries efficiently.',
    category: 'Customer Service'
  },
  
  // Telesales Executive
  {
    id: 4,
    title: 'Telesales Executive',
    location: 'Bangalore, India',
    type: 'Full-Time',
    description: 'Drive sales through outbound calling and build customer relationships.',
    category: 'Sales'
  },
  {
    id: 5,
    title: 'Telesales Executive',
    location: 'Thane, India',
    type: 'Full-Time',
    description: 'Drive sales through outbound calling and build customer relationships.',
    category: 'Sales'
  },
  
  // Customer Sales Representative
  {
    id: 6,
    title: 'Customer Sales Representative',
    location: 'Bangalore, India',
    type: 'Full-Time',
    description: 'Assist customers with sales inquiries and product information.',
    category: 'Sales'
  },
  {
    id: 7,
    title: 'Customer Sales Representative',
    location: 'Thane, India',
    type: 'Full-Time',
    description: 'Assist customers with sales inquiries and product information.',
    category: 'Sales'
  },
  
  // Collection Executive
  {
    id: 8,
    title: 'Collection Executive',
    location: 'Bangalore, India',
    type: 'Full-Time',
    description: 'Manage collection activities and maintain customer payment records.',
    category: 'Finance'
  },
  
  // Customer Service Executive
  {
    id: 9,
    title: 'Customer Service Executive',
    location: 'Noida, India',
    type: 'Full-Time',
    description: 'Provide excellent customer service and support to clients.',
    category: 'Customer Service'
  },
  
  // Chat Support Executive
  {
    id: 10,
    title: 'Chat Support Executive',
    location: 'Bangalore, India',
    type: 'Full-Time',
    description: 'Provide customer support through chat channels and resolve queries.',
    category: 'Customer Service'
  },
  {
    id: 11,
    title: 'Chat Support Executive',
    location: 'Thane, India',
    type: 'Full-Time',
    description: 'Provide customer support through chat channels and resolve queries.',
    category: 'Customer Service'
  },
  
  // BPO Quality Analyst - Multiple locations
  {
    id: 12,
    title: 'BPO Quality Analyst',
    location: 'Bangalore, India',
    type: 'Full-Time',
    description: 'Audit calls and provide performance feedback to agents.',
    category: 'Quality Assurance'
  },
  {
    id: 13,
    title: 'BPO Quality Analyst',
    location: 'Thane, India',
    type: 'Full-Time',
    description: 'Audit calls and provide performance feedback to agents.',
    category: 'Quality Assurance'
  },
  {
    id: 14,
    title: 'BPO Quality Analyst',
    location: 'Jamshedpur, India',
    type: 'Full-Time',
    description: 'Audit calls and provide performance feedback to agents.',
    category: 'Quality Assurance'
  },
  {
    id: 15,
    title: 'BPO Quality Analyst',
    location: 'Hubli, India',
    type: 'Full-Time',
    description: 'Audit calls and provide performance feedback to agents.',
    category: 'Quality Assurance'
  },
  {
    id: 16,
    title: 'BPO Quality Analyst',
    location: 'Navi Mumbai, India',
    type: 'Full-Time',
    description: 'Audit calls and provide performance feedback to agents.',
    category: 'Quality Assurance'
  },
  
  // BPO Trainer
  {
    id: 17,
    title: 'BPO Process Trainer',
    location: 'Bangalore, India',
    type: 'Full-Time',
    description: 'Design training modules and conduct onboarding sessions.',
    category: 'Training'
  },
  {
    id: 18,
    title: 'BPO Process Trainer',
    location: 'Thane, India',
    type: 'Full-Time',
    description: 'Design training modules and conduct onboarding sessions.',
    category: 'Training'
  },
  
  // BPO Team Lead
  {
    id: 19,
    title: 'BPO Team Lead',
    location: 'Bangalore, India',
    type: 'Full-Time',
    description: 'Lead a team of executives and ensure SLA adherence.',
    category: 'Management'
  },
  {
    id: 20,
    title: 'BPO Team Lead',
    location: 'Thane, India',
    type: 'Full-Time',
    description: 'Lead a team of executives and ensure SLA adherence.',
    category: 'Management'
  },
  
  // Previous jobs for additional variety
  {
    id: 21,
    title: 'Technical Support Specialist',
    location: 'Hyderabad, India',
    type: 'Full-Time',
    description: 'Provide technical assistance for internet and software issues.',
    category: 'Technical'
  },
  {
    id: 22,
    title: 'HR Recruiter – BPO Hiring',
    location: 'Remote',
    type: 'Part-Time',
    description: 'Manage end-to-end recruitment for voice and non-voice roles.',
    category: 'Human Resources'
  },
  {
    id: 23,
    title: 'Voice Process Associate',
    location: 'Mumbai, India',
    type: 'Full-Time',
    description: 'Handle outbound/inbound voice calls and customer queries.',
    category: 'Customer Service'
  },
  {
    id: 24,
    title: 'Non-Voice Process Executive',
    location: 'Pune, India',
    type: 'Full-Time',
    description: 'Manage chat and email support with timely resolutions.',
    category: 'Customer Service'
  },
];

const categories = [...new Set(jobs.map(job => job.category))];
const locations = [...new Set(jobs.map(job => job.location))];

const CareersPage = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleApply = () => {
    router.push('/contact');
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || job.category === selectedCategory;
    const matchesLocation = selectedLocation === '' || job.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#D2BE60]">Join Our Team</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Discover exciting career opportunities and grow with us
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <div className="bg-gray-800 rounded-full p-1 inline-flex items-center">
              <span className="bg-[#D2BE60] text-black rounded-full w-10 h-10 flex items-center justify-center">
                1
              </span>
              <span className="px-3 text-gray-300">Find a role</span>
            </div>
            <div className="bg-gray-800 rounded-full p-1 inline-flex items-center">
              <span className="bg-[#D2BE60] text-black rounded-full w-10 h-10 flex items-center justify-center">
                2
              </span>
              <span className="px-3 text-gray-300">Apply online</span>
            </div>
            <div className="bg-gray-800 rounded-full p-1 inline-flex items-center">
              <span className="bg-[#D2BE60] text-black rounded-full w-10 h-10 flex items-center justify-center">
                3
              </span>
              <span className="px-3 text-gray-300">Interview</span>
            </div>
            <div className="bg-gray-800 rounded-full p-1 inline-flex items-center">
              <span className="bg-[#D2BE60] text-black rounded-full w-10 h-10 flex items-center justify-center">
                4
              </span>
              <span className="px-3 text-gray-300">Get hired!</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search and Filter Section */}
      <div className="bg-black py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg -mt-16 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[#D2BE60] mb-2">Search Jobs</label>
                <input
                  type="text"
                  placeholder="Search position or keyword"
                  className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2BE60]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[#D2BE60] mb-2">Category</label>
                <select
                  className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2BE60]"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[#D2BE60] mb-2">Location</label>
                <select
                  className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2BE60]"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="">All Locations</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Jobs Section */}
      <div className="min-h-screen bg-black text-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#D2BE60]">Current Openings</h2>
            <p className="text-gray-400">{filteredJobs.length} positions available</p>
          </div>
          
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <div className="mb-6 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">No matching positions found</h3>
              <p className="text-gray-400">Try changing your search criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-[#D2BE60] transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-white group-hover:text-[#D2BE60] transition-colors">
                      {job.title}
                    </h2>
                    <span className="bg-gray-700 text-[#D2BE60] text-xs py-1 px-3 rounded-full">
                      {job.category}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">{job.type}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{job.description}</p>
                  
                  <button
                    onClick={handleApply}
                    className="w-full md:w-auto bg-transparent border-2 border-[#D2BE60] text-[#D2BE60] px-6 py-2 rounded-lg hover:bg-[#D2BE60] hover:text-black transition-colors duration-300 font-medium flex items-center justify-center group-hover:scale-105 transition-transform"
                  >
                    Apply Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Why Join Us Section */}
      <div className="bg-gray-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#D2BE60]">Why Join Our Team?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gray-800 rounded-full p-4 inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D2BE60]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Growth Opportunities</h3>
              <p className="text-gray-400">Clear career path with regular promotions and opportunities to develop your skills</p>
            </div>
            
            <div className="bg-black rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gray-800 rounded-full p-4 inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D2BE60]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Amazing Team</h3>
              <p className="text-gray-400">Join a diverse and supportive team that values collaboration and innovation</p>
            </div>
            
            <div className="bg-black rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gray-800 rounded-full p-4 inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D2BE60]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Competitive Benefits</h3>
              <p className="text-gray-400">Enjoy competitive salary, health insurance, flexible hours, and other great perks</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Application Process */}
      <div className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#D2BE60]">Our Application Process</h2>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-700 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-700">
                <div className="bg-[#D2BE60] rounded-full w-12 h-12 flex items-center justify-center mx-auto -mt-10 mb-4 text-black font-bold">1</div>
                <h3 className="text-lg font-bold mb-2 text-white">Apply Online</h3>
                <p className="text-gray-400">Submit your application through our careers page</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-700">
                <div className="bg-[#D2BE60] rounded-full w-12 h-12 flex items-center justify-center mx-auto -mt-10 mb-4 text-black font-bold">2</div>
                <h3 className="text-lg font-bold mb-2 text-white">Initial Screening</h3>
                <p className="text-gray-400">Our recruiters review applications and schedule initial calls</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-700">
                <div className="bg-[#D2BE60] rounded-full w-12 h-12 flex items-center justify-center mx-auto -mt-10 mb-4 text-black font-bold">3</div>
                <h3 className="text-lg font-bold mb-2 text-white">Interview Process</h3>
                <p className="text-gray-400">Technical and cultural fit interviews with the team</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-700">
                <div className="bg-[#D2BE60] rounded-full w-12 h-12 flex items-center justify-center mx-auto -mt-10 mb-4 text-black font-bold">4</div>
                <h3 className="text-lg font-bold mb-2 text-white">Job Offer</h3>
                <p className="text-gray-400">Successful candidates receive offers to join our team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Don&apos;t see the perfect role?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We&apos;re always looking for talented individuals to join our team. 
            Send us your resume and we&apos;ll keep you in mind for future opportunities.
          </p>
          <button
            onClick={handleApply}
            className="bg-[#D2BE60] text-black px-8 py-3 rounded-lg hover:bg-yellow-500 transition font-medium text-lg"
          >
            Submit Your Resume
          </button>
        </div>
      </div>
      
      <TestimonialSlider />
      <Footer />
    </>
  );
};

export default CareersPage;