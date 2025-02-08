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
import resources from "../../../assets/home/resources.png";
import { resourcesData } from "./data";
import { FaArrowRightLong } from "react-icons/fa6";
const Resources = () => {
  return (
    <>
      <Box py={4}>
        <Container maxW="container.xl" py={2}>
          <ComponentHeader
            title="Resources"
            headtitle="Forms & Agreements"
            description="Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics "
            to="resources"
          />
          <SimpleGrid columns={{ base: 1, sm: 2, xl: 4 }} spacing={6}>
            {resourcesData.map((item, idx) => {
              return (
                <>
                  <Box
                    key={idx}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    p={4}
                  >
                    <VStack align="start" spacing={1} ml={4}>
                      <Box
                        border="1px solid #F0E5D4"
                        borderRadius="lg"
                        overflow="hidden"
                        p={6}
                        margin={"auto"}
                      >
                        <Image
                          src={resources}
                          alt={item.title}
                          boxSize={{ base: "330px", md: "250px" }}
                        />
                      </Box>
                      <Text fontSize="lg" color={"#3A3A38"} fontWeight="medium">
                        {item.title}
                      </Text>
                      <Text fontSize="sm" color={"#3A3A38"} fontWeight="sm">
                        {item.desc}
                      </Text>
                      <HStack
                        as={"button"}
                        _hover={{ color: "#C08729" }}
                        cursor="pointer"
                      >
                        <Text fontSize="sm" fontWeight="semibold">
                          View
                        </Text>
                        <FaArrowRightLong />
                      </HStack>
                    </VStack>
                  </Box>
                </>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default Resources;
