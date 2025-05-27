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
import phone from "../../../assets/home/phone1.png";
import lawyer1 from "../../../assets/home/edit.jpg";
import fullpolygon from "../../../assets/icons/fullpolygon_line.png";

const Findalawyer = () => {
  return (
    <>
      <Box
        width="100%"
        minHeight="70vh"
        display="flex"
        justifyContent="center"
        py={8}
        backgroundColor="#003315"
      >
        <Container maxW="container.xl">
          <Box mx="auto">
            <HStack
              align="center"
              spacing={8}
              flexDirection={{ base: "column", md: "row" }} // Stack on mobile, row on larger screens
              textAlign={{ base: "start", md: "left" }} // Center text on mobile
            >
              {/* Left Side - Text & Button */}
              <VStack
                flex="1"
                align={{ base: "center", md: "start" }}
                spacing={4}
                width="100%"
              >
                <VStack
                  align={{ base: "start", md: "start" }}
                  maxW="430px"
                  width="100%"
                >
                  {/* Title with Arrow Line */}
                  <HStack
                    spacing={2}
                    align="center"
                    justify={{ base: "start", md: "start" }}
                  >
                    <Text fontSize="sm" color="#C08729" fontWeight="bold">
                      Contact
                    </Text>
                    <Box
                      height="2px"
                      width="80px"
                      backgroundColor="#C08729"
                    ></Box>
                    <Box
                      width="12px"
                      height="12px"
                      backgroundColor="#C08729"
                      transform="rotate(90deg)"
                      clipPath="polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                    ></Box>
                  </HStack>

                  {/* Main Text */}
                  <Text
                    fontSize={{ base: "2xl", md: "4xl" }}
                    color="#fff"
                    fontWeight="bold"
                  >
                    Find a Lawyer
                  </Text>
                  <Text fontSize={{ base: "sm", md: "md" }} color="#fff">
                    Search for and connect with attorneys in your area for
                    consultations and one-on-one legal help.
                  </Text>

                  {/* Button */}
                  <Button
                    backgroundColor="#056B38"
                    size="md"
                    color="#ffff"
                    mt={4}
                    alignSelf={{ base: "center", md: "flex-start" }}
                  >
                    Download our app
                  </Button>
                </VStack>
              </VStack>

              {/* Center Image - Phone */}
              <VStack flex="1" align="center" spacing={2} width="100%">
                <Image
                  src={phone}
                  alt="phone"
                  maxWidth={{ base: "80%", md: "120%" }}
                />
              </VStack>

              {/* Right Side - Lawyer Image + Right-Side Arrow */}
              <VStack
                flex="1"
                align="center"
                pt={{ base: 0, md: "10px" }}
                spacing={2}
                position="relative"
                width="100%"
              >
                <Box position="relative" display="inline-block">
                  <Image
                    src={lawyer1}
                    fit={"cover"}
                    boxSize={{ base: "250px", md: "310px" }}
                    alt="lawyer"
                  />
                  <Image
                    src={fullpolygon}
                    alt="polygon"
                    position="absolute"
                    right="-4px"
                    top="-25px"
                    bottom={0}
                    width="7px"
                    display={{ base: "none", md: "block" }} // Hide in mobile view
                  />
                </Box>

                {/* Text Below Image */}
                <Text
                  position="relative"
                  fontSize={{ base: "lg", md: "3xl" }}
                  fontWeight="medium"
                  color="#fff"
                >
                  We Help You With
                </Text>
                <Text
                  position="relative"
                  fontSize={{ base: "lg", md: "3xl" }}
                  fontWeight="medium"
                  color="#fff"
                >
                  Quality Legal Advice
                </Text>
              </VStack>
            </HStack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Findalawyer;
