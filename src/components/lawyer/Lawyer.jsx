import { Box, Container, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Header from "../header/Header";
import LegalInfoCard from "./LegalInfoCard";
import FindSteps from "./FindSteps";
import CommonFooter from "../CommonFooter";

const LegalInfoCardData = [
  {
    title: "Expertise & Knowledge:",
    subtitle:
      "Lawyers are trained professionals with deep knowledge of the law.  They can guide you through complex legal matters, ensuring you understand  your rights and options.",
  },
  {
    title: "Proper Representation:",
    subtitle:
      "Whether its negotiating settlements or representing you in court, a lawyer ensures that your case is handled effectively and that your interests are well-protected.",
  },
  {
    title: "Peace of Mind:",
    subtitle:
      "Legal issues can be stressful, but having a lawyer by your side gives you confidence that the matter is being managed properly, allowing you to focus on what matters most.",
  },
  {
    title: "Peace of Mind:",
    subtitle:
      "Legal issues can be stressful, but having a lawyer by your side gives you confidence that the matter is being managed properly, allowing you to focus on what matters most.",
  },
];
const steps = [
  {
    number: "1",
    title: "Download our app",
    description: "Download our app for finding your best lawyer.",
  },
  {
    number: "2",
    title: "Search for Lawyers Nearby",
    description:
      "Explore a list of trusted lawyers in your area or by the Name.",
  },
  {
    number: "3",
    title: "Add Your Details",
    description:
      "Provide a brief description of your concern & help us connect you quickly.",
  },
  {
    number: "4",
    title: "Submit your query",
    description: "Submit your query and we will get back to you soon.",
  },
];
const Lawyer = () => {
  return (
    <>
      <Box pb={4} pt={{ base: "5rem", xl: "8rem" }}>
        <Container maxW="container.xl">
          <Header
            title="Find your lawyer"
            headtitle="lawyer"
            description="Find the right lawyer to represent your case. Connect with experienced legal professionals easily."
          />
          <VStack pt={4}>
            <HStack justify="center" spacing={3}>
              <HStack>
                <Box
                  width="12px"
                  height="12px"
                  bg="#C08729"
                  transform="rotate(45deg)"
                />
                <Box height="2px" width="60px" bg="#C08729" />
              </HStack>
              <Text color="#BF9874" fontSize="md" textTransform="uppercase">
                Find Lawyer
              </Text>
              <HStack>
                <Box height="2px" width="60px" bg="#C08729" />
                <Box
                  width="12px"
                  height="12px"
                  bg="#C08729"
                  transform="rotate(45deg)"
                />
              </HStack>
            </HStack>
            <Text className="text-4xl" fontWeight={"bold"}>
              Do i need a lawyer?
            </Text>
            <Text textAlign={"center"} width={{ base: "100%", md: "45%" }}>
              Looking for expert legal assistance? Find the right lawyer for
              your needs with ease. Browse through our trusted list of
              experienced professionals who are ready to help you with your
              legal matters."
            </Text>
          </VStack>
          <LegalInfoCard Data={LegalInfoCardData} />
          <FindSteps
            steps={steps}
            lastimpression={
              " That’s it! Once confirmed, we’ll connect you with your chosen lawyer."
            }
            desc={
              "  Quick, simple, and hassle-free—follow these steps to connect with the best legal expert in your area. "
            }
            title={" Find Your Lawyer in Just 4 Simple Steps"}
          />
        </Container>
      </Box>

      <CommonFooter />
    </>
  );
};

export default Lawyer;
