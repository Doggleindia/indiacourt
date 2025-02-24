import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "../header/Header";
import Serachbutton from "../header/Serachbutton";
import LegalActsList from "./LegalActsList";
import CommonFooter from "../CommonFooter";

const Acts = () => {
  return (
    <>
      <Box pb={4} pt={{ base: "5rem", xl: "8rem" }}>
        <Container maxW="container.xl">
          <Header
            title="Bare Acts"
            headtitle="Bare Acts"
            description="Explore the comprehensive collection of Bare Acts, providing the fundamental text of laws enacted by the legislature. Stay informed with precise legal provisions, amendments, and interpretations. "
          />

          <Serachbutton bordercolor="#C08729" />
          <LegalActsList />
        </Container>
      </Box>
      <CommonFooter />
    </>
  );
};

export default Acts;
