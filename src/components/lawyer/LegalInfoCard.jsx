import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Maskgroup from '../../assets/lawyer/Maskgroup.png'



const LegalInfoCard = (Data) => {
    console.log(Data.Data)
  return (
    <Box mx="auto"  p={4}>
      <HStack
        spacing={6}
        align="start"
        flexDirection={{ base: "column", md: "row" }}
      >
        {/* Image Section */}
        <Box flexShrink={0}>
          <Image 
            src={Maskgroup} 
            alt="Gavel and Justice" 
            width="241px" 
            height="278px"
            borderRadius="md"
          />
        </Box>

        {/* Text Content */}
        <VStack align="start" spacing={4} flex="1">
            {Data.Data.map((items,ids)=>(

            
          <Text fontSize="lg" fontWeight="bold">
            {items.title}
            <Text as="span" fontWeight="normal">
              {" "} {items.subtitle}
            </Text>
          </Text>
))}
         
          
        </VStack>
      </HStack>
    </Box>
  );
};

export default LegalInfoCard;
