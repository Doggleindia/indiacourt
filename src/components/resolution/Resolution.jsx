import { Box, Container, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Header from "../header/Header";
import LegalInfoCard from "../lawyer/LegalInfoCard";
import WhoIts from "./WhoIts";
import CommonFooter from "../CommonFooter";
const ResolutionCardData = [
  {
    title: "Expert Guidance:",
    subtitle:
      "Our legal experts are here to support you at every step. By using this tool, you’ll gain access to professional advice tailored to your specific situation.",
  },
  {
    title: "Simple Process:",
    subtitle:
      "All you need to do is fill out the form with your dispute details, and our team will review your case and get back to you promptly.",
  },
  {
    title: "Time and Cost Efficiency:",
    subtitle:
      "With tools to estimate timelines and expenses, you can plan your resolution process effectively, minimizing both time and costs",
  },
  {
    title: "Peace of Mind:",
    subtitle:
      "Legal issues can be stressful, but having a lawyer by your side gives you confidence that the matter is being managed properly, allowing you to focus on what matters most.",
  },
];
const Resolution = () => {
  return (
    <>
      <Box pb={4} pt={{ base: "5rem", xl: "8rem" }}>
        <Container maxW="container.xl">
          <Header
            title="Dispute Resolution Tool"
            headtitle="Dispute Resolution"
            description="Your Resource Hub to Solve Disputes"
          />
          <VStack py={4}>
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
                Dispute Resolution
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
            {/* <Text className="text-4xl" fontWeight={"bold"}>
            Do i need a lawyer?
          </Text> */}
            <Text textAlign={"center"} width={{ base: "100%", md: "65%" }}>
              The Dispute Resolution Tool is designed to help you navigate the
              complexities of mediation and arbitration with ease. With access
              to expert resources, interactive tools, and practical guides, you
              can efficiently resolve disputes and reach favorable outcomes. Our
              tool offers step-by-step assistance, ensuring that you are
              well-prepared for each phase of the resolution process.
            </Text>
          </VStack>
          <LegalInfoCard Data={ResolutionCardData} />
          <WhoIts />
        </Container>
      </Box>

      <CommonFooter />
    </>
  );
};

export default Resolution;
