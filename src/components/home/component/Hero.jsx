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
        bgImage={`url(${bg_main})`}
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

            {/* RIGHT SIDE (AI Chat Box) */}
            <Box flex="1" display="flex" justifyContent="end">
              {/* Outer Green Box */}
              {isChatOpen && (
                <Box
                  bg="#056B38"
                  w={{ base: "90%", md: "300px" }} // Responsive Width
                  h="170px"
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {/* Inner White Box */}
                  <Box
                    bg="#FFFFFF"
                    m={2}
                    height="90%"
                    width="90%"
                    borderRadius="md"
                    display="flex"
                    flexDirection="column"
                    p={3}
                  >
                    {/* Header Row with Left & Right Aligned Content */}
                    <HStack justifyContent="space-between" width="100%">
                      <Text fontSize="sm" fontWeight="medium" color="#1B1E21">
                        Hi there! 👋
                      </Text>
                      <BiX size={25} color="#1B1E21" cursor="pointer" />
                    </HStack>

                    {/* Content */}
                    <VStack spacing={2} align="start" mt={2}>
                      <Text fontSize="sm" color="#1B1E21">
                        Need legal help with AI? I'm here to guide you. Say HI
                        to begin!
                      </Text>
                      <Button
                        color={"#fff"}
                        bgColor={"#056B38"}
                        size="sm"
                        width="100%" // Make button responsive
                      >
                        Chat with AI
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              )}
              <Box
                position="absolute"
                bottom="-6px"
                right="10px"
                bg="#056B38"
                borderRadius="full"
                padding="10px"
                boxShadow="md"
                cursor="pointer"
                // Toggle chat box visibility
              >
                <FaCommentDots
                  size={30}
                  onClick={handleToggleChat}
                  color="#fff"
                />
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
