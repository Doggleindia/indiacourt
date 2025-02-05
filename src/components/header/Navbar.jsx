import { Box, Flex,  HStack, VStack, Text, Image, Select } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { GoSearch } from "react-icons/go";
import { FaSquareFull } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from '../../assets/home/logo.png';
import { useEffect, useState } from "react";

const Marquee = () => {
  return (
    <motion.div
      className="py-4 inline-block whitespace-nowrap"
      animate={{ x: ["100%", "-100%"] }}
      transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
    >
      <span className="mx-4 text-black font-semibold">General Legal Advice</span>
      <span className="mx-4 text-black font-semibold">General Legal Advice</span>
      <span className="mx-4 text-black font-semibold">General Legal Advice</span>
    </motion.div>
  );
};

const Rhombus = () => <Box className="rotate-45 pt-0.5"><FaSquareFull size={9} /></Box>

const Navbar = () => {
  const [bg, setBg] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setBg("#d4d3d8");
      else setBg("transparent");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box  as="nav" className="fixed top-0 z-50 pl-6" bg={bg} w="100%">
      <HStack justify="start" gap={6}>
      <Box className="text-2xl font-bold text-yellow-700">

        <Image src={logo} alt="logo" w="100px" />
      </Box>
      
      <Flex justify="space-between" className="overflow-hidden flex-1 border-l border-yellow-600">
      <VStack align="start" gap={0} className="w-full">
      <Marquee />    
        <Flex gap={6} justify="space-between" flexWrap="wrap" align="center" className="p-4 pl-6 w-full border-t border-yellow-600" >
          <Link to="/" className="hover:text-yellow-700"><HStack> <Rhombus/>  <Text> HOME </Text></HStack> </Link>
          <Link to="/" className="hover:text-yellow-700"><HStack> <Rhombus/>  <Text> LEGAL INSIGHTS </Text></HStack> </Link>
          <Link to="/" className="hover:text-yellow-700"><HStack> <Rhombus/>  <Text> CASE LIBRARY</Text></HStack> </Link>
          <Link to="/" className="hover:text-yellow-700"><HStack> <Rhombus/>  <Text> LAWS & ACTS </Text></HStack> </Link>
          <Link to="/" className="hover:text-yellow-700"><HStack> <Rhombus/>  <Text> JOIN OUR LEGAL TEAM  </Text></HStack> </Link>
          <Link to="/" className="hover:text-yellow-700"><HStack> <Rhombus/>  <Text> OUR SERVICES </Text></HStack> </Link>
          <Link to="/" className="hover:text-yellow-700"><HStack> <Rhombus/>  <Text> RESOURCES </Text></HStack> </Link>
          <Link to="/" className="hover:text-yellow-700"><HStack> <Rhombus/>  <Text> CONTACT </Text></HStack> </Link>
          
          <Flex gap={0} align="center">
            <Box className="border border-yellow-700 p-1 rounded"><GoSearch color="#C08729" width={20} height={20}/></Box>
            <Link className="hover:text-yellow-700">  <Text> <Select size="sm" style={{border:0}}>
              <option>English</option>
              <option>Hindi</option>
            </Select> </Text> </Link>
          </Flex>
        </Flex>
        {/* <Flex align="center" gap={3}>
          <InputGroup className="hidden md:flex">
            <Input placeholder="Search" className="border-gray-300" />
            <InputRightElement>
              <IconButton aria-label="Search" icon={<FaSearch />} size="sm" />
            </InputRightElement>
          </InputGroup>
          <Select size="sm" className="border-gray-300">
            <option>English</option>
            <option>Hindi</option>
          </Select>
        </Flex> */}
      </VStack>
      </Flex>
      </HStack>
    </Box>
  );
};

export default Navbar;
