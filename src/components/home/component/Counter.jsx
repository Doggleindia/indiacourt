import { Box, Container, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { counterData } from "./data";
import Contactnow from "./Contactnow";
import { Link } from "react-router-dom";

const Counter = () => {
  return (
    <>
    <Box mt={'-55px'} position={'relative'}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, sm: 4, xl: 8 }} spacing={6}>
          {counterData.map((item, idx) => {
            // const Icon = item.icon;
            return (
              <Link to={item.to} className="pointer">
              <Box
                key={idx}
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={4}
                bg={`#fff7f7`}
                borderRadius="lg"
                boxShadow="md"
              >
                <VStack align={{base:'center', md:"center"}} spacing={1} ml={4}>
                {item.isImage ? (
                  <Image src={item.icon} alt={item.title} boxSize="40px" />
                ) : (
                  <Text fontSize="4xl" color='#F26727' mb={0}>
                    <item.icon />
                  </Text>
                )}
                  <Text fontSize="sm" fontWeight="medium">
                    {item.title}
                  </Text>
                </VStack>
              </Box>
              </Link>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
    <Contactnow/>
    </>
  );
};

export default Counter;
