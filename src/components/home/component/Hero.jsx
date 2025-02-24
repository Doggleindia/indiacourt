import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
  Stack,
} from "@chakra-ui/react";
import bg_main from "../../../assets/home/bg_main.png";
import { BiX } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import StickyChatBox from "./StickyChatBox";


const Hero = () => {
  const [isChatOpen, setIsChatOpen] = useState(true);
  const handleToggleChat = () => {
    console.log("this is click");
    setIsChatOpen(!isChatOpen);
  };
  return (
    <>
    
      <Box
        position="relative"
        overflow="hidden"
        bgImage={`url(https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1740159684742_SUPREME%20COURT%20HOME%20PAGE.png)`}
        bgSize="cover"
        bgPosition="top"
        height="container.sm"
        display="flex"
        alignItems="center"
      >
        <Container maxW="container.xl" position="relative" zIndex="1">
        
          {/* Responsive Stack (Column for Mobile, Row for PC) */}
          <Stack
            spacing={8}
            justify="space-between"
            align="center"
            direction={{ base: "column", md: "row" }}
            textAlign={{ base: "center", md: "left" }} // Center for Mobile
          >
            
            {/* LEFT SIDE (Heading + Search Box) */}
            <VStack
              spacing={4}
              align={{ base: "center", md: "start" }}
              maxW="lg"
            >
              <Heading
                as="h1"
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="medium"
                color="#07070B"
              >
                Empowering You with Legal Knowledge
              </Heading>

              {/* White Box with Search Bar */}
              <VStack align={{ base: "center", md: "start" }} width="100%">
                <Text fontSize="sm" fontWeight="medium" my={2}>
                  What do you want to learn today?
                </Text>
                <Box
                  bg="white"
                  p={6}
                  borderRadius="md"
                  boxShadow="lg"
                  width={{ base: "100%", md: "400px" }} // Full width for mobile
                >
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    I want to
                  </Text>
                  <HStack>
                    <Input
                      border="1px solid #F0E5D4"
                      borderColor="#F0E5D4"
                      placeholder="Learn about a legal issue..."
                      flex="1"
                    />
                  </HStack>
                </Box>
              </VStack>
            </VStack>
            
          </Stack>
        </Container>
      </Box>
      <StickyChatBox isChatOpen={isChatOpen} handleToggleChat={handleToggleChat} />
    </>
  );
};

export default Hero;
