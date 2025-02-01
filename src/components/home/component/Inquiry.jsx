import { Box, Button, Container, HStack, Input, InputGroup, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Inquiry = () => {
  return (
    <>
      <Box
        display={"flex"}
        className="items-center"
        justifyContent={"center"}
        py={4}

      >
        <Container maxW="container.xl">
          <Box mx="auto">
            {/* Header */}
            <VStack
            py={2}
            >         
            <HStack justify="center" spacing={6}>
              <HStack>
                <Box
                  width="12px"
                  height="12px"
                  bg="#C08729"
                  transform="rotate(45deg)"
                />
                <Box height="2px" width="100px" bg="#C08729" />
              </HStack>
              <Text color="#07070B" fontSize={{base:'1rem',md:"5xl"}} >
              Make an inquiry
              </Text>
              <HStack>
                <Box height="2px" width="100px" bg="#C08729" />
                <Box
                  width="12px"
                  height="12px"
                  bg="#C08729"
                  transform="rotate(45deg)"
                />
              </HStack>
            </HStack>
            <Text fontSize='sm' color="#C08729" >
                write to us for any query 
                </Text>
            </VStack>
            <VStack width="100%" spacing={4} textAlign="center">
            
            {/* First Row - Two Inputs Side by Side */}
            <HStack width="100%" spacing={4} flexDirection={{ base: "column", md: "row" }}>
              <Input 
                name="name" 
                placeholder="Enter your name" 
                border="none" 
                borderBottom="2px solid #C08729" 
                _focus={{ boxShadow: "none", borderBottom: "2px solid #C08729" }} 
                rounded="none" 
                px={2}
              />
              <Input 
                name="email" 
                placeholder="Enter your email" 
                border="none" 
                borderBottom="2px solid #C08729" 
                _focus={{ boxShadow: "none", borderBottom: "2px solid #C08729" }} 
                rounded="none" 
                px={2}
              />
            </HStack>

            {/* Second Row - Full Width Inputs */}
            <Input 
              name="phone" 
              placeholder="Enter your phone number" 
              border="none" 
              borderBottom="2px solid #C08729" 
              _focus={{ boxShadow: "none", borderBottom: "2px solid #C08729" }} 
              rounded="none" 
              px={2}
              width="100%"
            />
            <Input 
              name="message" 
              placeholder="Enter your message" 
              border="none" 
              borderBottom="2px solid #C08729" 
              _focus={{ boxShadow: "none", borderBottom: "2px solid #C08729" }} 
              rounded="none" 
              px={2}
              width="100%"
            />

            {/* Button */}
            <Button 
              backgroundColor="transparent" 
              border="1px solid #000000" 
              size="md" 
              color="#000000" 
              mt={4} 
              px={6} 
              _hover={{ bg: "#C08729", color: "#fff", borderColor: "#C08729" }}
            >
              Send Me
            </Button>
          </VStack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Inquiry;
