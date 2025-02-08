import React from "react";
// Replace with your actual background image
import higher from "./higher.png";

const HelpLine = () => {
  const helplines = [
    { name: "National Women's Rights", number: "7827170170" },
    { name: "Anti Corruption", number: "102" },
    { name: "Wildlife", number: "100 or 112" },
    { name: "Electrical Emergency", number: "108" },
    { name: "Smoking and Alcohol", number: "1091" },
    { name: "Cancer Helpline", number: "1098" },
    { name: "Domestic Abuse", number: "108" },
    { name: "Drugs Complaint", number: "139" },
  ];

  return (
    <div
      className="relative bg-cover bg-center text-white p-6 "
      style={{
        backgroundImage: `url(${higher})`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#00000066]"></div>

      {/* Content */}
      <div className="relative z-10 p-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="mt-8 max-sm:ml-[-8vw] ml-[-9vw]">
              {/* Line with diamond ends */}
              <div className="flex items-center ml-[9vw] ">
                {/* Left Diamond */}
                <div
                  className="w-3 h-3 bg-[#C08729] transform rotate-90"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  }}
                ></div>
                {/* Line */}
                <div className="h-[2px] bg-[#C08729] w-20"></div>
                {/* Right Diamond */}
                <div>
                  <p className="text-[#C08729] ml-[.5vw]">HelpLine</p>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold uppercase">Helpline numbers</h2>
            <p className="text-sm max-sm:text-[1.5vw]">
              Sidestep the lawyers with do-it-yourself books
            </p>
          </div>
          <a
            href="/help-line"
            className="text-sm text-white flex font-bold items-center max-sm:mt-[12vw] gap-1"
          >
            See more →
          </a>
        </div>

        {/* Helpline Numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {helplines.map((helpline, index) => (
            <div
              key={index}
              className="bg-white text-black p-4 rounded shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="font-semibold text-center">{helpline.name}</h3>
              <p className="text-center font-medium">{helpline.number}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpLine;
