import { Box, Container, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Header from "../../header/Header";
import LegalInfoCard from "../LegalInfoCard";
import FindSteps from "../FindSteps";
import Navbar from "../../header/Navbar";


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
const Joinlawyer = () => {
  return (
    <>
    <Navbar/>
      <Box pb={4} pt={{ base: "2rem", xl: "8rem" }}>
        <Container maxW="container.xl">
        <Header
            title=" Join Our Legal Team"
            headtitle="Join as lawyer"
            description="Are you a passionate legal professional looking for an opportunity to make a meaningful impact? Join our esteemed legal team and be part of a dynamic, forward-thinking law firm that values excellence, integrity, and innovation. "
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
                        Join Us
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
                      <Text className="text-4xl" fontWeight={'bold'}>Why Work With Us ?
                      </Text>
                    
                    </VStack>
                    <LegalInfoCard Data={LegalInfoCardData}/>
                    <FindSteps steps={steps} lastimpression = {'Join us and be part of a team dedicated to justice, advocacy, and making a difference in the legal field!'} title={'Who We’re Looking For'} desc={'We seek individuals who:'} />
        </Container>
      </Box>
    </>
  )
}

export default Joinlawyer