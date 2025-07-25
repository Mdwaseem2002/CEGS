import React from 'react';
import { Mail } from 'lucide-react';
import Footer from './Footer';

const Banner = () => {
  return (
    <div className="">
      {/* Top gradient banner */}
      <div className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-gradient-to-r from-black to-grey text-white py-2">
        <div className="w-full flex items-center justify-center px-4">
          <p className="text-sm md:text-base flex items-center space-x-2 text-center pb-2">
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

      {/* Main dark banner */}
      <div className="w-full bg-[#1e213a] px-4 py-6">
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center">
    <div className="text-white text-xl md:text-2xl font-semibold max-w-xl text-center md:text-left">
    Build. Grow. Excel. – Your success powered by the right people and scalable talent solutions.
    </div>
    
    <div className="flex items-center mt-4 md:mt-0">
      <div className="flex items-center gap-2">
      <Mail className="text-white w-5 h-5" />
        <div className="text-white uppercase text-sm">
          EMAIL
        </div>
        
        <a 
          href="mailto:contact@pentacloud.in"
          className="text-[#0288d1] hover:text-[#03a9f4] transition-colors"
        >
          info@careerexpertglobalsolution.com
        </a>
      </div>
    </div>
  </div>
</div>
<Footer />

    </div>
  );
};

export default Banner;