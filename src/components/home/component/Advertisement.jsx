import { Box, Container, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import android from '../../../assets/icons/android.png';
import googleplay from '../../../assets/icons/googleplay.png';
import phone from '../../../assets/home/phone1.png';

const Advertisment = () => {
  return (
    <Box
      py={{base:8, md:16}}
      backgroundColor="#F267271A"
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={{base:0, md:32}}
    >
      <Container maxW="container.xl">
        <HStack
          align="center"
          justify="center"
          spacing={0}
          flexDirection={{ base: "column", md: "row" }}
          mx={{base:0, md:32}}
        >
          {/* Left Side */}
          <VStack
            flex="1"
            align="center"
            justify="center"
            spacing={4}
            textAlign="center"
          >
            <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight={"bold"} color="#000000">
              We are available on Android and iPhone
            </Text>
            <Text fontSize="sm" color="#000000">
              Download for best experience
            </Text>
            <HStack spacing={6} pt={4} justify="center">
              <Image maxW="120px" src={android} alt="android" />
              <Image maxW="120px" src={googleplay} alt="googleplay" />
            </HStack>
          </VStack>

          {/* Right Side */}
          <VStack flex="1" align="center" justify="center">
            <Image width={{ base: '80%', md: '85%' }} src={phone} alt="phone" />
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Advertisment;
