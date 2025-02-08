import {
  Box,
  Container,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import ComponentHeader from "./header/ComponentHeader";
import { counterData } from "./data";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Highlights = () => {
  return (
    <>
      <Box py={4}>
        <Container maxW="container.xl" py={2}>
          <ComponentHeader
            headtitle={"Highlights"}
            title={"Explore Legal Topics"}
            description={
              "Whether you are facing a legal issue or want to learn about a specific legal subject, browsing our legal topics is the perfect starting point."
            }
            to="/legal-topics"
          />
          <SimpleGrid columns={{ base: 1, sm: 2, xl: 3 }} spacing={8}>
            {counterData.map((item, idx) => {
              return (
                <Box
                  key={idx}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p={4}
                  bg={`#FFFF`}
                  borderRadius="lg"
                  boxShadow="md"
                >
                  <VStack align="start" spacing={1} ml={4}>
                    {item.isImage ? (
                      <Image src={item.icon} alt={item.title} boxSize="40px" />
                    ) : (
                      <Text fontSize="4xl" color="#F26727" mb={0}>
                        <item.icon />
                      </Text>
                    )}
                    <Text fontSize="lg" fontWeight="bold">
                      {item.title}
                    </Text>
                    <Text fontSize="sm" fontWeight="sm">
                      {item.desc}
                    </Text>
                    <Link to="/legal-topic/:id">
                      <HStack
                        as={"button"}
                        _hover={{ color: "#C08729" }}
                        cursor="pointer"
                      >
                        <Text fontSize="sm" fontWeight="semibold">
                          Read more
                        </Text>
                        <FaArrowRight />
                      </HStack>
                    </Link>
                  </VStack>
                </Box>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default Highlights;
