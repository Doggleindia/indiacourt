import React from "react";
import Inquiry from "../home/component/Inquiry";
import { Box, Container } from "@chakra-ui/react";

const page = () => {
  return (
    <>
      <Box pb={4} pt={{ base: "5rem", xl: "8rem" }}>
        <Container maxW="container.xl">
          <Inquiry />
        </Container>
      </Box>
    </>
  );
};

export default page;
