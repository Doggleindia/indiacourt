import { Box, VStack, HStack, Text } from "@chakra-ui/react";

const Header = ({ headtitle, title, description }) => {
  return (
    <Box
      display="flex"
      justifyContent={{ base: "center", md: "space-between" }}
      width="100%"
      textAlign={{ base: "center", md: "left" }}
      py={{ base: 2, xl: 8 }}
    >
      <HStack width="100%" align="center">
        <VStack gap={"0"} align="start" maxW="600px" flex="1">
          <HStack>
            <div
              className="w-3 h-3 bg-[#C08729] transform rotate-90"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            ></div>
            <div className="h-[2px] bg-[#C08729] w-20"></div>

            <Text
              fontSize={{ base: "sm", xl: "sm" }}
              color="#C08729"
              fontWeight="bold"
            >
              {headtitle}
            </Text>
          </HStack>
          <Text fontSize={{ base: "4xl", xl: "4xl" }} fontWeight="bold">
            {title}
          </Text>
          {/* Description */}
          <Text
            fontSize={{ base: "sm", xl: "md" }}
            textAlign={{ base: "left" }}
            color="gray.700"
          >
            {description}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Header;
