import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Input,
  Spinner,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import law_book from "../../../assets/home/law_book.png";
import axios from "axios";
const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const handleSubmit = async () => {
    if (!email) {
      toast({
        title: "Email are required.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_MAIN_BACKEND}/api/subscribe-email`,
        {email}
      );
      console.log("API Response:", response.data);

      toast({
        title: "Subscribe successfully!",
        description: "We will get back to you soon.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setEmail(""); // Clear form
    } catch (error) {
      toast({
        title: "Failed to Subscribe",
        description: error.response?.data?.message || "Something went wrong!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      py={4}
      backgroundColor="#003315"
      position="relative"
    >
      <Container maxW="container.xl">
        <Box mx="auto" py={4} position="relative">
          {/* Header */}
          <HStack justify="center" py={2} spacing={3}>
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
              Subscribe
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
            spacing={1}
          >
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              color="#FFFF"
              fontWeight="bold"
            >
              Stay Updated With India Court
            </Text>
            <Text fontSize={{ base: "sm", md: "sm" }} color="#FFFF">
              Subscribe to our newsletter for the legal updates, Highlights,
              Topics and more.
            </Text>
          </VStack>

          <HStack
            display={"flex"}
            justifyContent={"center"}
            py={2}
            margin={"auto"}
          >
            <Box
              width="12px"
              height="12px"
              bg="#C08729"
              transform="rotate(45deg)"
            />
            <Box
              width="12px"
              height="12px"
              bg="#C08729"
              transform="rotate(45deg)"
            />
            <Box
              width="12px"
              height="12px"
              bg="#C08729"
              transform="rotate(45deg)"
            />
          </HStack>
          <HStack display={"flex"} justifyContent={"center"} py={2}>
            <Input
              name="phone"
              placeholder="Enter your email"
              border="2px solid #C08729"
              _focus={{ boxShadow: "none",color:'#FFFFFf', borderBottom: "2px solid #C08729" }}
              rounded="10px"
              px={2}
              width="40%"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
            <Button
              backgroundColor={"transparent"}
              color={"#ffff"}
              borderLeft={"1px solid #003315"}
              border="2px solid #C08729"
              onClick={handleSubmit}
              disabled={loading}
            >
               {loading ? <Spinner size="sm" /> : "Subscribe Now"} 
            </Button>
          </HStack>
        </Box>
      </Container>
      {/* Image Positioned at Bottom Left */}
      <Box
        position="absolute"
        bottom={2}
        right={2}
        width={{ base: "120px", md: "200px" }}
      >
        <Image src={law_book} alt="law book" />
      </Box>
    </Box>
  );
};

export default Subscribe;
