import React from "react";
import { Link } from "react-router-dom"; // Import Link
import higher from './higher.png';
import lower from './lower.png';
import { FaPenFancy, FaLandmark, FaUsers } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="relative bg-white text-black p-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-right opacity-10"
        style={{ backgroundImage: `url(${higher})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Features Section */}
        <div className="text-center mb-8">
          <div className="mt-8">
            <div className="flex items-center ml-[7vw]">
              <div
                className="w-3 h-3 bg-[#C08729] transform rotate-90"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              ></div>
              <div className="h-[2px] bg-[#C08729] w-20"></div>
              <div>
                <p className="text-[#C08729] ml-[.5vw]">Features</p>
              </div>
            </div>
          </div>
          <h1 className="text-3xl text-left ml-[7vw] font-bold">Our Services</h1>
          <p className="text-black ml-[7vw] text-left mt-2">
            Download our app to get the best legal service
          </p>
        </div>

        {/* Services Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="w-full sm:w-[300px] bg-white shadow-lg rounded-md p-6">
            <div className="flex items-center justify-start mb-4">
              <div className="text-[#C08729] text-3xl">
                <FaLandmark />
              </div>
            </div>
            <h2 className="text-lg font-semibold mb-2">Find your Lawyer</h2>
            <p className="text-sm text-gray-600">
              Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat...
            </p>
            <Link to="/find-lawyer" className="text-black text-sm mt-4 cursor-pointer">
              READ MORE →
            </Link>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-[300px] bg-white shadow-lg rounded-md p-6">
            <div className="flex items-center justify-start mb-4">
              <div className="text-[#C08729] text-3xl">
                <FaUsers />
              </div>
            </div>
            <h2 className="text-lg font-semibold mb-2">Validate your legal documents</h2>
            <p className="text-sm text-gray-600">
              Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec...
            </p>
            <Link to="/validate" className="text-black text-sm mt-4 cursor-pointer">
              READ MORE →
            </Link>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-[300px] bg-white shadow-lg rounded-md p-6">
            <div className="flex items-center justify-start mb-4">
              <div className="text-[#C08729] text-3xl">
                <FaPenFancy />
              </div>
            </div>
            <h2 className="text-lg font-semibold mb-2">Dispute Resolution Tool</h2>
            <p className="text-sm text-gray-600">
              Potenti porta mauris nec vulputate. Massa sagittis lectus ut...
            </p>
            <Link to="/resolution" className="text-black text-sm mt-4 cursor-pointer">
              READ MORE →
            </Link>
          </div>

          {/* Card 4 */}
          <div className="w-full sm:w-[300px] bg-white shadow-lg rounded-md p-6">
            <div className="flex items-center justify-start mb-4">
              <div className="text-[#C08729] text-3xl">
                <FaPenFancy />
              </div>
            </div>
            <h2 className="text-lg font-semibold mb-2">Advice</h2>
            <p className="text-sm text-gray-600">
              Potenti porta mauris nec vulputate. Massa sagittis lectus ut...
            </p>
            <Link to="/legal-advice" className="text-black text-sm mt-4 cursor-pointer">
              READ MORE →
            </Link>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-green-700 text-white rounded-full shadow-lg hover:bg-green-800">
            Download our app
          </button>
        </div>

        {/* Bottom Image */}
        <div className="flex justify-center mt-6">
          <img
            src={lower}
            alt="Exploring India's New Criminal Laws"
            className="w-[80%] max-w-[800px] shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
