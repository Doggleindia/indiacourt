import {
  Box,
  Button,
  Container,
  HStack,
  Input,
  Spinner,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const Inquiry = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const toast = useToast();

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission
  const handleSubmit = async () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast({
        title: "All fields are required.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_MAIN_BACKEND}/api/inquiries`,
        formData
      );
      console.log("API Response:", response.data);

      toast({
        title: "Inquiry sent successfully!",
        description: "We will get back to you soon.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setFormData({ fullName: "", email: "", phone: "", message: "" }); // Clear form
    } catch (error) {
      toast({
        title: "Failed to send inquiry.",
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
    <>
      <Box
        display={"flex"}
        className="items-center"
        justifyContent={"center"}
        py={4}
      >
        <Container
          maxW="5xl"
          border={{ base: "none", md: "1px solid #808080" }}
          p={4}
        >
          <Box mx={{ base: 4, md: 32 }}>
            {/* Header */}
            <VStack py={2}>
              <HStack justify="center" spacing={6} w="full">
                <HStack gap={0}>
                  <Box
                    width="12px"
                    height="12px"
                    bg="#C08729"
                    transform="rotate(45deg)"
                  />
                  <Box
                    height="2px"
                    width={{ base: "50px", sm: "100px" }}
                    bg="#C08729"
                  />
                </HStack>
                <Text color="#07070B" fontSize={{ base: "1rem", md: "5xl" }}>
                  Make an inquiry
                </Text>
                <HStack gap={0}>
                  <Box
                    height="2px"
                    width={{ base: "50px", sm: "100px" }}
                    bg="#C08729"
                  />
                  <Box
                    width="12px"
                    height="12px"
                    bg="#C08729"
                    transform="rotate(45deg)"
                  />
                </HStack>
              </HStack>
              <Text fontSize="sm" color="#C08729">
                write to us for any query
              </Text>
            </VStack>
            <VStack width="100%" spacing={4} textAlign="center">
              {/* First Row - Two Inputs Side by Side */}
              <HStack
                width="100%"
                spacing={4}
                flexDirection={{ base: "column", md: "row" }}
              >
                <Input
                  name="fullName"
                  placeholder="Full Name"
                  border="none"
                  borderBottom="2px solid #C08729"
                  _focus={{
                    boxShadow: "none",
                    borderBottom: "2px solid #C08729",
                  }}
                  rounded="none"
                  px={2}
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  placeholder="Email"
                  border="none"
                  borderBottom="2px solid #C08729"
                  _focus={{
                    boxShadow: "none",
                    borderBottom: "2px solid #C08729",
                  }}
                  rounded="none"
                  px={2}
                  value={formData.email}
                  onChange={handleChange}
                />
              </HStack>

              {/* Second Row - Full Width Inputs */}
              <Input
                name="phone"
                placeholder="Phone"
                border="none"
                borderBottom="2px solid #C08729"
                _focus={{
                  boxShadow: "none",
                  borderBottom: "2px solid #C08729",
                }}
                rounded="none"
                px={2}
                width="100%"
                value={formData.phone}
                onChange={handleChange}
              />
              <Input
                name="message"
                placeholder="Message"
                border="none"
                borderBottom="2px solid #C08729"
                _focus={{
                  boxShadow: "none",
                  borderBottom: "2px solid #C08729",
                }}
                rounded="none"
                px={2}
                width="100%"
                value={formData.message}
                onChange={handleChange}
              />

              {/* Button */}
              <Button
                backgroundColor="#056B38"
                border="1px solid #000000"
                size="md"
                bg="#056B38"
                color="white"
                mt={4}
                px={6}
                _hover={{ bg: "#034f28" }}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? <Spinner size="sm" /> : "Send Inquiry"}
              </Button>
            </VStack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Inquiry;
