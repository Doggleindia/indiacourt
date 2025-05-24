import { Box, Container, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Header from "../header/Header";
import Topics from "./components/Topics";
import BookImage from "../../assets/legalTopics/family_law_in_india.png";

export default function LegalTopics() {
  return (
    <Container maxW="container.xl" pb={12}>
      <Header
        title="Explore Legal Topics"
        headtitle="Topics"
        description="Whether you are facing a legal issue or want to learn about a specific legal subject, browsing our legal topics is the perfect starting point."
      />

      <Flex mt="6" gap={12}>
        <Topics />
        <Box className="hidden md:block">
          <Image src={BookImage} w="240vw" />
        </Box>
      </Flex>
    </Container>
  );
}
