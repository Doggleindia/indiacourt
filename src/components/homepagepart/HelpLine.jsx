import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHelpline } from "../../redux/features/helplineSlice";
import { Link } from "react-router-dom";

const HelpLine = () => {
  const dispatch = useDispatch();
  const { helpline } = useSelector((state) => state.helpline);

  useEffect(() => {
    dispatch(fetchHelpline());
  }, [dispatch]);

  return (
    <div
      className="relative bg-cover bg-center text-white py-16 px-4 sm:px-10"
      style={{
        backgroundImage: `url(https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1740225621718_HELPLINE.png)`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center mb-2">
            <div
              className="w-3 h-3 bg-[black] transform rotate-90"
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            ></div>
            <div className="h-[2px] bg-[black] w-20 mx-2"></div>
            <p className="text-[black] font-medium">HelpLine</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-4xl font-superclarendon font-bold ">Helpline Numbers</h2>
              <p className="text-sm mt-1 text-gray-200">
                Need help? Call the appropriate helpline for fast, reliable legal support.
              </p>
            </div>
            <Link
              to="/help-line"
              className="text-sm text-white font-semibold mt-4 sm:mt-0 hover:underline"
            >
              See more →
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {helpline.slice(0, 8).map((item, index) => (
            <div
              key={index}
              className="bg-white text-black p-5 rounded shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-center mb-2">{item.title}</h3>
              <p className="text-center text-sm font-medium">{item.number}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpLine;
