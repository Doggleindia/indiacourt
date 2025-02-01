import { Box, Flex,  IconButton, Select, Input, InputGroup, InputRightElement, HStack, VStack, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdRectangle } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from '../../assets/home/logo.png';

const Marquee = () => {
  return (
    <motion.div
      className="overflow-hidden whitespace-nowrap "
      animate={{ x: ["100%", "-100%"] }}
      transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
    >
      <span className="mx-4 text-black font-semibold">General Legal Advice</span>
      <span className="mx-4 text-black font-semibold">General Legal Advice</span>
      <span className="mx-4 text-black font-semibold">General Legal Advice</span>
    </motion.div>
  );
};

const Navbar = () => {
  return (
    <Box  as="nav" className="position-fixed top-0 z-50 bg-white shadow-md bg-transparent" position={'fixed'} w="100%" mx={3}>
      <HStack justify="start" className="">
      <Box className="text-2xl font-bold text-yellow-700">

        <Image src={logo} alt="logo" w="100px" />
      </Box>
      
      <Flex  align="center" justify="space-between" p={4} className=" border-l  border-yellow-600 ">
      <VStack>
      <Marquee />    
        <Flex gap={6} className="hidden md:flex border-t border-yellow-600 w-[100%] ">
          <Link to="/" className="hover:text-yellow-700"><HStack> <MdRectangle/>  <Text> Home </Text></HStack> </Link>
          <Link to="/" className="hover:text-yellow-700"><HStack> <MdRectangle/>  <Text> Legal Insights </Text></HStack> </Link>
          <Link to="/" className="hover:text-yellow-700"><HStack> <MdRectangle/>  <Text> Case library</Text></HStack> </Link>
          <Link to="/" className="hover:text-yellow-700"><HStack> <MdRectangle/>  <Text> Laws & Acts </Text></HStack> </Link>
          <Link to="/" className="hover:text-yellow-700"><HStack> <MdRectangle/>  <Text> Join our legal team  </Text></HStack> </Link>
          <Link to="/" className="hover:text-yellow-700"><HStack> <MdRectangle/>  <Text> OUR SERVICES </Text></HStack> </Link>
          <Link to="/" className="hover:text-yellow-700"><HStack> <MdRectangle/>  <Text> RESOURSES </Text></HStack> </Link>
          <Link to="/" className="hover:text-yellow-700"><HStack> <MdRectangle/>  <Text> Contact </Text></HStack> </Link>
          <Link to="/" className="hover:text-yellow-700"><HStack> <MdRectangle/>  <Text> Home </Text></HStack> </Link>
          <Link to="/" className="hover:text-yellow-700"><HStack> <MdRectangle/>  <Text> <Select size="sm" className="border-gray-300">
            <option>English</option>
            <option>Hindi</option>
          </Select> </Text></HStack> </Link>
          
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
