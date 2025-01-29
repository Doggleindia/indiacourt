import React from "react";
import books from "./books.png";

const Connect = () => {
  return (
    <div className="relative bg-[#003315] text-white p-6 flex items-center justify-center ">
      {/* Absolute Image */}
      <img
        src={books}
        alt="Books and Hammer"
        className="absolute right-64 top-[9.9vw] max-sm:scale-[.5] max-sm:top-[46vw] max-sm:left-[60vw] bottom-24 w-48 h-auto"
      />

      {/* Centered Content */}
      <div className="text-center">
        <div className="flex gap-3 justify-center">
          {/* Top Line with Right Diamond */}
          <div className="flex items-center justify-center mb-4">
            <div
              className="w-3 h-3 bg-[#C08729] transform rotate-90"
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            ></div>
            {/* Line */}
            <div className="h-[0.2vw] bg-[#C08729] w-20"></div>
          </div>

          {/* Connect Text */}
          <p className="text-base text-[#BF9874] uppercase mb-4">Connect</p>

          {/* Line with Diamonds */}
          <div className="flex items-center justify-center mb-4">
            <div className="h-[0.2vw] bg-[#C08729] w-20"></div>
            <div
              className="w-3 h-3 bg-[#C08729] transform rotate-90"
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            ></div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl lg:text-4xl font-bold mb-4">Make An Informed Decision</h1>
        <p className="text-sm lg:text-base mb-4">
          We help you connect with credible advocates for handling all your legal needs... <br />
          Easy, Fast & Confidential. Download our app.
        </p>

        {/* Diamonds Below Text */}
        <div className="flex justify-center gap-2 items-center max-sm:mb-4 mb-2">
          <div
            className="w-3 h-3 bg-[#C08729] transform rotate-90"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          ></div>
          <div
            className="w-3 h-3 bg-[#C08729] transform rotate-90"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          ></div>
          <div
            className="w-3 h-3 bg-[#C08729] transform rotate-90"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          ></div>
        </div>

        <p className="text-sm lg:text-base">For more legal info, subscribe to our newsletter.</p>

        {/* Bottom Line with Diamonds */}
        <div className="flex items-center justify-center mt-4">
          <div
            className="w-3 h-3 bg-[#C08729] transform rotate-90"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          ></div>
          <div className="h-[0.1vw] bg-[#C08729] w-20"></div>
          <div
            className="w-3 h-3 bg-[#C08729] transform rotate-90"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
