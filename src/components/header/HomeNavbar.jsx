import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Image,
  Select,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaSquareFull } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../assets/home/logo.png";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

// Marquee Component
const Marquee = () => {
  return (
    <motion.div
      className="py-4 inline-block whitespace-nowrap"
      animate={{ x: ["100%", "-100%"] }}
      transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
    >
      <span className="mx-4 text-white font-semibold">We are here to create awareness * Simplifying the legal process for every Indian * Available 24/7 *</span>
      <span className="mx-4 text-white font-semibold">We are here to create awareness * Simplifying the legal process for every Indian * Available 24/7 *</span>
      <span className="mx-4 text-white font-semibold">We are here to create awareness * Simplifying the legal process for every Indian * Available 24/7 *</span>
    </motion.div>
  );
};

// Rhombus Icon
const Rhombus = () => (
  <Box className="rotate-45 pt-0.5">
    <FaSquareFull size={9} />
  </Box>
);

// Navigation Links
const NavLinks = () => {
  return (
    <>
      <Link to="/" className="hover:text-yellow-700">
        <HStack>
          <Rhombus /> <Text> HOME </Text>
        </HStack>
      </Link>
      <Link to="/legal-topics" className="hover:text-yellow-700">
        <HStack>
          <Rhombus /> <Text> LEGAL INSIGHTS </Text>
        </HStack>
      </Link>
      <a
        href="https://services.ecourts.gov.in/ecourtindia_v6/"
        className="hover:text-yellow-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        <HStack>
          <Rhombus /> <Text> CASE LIBRARY </Text>
        </HStack>
      </a>
      <Link to="/acts" className="hover:text-yellow-700">
        <HStack>
          <Rhombus /> <Text> LAWS & ACTS </Text>
        </HStack>
      </Link>
      <Link to="/join-as-lawyer" className="hover:text-yellow-700">
        <HStack>
          <Rhombus /> <Text> JOIN OUR LEGAL TEAM </Text>
        </HStack>
      </Link>
      <Link to="/find-lawyer" className="hover:text-yellow-700">
        <HStack>
          <Rhombus /> <Text> OUR SERVICES </Text>
        </HStack>
      </Link>
      <Link to="/dictionary" className="hover:text-yellow-700">
        <HStack>
          <Rhombus /> <Text> DICTIONARY </Text>
        </HStack>
      </Link>
      <Link to="/contact-us" className="hover:text-yellow-700">
        <HStack>
          <Rhombus /> <Text> CONTACT </Text>
        </HStack>
      </Link>
      <Flex gap={0} align="center">
        <Link className="hover:text-yellow-700">
          <Text className="w-max">
            <Select
              size="sm"
              style={{ border: 0, outline: "none", background: "transparent" }}
              onChange={(e) => {
                const lang = e.target.value;
                const googleDropdown = document.querySelector(".goog-te-combo");
                if (googleDropdown) {
                  googleDropdown.value = lang;
                  googleDropdown.dispatchEvent(new Event("change"));
                } else {
                  console.error("Google Translate dropdown not found!");
                }
              }}
            >
              <option value="en">English</option>
              <option value="hi">हिंदी (Hindi)</option>
              <option value="bn">বাংলা (Bengali)</option>
              <option value="ta">தமிழ் (Tamil)</option>
              <option value="te">తెలుగు (Telugu)</option>
              <option value="mr">मराठी (Marathi)</option>
              <option value="gu">ગુજરાતી (Gujarati)</option>
              <option value="pa">ਪੰਜਾਬੀ (Punjabi)</option>
              <option value="ml">മലയാളം (Malayalam)</option>
              <option value="kn">ಕನ್ನಡ (Kannada)</option>
              <option value="or">ଓଡ଼ିଆ (Odia)</option>
              <option value="as">অসমীয়া (Assamese)</option>
              <option value="ur">اردو (Urdu)</option>
              <option value="sd">سنڌي (Sindhi)</option>
              <option value="ks">کٲشُر (Kashmiri)</option>
              <option value="ne">नेपाली (Nepali)</option>
              <option value="sa">संस्कृतम् (Sanskrit)</option>
              <option value="mai">मैथिली (Maithili)</option>
              <option value="mni">মৈতৈলোন (Manipuri)</option>
            </Select>
          </Text>
        </Link>
      </Flex>
    </>
  );
};

// Main Navbar Component
const HomeNavbar = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 1280px)");
  const [menuOpen, setMenuOpen] = useState(false);

  if (isSmallScreen)
    return (
      <Box
        as="nav"
        className="fixed top-0 z-50"
        color="white"
        bg="#07070B"
        w="100%"
      >
        <HStack justify="start" gap={6}>
          <Flex justify="space-between" className="overflow-hidden flex-1">
            <VStack align="start" gap={0} className="w-full">
              <Flex className="w-full py-2 px-4 items-center justify-between">
                <Box className="text-2xl font-bold text-yellow-700 pointer">
                  <Link to="/">
                    <Image src={logo} alt="logo" w="80px" />
                  </Link>
                </Box>
                <IoMdMenu
                  size={32}
                  onClick={() => setMenuOpen((prev) => !prev)}
                />
              </Flex>

              {menuOpen && (
                <VStack
                  gap={6}
                  flexWrap="wrap"
                  align="start"
                  ml="auto"
                  className="pb-2 px-2"
                >
                  <NavLinks />
                </VStack>
              )}
            </VStack>
          </Flex>
        </HStack>
      </Box>
    );

  return (
    <Box
      as="nav"
      className="fixed top-0 z-50 pl-6"
      color="white"
      bg="#07070B"
      w="100%"
    >
      <HStack justify="start" gap={6}>
        <Box className="text-2xl font-bold text-yellow-700">
          <Link to="/">
            <Image src={logo} alt="logo" w="100px" />
          </Link>
        </Box>

        <Flex
          justify="space-between"
          className="overflow-hidden flex-1 border-l border-yellow-600"
        >
          <VStack align="start" gap={0} className="w-full">
            <Marquee />
            <Flex
              gap={6}
              justify="space-between"
              align="center"
              className="p-4 pl-6 w-full border-t border-yellow-600"
            >
              <NavLinks />
            </Flex>
          </VStack>
        </Flex>
      </HStack>
    </Box>
  );
};

export default HomeNavbar;
