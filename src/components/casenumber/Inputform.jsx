import {
  Box,
  Button,
  HStack,
  Input,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import React from "react";

const Inputform = () => {
  return (
    <Box mx="auto" p={4} border={"1px solid #BF987466"} width="100%">
      <VStack width="100%" spacing={4} textAlign="center">
        {/* Case Type */}
        <Box width="100%" textAlign="left">
          <Text fontSize="sm" fontWeight="bold">
            Case Type
          </Text>
          <Input
            name="case"
            placeholder="Enter case type"
            border="none"
            borderBottom="2px solid #C08729"
            _focus={{ boxShadow: "none", borderBottom: "2px solid #C08729" }}
            rounded="none"
            px={2}
            width="100%"
          />
        </Box>

        {/* First Row - Two Inputs Side by Side */}
        <HStack
          width="100%"
          spacing={4}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box width="100%" textAlign="left">
            <Text fontSize="sm" fontWeight="bold">
              Case Number
            </Text>
            <Input
              name="caseNumber"
              placeholder="Enter case number"
              border="none"
              borderBottom="2px solid #C08729"
              _focus={{ boxShadow: "none", borderBottom: "2px solid #C08729" }}
              rounded="none"
              px={2}
            />
          </Box>

          <Box width="100%" textAlign="left">
            <Text fontSize="sm" fontWeight="bold">
              Case Year
            </Text>
            <Input
              name="caseYear"
              placeholder="Enter case year"
              border="none"
              borderBottom="2px solid #C08729"
              _focus={{ boxShadow: "none", borderBottom: "2px solid #C08729" }}
              rounded="none"
              px={2}
            />
          </Box>
        </HStack>

        {/* Message Input */}
        <Box width="100%" textAlign="left">
          <Text fontSize="sm" fontWeight="bold">
            Message
          </Text>
          <Input
            name="message"
            placeholder="Enter your message"
            border="none"
            borderBottom="2px solid #C08729"
            _focus={{ boxShadow: "none", borderBottom: "2px solid #C08729" }}
            rounded="none"
            px={2}
            width="100%"
          />
        </Box>

        {/* CAPTCHA */}
        <Box width="100%" textAlign="left">
          <Text fontSize="sm" fontWeight="bold">
            Captcha
          </Text>
          <HStack width="100%">
            <Image src="https://via.placeholder.com/100x40" alt="CAPTCHA" />
            <Input
              name="captcha"
              placeholder="Enter CAPTCHA"
              border="none"
              borderBottom="2px solid #C08729"
              _focus={{ boxShadow: "none", borderBottom: "2px solid #C08729" }}
              rounded="none"
              px={2}
            />
          </HStack>
        </Box>

        {/* Buttons */}
        <HStack>
          <Button
            backgroundColor="#056B38"
            border="1px solid #000000"
            size="md"
            color="#ffffff"
            mt={4}
            px={6}
            _hover={{ bg: "#C08729", color: "#fff", borderColor: "#C08729" }}
          >
            Send Me
          </Button>
          <Button
            backgroundColor="transparent"
            border="1px solid #000000"
            size="md"
            color="#000000"
            mt={4}
            px={6}
            _hover={{ bg: "#C08729", color: "#fff", borderColor: "#C08729" }}
          >
            Reset
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Inputform;
