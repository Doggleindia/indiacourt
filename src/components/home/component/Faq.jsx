import { Box, Container, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { faqData } from "./data";

const Faq = () => {
  const [openItems, setOpenItems] = useState({}); // Track open state per item

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the state for the specific FAQ item
    }));
  };

  return (
    <Box width="100%" display="flex" justifyContent="center" py={6}>
      <Container maxW="container.xl">
        <Box mx="auto" display="flex" justifyContent="center">
          <VStack spacing={6} width="100%">
            
            {/* Heading Section */}
            <VStack textAlign="center">
              <Text fontSize={{ base: "2xl", md: "4xl" }} color="#07070B" fontWeight="bold">
                Frequently Asked Questions
              </Text>
              <Text fontSize={{ base: "md", md: "2xl" }} color="#07070B">
                Get your answers
              </Text>
            </VStack>

            {/* FAQ Content */}
            {faqData.map((item, index) => (
              <HStack 
                key={index}
                width={{ base: "100%", md: "80%" }} 
                align="start" 
                spacing={2} 
                flexDirection="column" // Stack items in column layout
                p={2}
                // border="1px solid #C08729"
                // borderRadius="8px"
              >
                {/* FAQ Title + Toggle Button */}
                <HStack justify="space-between" width="100%" cursor="pointer" onClick={() => toggleItem(index)}>
                  <Text fontSize={{ base: "md", md: "lg" }}  color="#07070B" fontWeight="sm">
                    {item.title}
                  </Text>
                  <Box>
                    {openItems[index] ? (
                      <FaAngleUp color="#C08729" size={20} />
                    ) : (
                      <FaAngleDown color="#C08729" size={20} />
                    )}
                  </Box>
                </HStack>

                {/* Answer Content (Only Shows When Open) */}
                {openItems[index] && (
                  <>
                    <Text fontSize={{ base: "sm", md: "md" }} color="#07070B">
                      {item.desc}
                    </Text>
                    <Divider mt={2} width="100%" p="1px" background="#C08729" />
                  </>
                )}
              </HStack>
            ))}
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default Faq;
