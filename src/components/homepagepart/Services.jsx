import React from "react";
import { Link } from "react-router-dom";
import higher from './higher.png';
import lower from './lower.png';
import { FaPenFancy, FaLandmark, FaUsers } from "react-icons/fa6";
import { FaQuestionCircle } from 'react-icons/fa'; 


const Services = () => {
  return (
    <div className="relative bg-white text-black py-10 px-4 sm:px-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-right opacity-10"
        style={{ backgroundImage: `url(${higher})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading + Features */}
        <div className="mb-10">
          <div className="flex items-center mb-2">
            <div
              className="w-3 h-3 bg-[#C08729] transform rotate-90"
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            ></div>
            <div className="h-[2px] bg-[#C08729] w-20 mx-2"></div>
            <p className="text-[#C08729] font-medium">Features</p>
          </div>
          <h1 className="text-4xl font-bold font-superclarendon" >Our Services</h1>
          <p className="text-gray-700 mt-2">
            Download our app to get the best legal service
          </p>
        </div>

        {/* Services Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="w-full sm:w-[300px] bg-white shadow-lg rounded-md p-6">
            <div className="text-[#F26727] text-3xl mb-4">
              <FaLandmark />
            </div>
            <h2 className="text-lg font-semibold mb-2">Find your Lawyer</h2>
            <p className="text-sm text-gray-600 mb-4">
              Connect with trusted legal experts near you in seconds.
            </p>
            <Link to="/find-lawyer" className="text-black text-sm font-semibold hover:text-[#C08729]">
              READ MORE →
            </Link>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-[300px] bg-white shadow-lg rounded-md p-6">
            <div className="text-[#F26727] text-3xl mb-4">
              <FaUsers />
            </div>
            <h2 className="text-lg font-semibold mb-2">Validate your legal documents</h2>
            <p className="text-sm text-gray-600 mb-4">
              Instant document verification—secure, reliable, court-compliant.
            </p>
            <Link to="/validate" className="text-black text-sm font-semibold hover:text-[#C08729]">
              READ MORE →
            </Link>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-[300px] bg-white shadow-lg rounded-md p-6">
            <div className="text-[#F26727] text-3xl mb-4">
              <FaPenFancy />
            </div>
            <h2 className="text-lg font-semibold mb-2">Dispute Resolution Tool</h2>
            <p className="text-sm text-gray-600 mb-4">
              Resolve legal conflicts faster with guided online solutions.
            </p>
            <Link to="/resolution" className="text-black text-sm font-semibold hover:text-[#C08729]">
              READ MORE →
            </Link>
          </div>

          {/* Card 4 */}
          <div className="w-full sm:w-[300px] bg-white shadow-lg rounded-md p-6">
            <div className="text-[#F26727] text-3xl mb-4">
              <FaQuestionCircle />
            </div>
            <h2 className="text-lg font-semibold mb-2">Advice</h2>
            <p className="text-sm text-gray-600 mb-4">
              Get expert answers to your legal questions anytime.
            </p>
            <Link to="/contact-us" className="text-black text-sm font-semibold hover:text-[#C08729]">
              READ MORE →
            </Link>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-2 bg-green-700 text-white rounded-full shadow-md hover:bg-green-800 transition">
            Download our app
          </button>
        </div>

        {/* Bottom Image */}
        <div className="flex justify-center mt-10">
          <img
            src={lower}
            alt="Exploring India's New Criminal Laws"
            className="w-[80%] max-w-[800px] shadow-xl rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
