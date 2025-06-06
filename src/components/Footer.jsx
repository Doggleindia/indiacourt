import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram,  FaYoutube,  FaTwitter } from "react-icons/fa";
import Line from "../assets/icons/fullpolygon_line.png";
import { Image, Text } from "@chakra-ui/react";
// import icon from "../assets/icons/icon1.png"

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#000000] px-[10vw] pt-6  pb-[10vh]" style={{color: "white"}}>
        <>
          {/* <Image src={icon} mx="auto" /> */}
          {/* <Image src='https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1740381649933_footerIcon.svg' mx="auto" /> */}
          <Text className="text-base text-center   ">
            We are here to create awareness
          </Text>
          <Image src={Line} mx="auto" mb={8} />
        </>

        <div className="container justify-center mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-[5vw] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:space-y-6">
          <div className="max-sm:w-full  max-sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 list-disc pl-[2vw] max-sm:pl-0 max-sm:list-none">
              <Link to="/find-lawyer">
                <li>Find A Lawyer</li>
              </Link>
              <Link to="/resolution">
                <li>Dispute Resolution Tool</li>
              </Link>
              <Link to={"/validate"}>
                <li>Validate Document</li>
              </Link>
              <Link to={"/contact-us"}>
                <li>Legal Advice</li>
              </Link>
            </ul>
          </div>

          {/* Information Section */}
          <div className="max-sm:w-full max-sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2 list-disc pl-[2vw] max-sm:pl-0 max-sm:list-none">
              {/* <li>Brand Story</li> */}
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Link to={"/legal-topics"}>
                <li>Legal Insights</li>
              </Link>
              {/* <Link to={"/case-number"}> */}
              <a href="https://services.ecourts.gov.in/ecourtindia_v6/" className="hover:text-yellow-700" target="_blank" rel="noopener noreferrer">
                <li>Case Library</li>
              </a>
              <a href="https://hcservices.ecourts.gov.in/ecourtindiaHC/cases/fir1.php?state_cd=9&dist_cd=1&court_code=1&stateNm=Rajasthan" className="hover:text-yellow-700" target="_blank" rel="noopener noreferrer">
                <li>FIR Status</li>
              </a>
              {/* </Link> */}
              <Link to={"/acts"}>
                <li>Laws and Acts</li>
              </Link>
              <Link to={"/resources"}>
                <li>Resources</li>
              </Link>
            </ul>
          </div>
          {/* Contact Us Section */}
          <div className="max-sm:w-full max-sm:text-left">
            <h3 className="text-lg text-left font-semibold mb-4">Contact Us</h3>
            <address className="not-italic space-y-2 max-sm:text-left">
              <p>Faridabad 
              </p>
              <p>+91 129-4030864</p>
              <p>Indiacourt1947@gmail.com</p>
              <p>Shivloklegalindiapvtltd@gmail.com</p>
              
            </address>
          </div>
          <div className="max-sm:w-full text-[white] block  max-sm:text-left">
            <h3 className="mt-5 text-lg font-medium ">Follow us</h3>
            <ul className="space-x-4 justify-start items-start pt-4 max-sm:pl-0 flex max-sm:space-y-0 flex-row max-sm:flex-row max-sm:space-x-4">
              <li>
                <a
                  href="https://www.instagram.com/INDIA.COURT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaInstagram size={26} className="text-pink-600" />
                </a>
              </li>
              {/* <li>
                <a
                  href="https://www.facebook.com/share/19HxXZyVyE/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaFacebook size={26} className="text-blue-600" />
                </a>
              </li> */}
              <li>
                <a
                  href="https://youtube.com/@INDIACOURT1947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaYoutube size={26} className="text-red-600" />
                </a>
              </li>
              <li>
                <a
                  href="@InidaCourtTWITTR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaTwitter size={26} className="text-blue-500" />
                </a>
              </li>
            </ul>
          </div>
          {/* <div></div> */}
          <p className="text-center justify-center text-[15px] mt-[10px]">WE ARE NOT AFFILIATED WITH ANY GOVERNMENT </p>
          <div className="border-t-2 md:hidden flex justify-center items-center w-full border-[#F6E8FB80]">
            <h3 className="text-[10px] text-center mt-4">
              <p>
                &copy; 2025 All rights reserved By SHIVLOK LEGAL INDIA PRIVATE LIMITED
                Powered by
                <a
                  href="https://doggleindia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                > 
                  Doggleindia
                </a>
              </p>
            </h3>
          </div>
        </div>
        <div className="border-t-2 mt-[1vw] hidden md:flex justify-center items-center w-full border-[#F6E8FB80]">
          <h3 className="text-[14px] text-center mt-4">
            <p>
              &copy; 2025 All rights reserved By SHIVLOK LEGAL INDIA PRIVATE LIMITED 
              <br /> Powered by
              <a
                href="https://doggleindia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Doggleindia
              </a>
            </p>
          </h3>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
