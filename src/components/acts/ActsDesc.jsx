import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../header/Header";
import CommonFooter from "../CommonFooter";

const ActsDesc = () => {
  return (
    <>
      <Box pb={4} pt={{ base: "5rem", xl: "8rem" }}>
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
          <Text fontSize={"sm"}>Short title and commencement.-</Text>
          <Text fontSize={"sm"}>
            (1) This Act may be called the Abducted Persons (Recovery and
            Restoration) Continuance Act, 1955.
          </Text>
          <Text fontSize={"sm"}>
            (2) It shall be deemed to have come into force on the 30th day of
            May, 1955.
          </Text>

          {/* <ParticularactAccordian /> */}
        </Container>
      </Box>

      <CommonFooter />
    </>
  );
};

export default ActsDesc;
