import { Box, SimpleGrid, Text, VStack, Button } from "@chakra-ui/react";
import React from "react";



const StepsCard = ({steps,lastimpression}) => {
  console.log(steps,"steps")
  return (
    <>
    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} p={4}>
      {steps.map((step, index) => (
        <Box
          key={index}
          bg="white"
          boxShadow="lg"
          p={6}
          borderRadius="md"
          textAlign="center"
          position="relative"
        >
          {/* Number with Background Circle */}
          <Box
            position="relative"
            margin={'auto'}
            top="2px"
            // left="50%"
            transform="translateX(-50%)"
            bg="goldenrod"
            color="black"
            fontSize="2xl"
            fontWeight="bold"
            borderRadius="full"
            width="37px"
            height="37px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {step.number}
          </Box>

          {/* Text Content */}
          <VStack spacing={3} mt={6}>
            <Text fontSize="lg" >
              {step.title}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {step.description}
            </Text>
          </VStack>
        </Box>
      ))}
      
    </SimpleGrid>
    <Text margin={'auto'} display={'flex'} justifyContent={'center'} fontSize={'md'} py={2} fontWeight={'medium'}>
   {lastimpression}
    </Text>
     <Box display="flex" justifyContent="center" mt={4} mb={8}>
  <Button
    backgroundColor="#056B38"
    size="md"
    color="#ffff"
  >
    Download our app
  </Button>
</Box>

    </>
  );
};

export default StepsCard;
