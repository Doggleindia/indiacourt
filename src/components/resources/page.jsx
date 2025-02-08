import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../header/Header";
import Serachbutton from "../header/Serachbutton";
import LegalDocumentsAccordion from "./LegalDocumentsAccordion";
import CommonFooter from "../CommonFooter";

const page = () => {
  return (
    <>
      <Box pb={4} pt={{ base: "5rem", xl: "8rem" }}>
        <Container maxW="container.xl">
          <Header
            title="Easy-to-Use Legal Templates"
            headtitle="Resources"
            description="Access a wide range of customizable legal templates for personal, business, and real estate needs. From contracts to wills, manage your legal tasks quickly and efficiently, with no lawyer verification required. Get the right document at your fingertips"
          />
          <Text color={"#C08729"} className="max-sm:text-2xl text-4xl py-4">
            Search Templates that you will need
          </Text>
          <Serachbutton bordercolor="#C08729" />

          <LegalDocumentsAccordion />
        </Container>
      </Box>
      <CommonFooter />
    </>
  );
};

export default page;
