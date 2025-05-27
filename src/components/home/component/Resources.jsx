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
import r1 from "../../../assets/home/r1.png";
import r2 from "../../../assets/home/r2.png";
import r3 from "../../../assets/home/r3.png";
import { FaArrowRightLong } from "react-icons/fa6";

// Updated: include unique image per resource
const filteredResources = [
  {
    title: 'Simple money bond',
    desc: 'Download legally formatted money bond agreements for lending or borrowing easy, court-compliant, and ready to use.',
    image: r1,
  },
  {
    title: 'Company law bond',
    desc: 'Access standard bond formats under company law for internal agreements, guarantees, and statutory compliance.',
    image: r2,
  },
  {
    title: 'Partnership law bond',
    desc: 'Get partnership bond templates covering profit-sharing, responsibilities, and legal commitments between partners.',
    image: r3,
  },
];

const Resources = () => {
  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <HStack justify="space-between" align="center" mb={8}>
          <ComponentHeader
            title="Easy-To-Use Legal Templates"
            headtitle="Resources"
            description="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
            to="/resources"
          />
        </HStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {filteredResources.map((item, idx) => (
            <VStack key={idx} align="start" spacing={4}>
              <Box
                w="100%"
                bg="#F0E5D4"
                borderRadius="md"
                overflow="hidden"
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={6}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  objectFit="contain"
                  maxH="300px"
                />
              </Box>

              <Text fontSize="2xl" fontWeight="bold" color="#2E2E2E">
                {item.title}
              </Text>
              <Text fontSize="sm" color="#3A3A38">
                {item.desc}
              </Text>

              {/* View link fixed with spacing and consistent alignment */}
              <Box pt={2}>
                <HStack
                  as="button"
                  spacing={2}
                  _hover={{ color: "#C08729" }}
                  cursor="pointer"
                >
                  <Text fontSize="sm" fontWeight="semibold">
                    View
                  </Text>
                  <FaArrowRightLong />
                </HStack>
              </Box>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Resources;
