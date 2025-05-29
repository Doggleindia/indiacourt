import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import law_book from "../../../assets/home/law_book.png";
import { Link } from "react-router-dom";

const Joinus = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        py={4}
        backgroundColor="#003315"
        position="relative"
      >
        <Container maxW="container.xl">
          <Box mx="auto" py={4} px={4} position="relative">
            {/* Header */}
            <HStack justify="center" spacing={3}>
              <HStack>
                <Box
                  width="12px"
                  height="12px"
                  bg="#C08729"
                  transform="rotate(45deg)"
                />
                <Box height="2px" width="60px" bg="#C08729" />
              </HStack>
              <Text color="#BF9874" fontSize="sm" textTransform="uppercase">
                Join Us
              </Text>
              <HStack>
                <Box height="2px" width="60px" bg="#C08729" />
                <Box
                  width="12px"
                  height="12px"
                  bg="#C08729"
                  transform="rotate(45deg)"
                />
              </HStack>
            </HStack>

            {/* Content Section */}
            <VStack
              width={{ base: "100%", md: "70%" }}
              margin="auto"
              textAlign="center"
              spacing={4}
            >
              <Text
                fontSize={{ base: "xl", md: "3xl" }}
                color="#FFFF"
                fontWeight="bold"
              >
                Shape Your Legal Journey with Us – Free and Seamless.
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }} color="#FFFF">
                Join our growing network of passionate legal professionals.
                Connect, collaborate, and grow your career with no fees or
                barriers.
              </Text>
            </VStack>

            {/* Button */}

            <Link to="/join-as-lawyer">
              <Button
                
                size="md"
                bg="#056B38"
                color="white"
                mt={4}
                display="block"
                mx="auto"
                _hover={{ bg: "#034f28" }}
              >
                Read Now
              </Button>
            </Link>
            {/* Image Positioned at Bottom Left */}
            <Box
              position="absolute"
              bottom={{ base: "-2px", md: "-3px" }}
              left={{ base: "50px", md: "-60px" }}
              transform={{ base: "translateX(-50%)", md: "none" }}
              width={{ base: "100px", sm: "120px", md: "200px" }}
            >
              <Image src={law_book} alt="law book" />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Joinus;
