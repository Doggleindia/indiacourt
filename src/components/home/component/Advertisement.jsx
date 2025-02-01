import { Box, Container, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import android from '../../../assets/icons/android.png'
import googleplay from '../../../assets/icons/googleplay.png'
import phone from '../../../assets/home/phone.png'
const Advertisment = () => {
  return (
    <>
      <Box
        display={"flex"}
        className="items-center"
        justifyContent={"center"}
        py={4}
        backgroundColor={'#F267271A'}
      >
        <Container maxW="container.xl">
          <Box mx="auto">
            <HStack
              align="center"
              spacing={2}
              flexDirection={{ base: "column", md: "row" }}
            >
              <VStack flex="1" align="start" spacing={1}>
                <Text fontSize={{ base: "3xl", md: "3xl" }} width={{base:'100%',md:'65%'}} color="#000000" >
                We are available on android and iPhone
                </Text>
                <Text fontSize={{ base: "sm", md: "sm" }} color="#000000" >
                Download for best experience
                </Text>
                <HStack display={"flex"} pt={'20px'} justifyContent={"space-between"}>
                    <Image maxWidth={'33%'} src={android} alt="android" />
                    <Image maxWidth={'33%'} src={googleplay} alt="googleplay"  />
                </HStack>
              </VStack>
              <VStack flex="1" align="start" spacing={1}>
                <Image width={{base:'100%',md:'65%'}} src={phone} alt="phone" />
                
              </VStack>
            </HStack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Advertisment;
