import { Box, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaBusinessTime, FaFileMedicalAlt, FaUser, FaUserCog } from "react-icons/fa";

const steps = [
  {
    number: <FaUser/>,
    title: "Individuals Involved in Disputes",
    description: "Whether you’re part of a contractual disagreement, family issue, or corporate conflict, this tool helps streamline the resolution process.",
  },
  {
    number: <FaUserCog/>,
    title: "Legal Professionals",
    description:
      "Lawyers and legal advisors can use the tool to support their clients with up-to-date .",
  },
  {
    number: <FaBusinessTime/>,
    title: "Businesses",
    description:
      "Companies seeking efficient methods to resolve disputes outside of court will find value in the tool’s structured approach to arbitration and mediation.",
  },
  {
    number: <FaFileMedicalAlt/>,
    title: "Mediators and Arbitrators",
    description: "Professionals in dispute resolution can utilize the tool to enhance their services with accessible resources and client support features.",
  },
];

const WhoIts = () => {
  return (
    <>
      <Box display={"flex"} textAlign={"left"} justify="start" py={2}>
          <HStack spacing={2}>
            <Text color="#07070B" fontSize={{ base: "3xl", md: "3xl" }}>
            Who is it For ?
            </Text>
            <HStack>
              <Box height="2px" width="100px" bg="#C08729" />
              <Box
                width="12px"
                height="12px"
                bg="#C08729"
                transform="rotate(45deg)"
              />
            </HStack>
          </HStack>
          
        
      </Box>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} p={4}>
        {steps.map((step, index) => (
          <Box
            key={index}
            bg="white"
            boxShadow="lg"
            p={6}
            borderRadius="md"
            textAlign="center"
            position="relative"
          >
            {/* Number with Background Circle */}
            <Box
              position="relative"
              margin={"auto"}
              top="2px"
              // left="50%"
              transform="translateX(-50%)"
              bg="goldenrod"
              color="black"
              fontSize="2xl"
              fontWeight="bold"
              borderRadius="full"
              width="37px"
              height="37px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {step.number}
            </Box>

            {/* Text Content */}
            <VStack spacing={3} mt={6}>
              <Text fontSize="lg" fontWeight="bold">
                {step.title}
              </Text>
              <Text fontSize="sm" color="gray.600">
                {step.description}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
      <Text
        margin={"auto"}
        display={"flex"}
        justifyContent={"center"}
        fontSize={"md"}
        py={2}
        fontWeight={"semibold"}
      >
        Take the first step toward resolving your dispute by filling out the form. Our experts will review your case and provide personalized guidance to help you achieve the best possible outcome.
      </Text>
    </>
  );
};

export default WhoIts;
