import { Box, Container, HStack } from "@chakra-ui/react";
import React from "react";

const advertisment = () => {
  return (
    <>
      <Box
        display={"flex"}
        className="items-center"
        justifyContent={"center"}
        py={2}
        backgroundColor={"#003315"}
      >
        <Container maxW="container.xl">
          <Box mx="auto">
            <HStack
              align="center"
              spacing={8}
              flexDirection={{ base: "column", md: "row" }}
            >
              <VStack flex="1" align="start" spacing={4}>
                
              </VStack>
            </HStack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default advertisment;
