import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import FamilyLawI from "../../assets/books/Family_Law_I.png";
import BookCard from "../books/BookCard";
import { FaStar } from "react-icons/fa";

const books = [
  {
    image: FamilyLawI,
    version: "English Version",
    title: "Family Law I",
    description:
      "Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien. Interdum et",
  },
  {
    image: FamilyLawI,
    version: "English Version",
    title: "Family Law I",
    description:
      "Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien. Interdum et",
  },
  {
    image: FamilyLawI,
    version: "English Version",
    title: "Family Law I",
    description:
      "Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien. Interdum et",
  },
];

export default function BookDetails() {
  return (
    
    <Box pt={12}>
      <Container maxW="container.xl" pb={10}>
        <Box>
          <Flex
            gap={2}
            as="button"
            align="center"
            _hover={{ color: "#C08729" }}
          >
            <FaArrowLeftLong />
            <Text className=" text-xl font-bold">BACK</Text>
          </Flex>
        </Box>

        <Box mt={6} maxW="container.lg">
          <HStack
            align="center"
            justify="space-between"
            gap={4}
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Box>
              <BookCard image={FamilyLawI} />
            </Box>
            <VStack align="start" maxW="xl" gap={5}>
              <Box>
                <Text className=" text-lg text-[#07070B]">English Version</Text>
                <Text className=" text-6xl text-[#07070B]">Family Law I</Text>
              </Box>

              <HStack>
                {[1, 2, 3, 4, 5].map(() => (
                  <FaStar fill="#C08729" />
                ))}
                <Text className=" text-base text-black">12 Reviews</Text>
              </HStack>

              <Text className="text-[#3A3A38] text-lg">
                Lorem ipsum dolor sit amet consectetur. Commodo pulvinar
                molestie pellentesque urna libero vel Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet consectetur. Commodo pulvinar
                molestie pellentesque urna libero vel Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet consectetur. Commodo pulvinar
                molestie pellentesque urna libero vel Lorem ipsum dolor sit amet
                consectetu
              </Text>

              <Button
                variant="solid"
                bg="#056B38"
                color="white"
                _hover={{ bg: "#056000" }}
              >
                READ NOW
              </Button>
            </VStack>
          </HStack>
        </Box>

        <Box mt={8}>
          <Text className=" text-4xl font-bold">Featured Books </Text>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5} mt={9}>
            {books.map((book) => (
              <BookCard {...book} />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
