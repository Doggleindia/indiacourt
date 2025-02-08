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
            title="Articles"
            headtitle="Articles"
            description="Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque hac gravida pellentesque est semper. Duis lectus gravida "
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
