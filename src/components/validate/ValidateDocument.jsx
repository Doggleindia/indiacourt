import { Box, Container, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Header from "../header/Header";
import LegalInfoCard from "../lawyer/LegalInfoCard";
import FindSteps from "../lawyer/FindSteps";


const LegalInfoCardData = [
    {
        title: "Collaborative Environment:",
        subtitle: "Work alongside experienced attorneys and legal experts in a team-oriented atmosphere.",
        image: "collaborative_environment.png"
    },
    {
        title: "Collaborative Environment:",
        subtitle: "Work alongside experienced attorneys and legal experts in a team-oriented atmosphere.",
        image: "collaborative_environment.png"
    },
    {
        title: "Professional Growth:",
        subtitle: "Gain access to continuous learning opportunities, mentorship programs, and career development resources.",
        image: "professional_growth.png"
    },
    {
        title: "Challenging Cases:",
        subtitle: "Engage in high-profile cases that will enhance your skills and expand your expertise.",
        image: "challenging_cases.png"
    },
    {
        title: "Work-Life Balance:",
        subtitle: "Enjoy flexible work arrangements and a supportive workplace culture.",
        image: "work_life_balance.png"
    },
    {
        title: "Competitive Benefits:",
        subtitle: "We offer industry-leading compensation, health benefits, and performance incentives.",
        image: "competitive_benefits.png"
    }
];
const steps = [
    {
      number: "1",
      title: "Hold relevant legal qualifications and certifications.",
      description: "",
    },
    {
      number: "2",
      title: "Demonstrate strong analytical, research, and communication skills.",
      description: "",
    },
    {
      number: "3",
      title: "Exhibit a commitment to ethical legal practices.",
      description: "",
    },
    {
      number: "4",
      title: "Thrive in fast-paced and challenging environments.",
      description: "",
    },
  ];
export const ValidateDocument = () => {
  return (
    <>
    <Box pb={4} pt={{ base: "2rem", xl: "8rem" }}>
      <Container maxW="container.xl">
      <Header
          title=" Validate Your Legal Documents"
          headtitle="Validate Documents"
          description="Ensuring the validity of legal documents is essential for protecting your rights and interests. This page provides a step-by-step guide to verifying the authenticity and compliance of legal documents before execution or submission."
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
                      Why to Validate Document
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
                    <Text className="text-lg" fontWeight={'semibold'} >Validating legal documents is a crucial step in safeguarding your rights and preventing future legal complications. Always take the necessary steps to confirm the authenticity and enforceability of any legal paperwork. If you need professional assistance, consult a legal expert or a notary public for proper verification.
                    </Text>
                  
                  </VStack>
                
                  <FindSteps steps={steps} lastimpression = {'Validating legal documents is a crucial step in safeguarding your rights and preventing future legal complications. Always take the necessary steps to confirm the authenticity and enforceability of any legal paperwork. If you need professional assistance, consult a legal expert or a notary public for proper verification.'} title={'Why Document Validation is Important'}/>
      </Container>
    </Box>
  </>
  )
}
