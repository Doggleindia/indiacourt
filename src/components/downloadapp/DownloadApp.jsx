import React, { useState, useEffect } from "react";
import phone1 from "../../assets/home/phone1.png";
import QR from "../../assets/home/QR.png";

const DownloadApp = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 15000); 

    return () => clearTimeout(timer); 
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white w-[90%] max-w-3xl rounded-r-3xl shadow-lg flex flex-wrap md:flex-nowrap relative">
        <div className="bg-[#056B38] p-6 flex items-center justify-center w-full md:w-1/2 md:rounded-r-3xl">
          <img
            src={phone1}
            alt="Phone Mockup"
            className="w-40 sm:w-52 md:w-60 drop-shadow-lg"
          />
        </div>

        <div className="p-8 flex flex-col items-center text-center w-full md:w-1/2 relative">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-3 right-7 text-[#BF9874] hover:text-black text-xl"
          >
            X
          </button>

          <h2 className="text-2xl font-bold text-[#001025] mb-3">
            Download Our App
          </h2>
          <p className="text-[#001025] text-sm leading-relaxed mb-3">
            Unlock Exclusive Legal Tools And Resources. Download Our App Now To
            Access Advanced Features And Streamline Your Legal Needs!
          </p>
          <img src={QR} alt="QR Code" className="w-32 sm:w-40 mb-3" />
          <p className="text-[#001025] text-sm leading-relaxed">
            Download The App From Our Site And Log In To Enjoy 1 To 1 Free
            Consultation!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
