import React, { useState, useEffect } from "react";
import newsletterImage from "../../assets/home/record.png"; // Replace with actual image

const NewsletterPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); 

    return () => clearTimeout(timer); 
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white w-[90%] max-w-3xl rounded-r-3xl shadow-lg flex flex-wrap md:flex-nowrap relative">
       
        <div className="bg-[#056B38] p-6 flex items-center justify-center w-full md:w-1/2 md:rounded-r-3xl">
          <img
            src={newsletterImage}
            alt="Newsletter Preview"
            className="w-40 sm:w-52 md:w-60 drop-shadow-lg"
          />
        </div>

        
        <div className="p-8 flex flex-col items-center text-center w-full md:w-1/2 relative">
          
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-3 right-6 text-[#BF9874] hover:text-black text-xl"
          >
            X
          </button>

          <h2 className="text-2xl font-bold text-[#001025] mt-16 max-sm:mt-8">
            Stay Updated With India Court
          </h2>
          <p className="text-[#001025] text-sm leading-relaxed mb-4">
            Subscribe To Our Newsletter For The Legal Updates, Highlights, Topics And More.
          </p>
          <button className="bg-[#056B38] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#034f28]">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
