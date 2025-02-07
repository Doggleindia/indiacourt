import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../header/Header";
import LegalDocumentsAccordion from "../resources/LegalDocumentsAccordion";
import ParticularactAccordian from "./ParticularactAccordian";
import CommonFooter from "../CommonFooter";

const Particularacts = () => {
  return (
    <>
      <Box pb={4} pt={{ base: "2rem", xl: "8rem" }}>
        <Container maxW="container.xl">
          <Header
            title="Articles"
            headtitle="Articles"
            description="Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque hac gravida pellentesque est semper. Duis lectus gravida "
          />
          <Text color={"#C08729"} fontSize={"2xl"}>
            The Abducted Persons (Recovery and Restoration) Continuance Act,
            1955
          </Text>

          <ParticularactAccordian />
        </Container>
      </Box>
      <CommonFooter />
    </>
  );
};

export default Particularacts;
