import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  VStack,
  Heading,
  Grid,
  GridItem,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";

const Contact = () => {
  const formSpacing = useBreakpointValue({ base: 4, md: 6 });

  return (
    <Box
      bg="white"
      py={{ base: 10, md: 20 }}
      px={{ base: 6, md: 12 }}
      position="relative"
      overflow="hidden"
    >
      {/* Heading Section */}
      <VStack spacing={4} textAlign="center">
        {/* Diamond + Line */}
        <Flex align="center" justify="center" gap={2} mb={4}>
          <Box
            w="12px"
            h="12px"
            bg="#C08729"
            transform="rotate(90deg)"
            clipPath="polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
          />
          <Box h="1px" w="50px" bg="#C08729" />
          <Text
            fontSize="sm"
            color="black"
            fontWeight={"medium"}
            textTransform="uppercase"
          >
            Contact us
          </Text>
          <Box h="1px" w="50px" bg="#C08729" />
          <Box
            w="12px"
            h="12px"
            bg="#C08729"
            transform="rotate(90deg)"
            clipPath="polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
          />
        </Flex>

        <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
          Need Legal Guidance? We’re Here To Help.
        </Heading>

        <Text
          fontSize={{ base: "sm", md: "md" }}
          maxW="5xl"
          color="#C08729"
          px={4}
        >
          Connect with experienced legal professionals for trusted advice on
          civil, criminal, family, property, or business matters. Your inquiry
          is confidential and our experts are ready to assist you every step of
          the way.
        </Text>
      </VStack>

      {/* Form Section */}
      <Box as="form" maxW="6xl" mx="auto" mt={formSpacing}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={formSpacing}
        >
          <GridItem>
            <FormControl isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input
                placeholder="Enter your full name"
                borderRadius="none"
                border={"none"}
                borderBottom="2px solid #C08729"
                _focus={{ borderColor: "#C08729" }}
              />
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl isRequired>
              <FormLabel>Phone</FormLabel>
              <Input
                type="tel"
                placeholder="Enter your phone number"
                border={"none"}
                borderBottom="2px solid #C08729"
                borderRadius="none"
                _focus={{ borderColor: "#C08729" }}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={{ base: 1, md: 2 }}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                border={"none"}
                borderBottom="2px solid #C08729"
                borderRadius="none"
                _focus={{ borderColor: "#C08729" }}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={{ base: 1, md: 2 }}>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="Write your message here..."
                border={"none"}
                borderBottom="2px solid #C08729"
                borderRadius="none"
                _focus={{ borderColor: "#C08729" }}
              />
            </FormControl>
          </GridItem>
        </Grid>

        {/* Submit Button */}
        <Box textAlign="center" mt={formSpacing}>
          <Button
            type="submit"
            border="1px solid black"
            borderRadius="none"
            px={8}
            py={2}
            bg="#056B38"
            color="white"
            _hover={{ bg: "#034f28" }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
