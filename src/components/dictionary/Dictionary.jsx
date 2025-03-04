import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Header from "../header/Header";
import LegalDictionary from "./LegalDictionary";
import CommonFooter from "../CommonFooter";

const Dictionary = () => {
  return (
    <>
      <Box pb={4} pt={{ base: "5rem", xl: "8rem" }}>
        <Container maxW="container.xl">
          <Header
            title=" Glossary"
            headtitle="Dictionary"
            description="Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien. Interdum et  "
          />
          <LegalDictionary />
        </Container>
      </Box>
      <CommonFooter />
    </>
  );
};

export default Dictionary;
