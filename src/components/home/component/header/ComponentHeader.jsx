import { Box, VStack, HStack, Text, Spacer } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ComponentHeader = ({ headtitle, title, description, to }) => {
  return (
    <Box
      display="flex"
      justifyContent={{ base: "center", md: "space-between" }}
      width="100%"
      textAlign={{ base: "center", md: "left" }}
      py={8}
    >
      <HStack width="100%" align="center">
        {/* Left Side: Title + Description */}
        <VStack
          align="start"
          maxW={{ base: "270px", xl: "600px" }}
          textAlign={"left"}
        >
          {/* Title + Left Line */}
          <HStack spacing={0}>
            <div
              className="w-3 h-3 bg-[#C08729] transform rotate-90"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            ></div>
            {/* Line */}
            <div className="h-[2px] bg-[#C08729] w-20"></div>

            <Text
              fontSize={{ base: "sm", md: "sm" }}
              color="#C08729"
              fontWeight="bold"
              ml={2}
            >
              {headtitle}
            </Text>
          </HStack>
          <Text fontSize={{ base: "27px", md: "4xl" }} fontWeight="bold" >
            {title}
          </Text>
          {/* Description */}
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.700">
            {description}
          </Text>
        </VStack>
        <Spacer /> {/* Pushes "See more" to the right */}
        {/* Right Side: See More Button */}
        <Link to={to}>
          <HStack
            as="button"
            spacing={2}
            align="center"
            color="gray.700"
            cursor="pointer"
            fontSize={{ base: "sm", md: "md" }}
            _hover={{ color: "#C08729" }}
          >
            <Text whiteSpace="nowrap">See more</Text>
            <FaArrowRight />
          </HStack>
        </Link>
      </HStack>
    </Box>
  );
};

export default ComponentHeader;
