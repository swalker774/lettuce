import React from 'react';
import { FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#b9c6ba] text-white p-24">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between text-center lg:text-left">
        <div className="lg:order-2 mb-4 lg:mb-0 flex justify-center">
          <a 
            href="https://www.facebook.com/lettucecookllc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#3b5998]"
          >
            <FaFacebook size={48} />
          </a>
        </div>
        <div className="lg:order-1 mb-4 lg:mb-0">
          <div className="flex flex-col text-lg items-center lg:items-start">
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2" />
              <span>Lansing, MI</span>
            </div>
            <div className="flex items-center mb-2">
              <FaPhoneAlt className="mr-2" />
              <span>(517) 755-9600</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>lettucecookllc@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="lg:order-3 text-md">
          <p>&copy; 2024 All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
