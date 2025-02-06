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
        description="Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien. Interdum et"
      />

      <Flex mt="6" gap={12}>
        <Topics />
        <Box className="hidden md:block">
          <Image src={BookImage} w="60vw" />
        </Box>
      </Flex>
    </Container>
  );
}
