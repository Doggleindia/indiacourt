import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import straightline from '../../../assets/icons/straightline.svg'

const Contactnow = () => {
  return (
    <>


    <Box
      width={{ base: "90%", md: "77%" }} // Mobile: 90%, Desktop: 77%
      margin="auto"
      mt="23px"
      mb="20px"
      border="2px solid #C08729"
      borderRadius="md"
      py={6}
      px={4}
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {/* Heading */}
      <Text fontWeight="medium" fontSize={{ base: "xl", md: "2xl" }} mb={2}>
        Need Help? Contact Us Now!
      </Text>

      {/* Description */}
      <Text fontSize={{ base: "sm", md: "md" }} maxW="720px" mb={4}>
        Feeling worried, scared, or alone? You don’t have to face it alone.
        The Child Helpline is here to help you 24/7.
      </Text>

      {/* Buttons */}
      <HStack spacing={4} flexWrap="wrap" justify="center">
        <Button  border="1px solid #353535"
      borderRadius="md" backgroundColor={'transparent'} className='border border-#353535' size="lg">
          Contact Us Now
        </Button>
        <Button border="1px solid #353535"
      borderRadius="md" backgroundColor={'#056B38'} color={'#fff'} className='border border-#353535' size="lg">
          Call Now
        </Button>
      </HStack>
    </Box>

    <Box
     width={{ base: "90%", md: "90%" }} // Mobile: 90%, Desktop: 77%
     margin="auto"
     py={6}
     px={4}
     textAlign="center"
     display="flex"
     flexDirection="column"
     alignItems="center"
    >
        <Text color={'#C08729'}>
    We explore, prototype, refine, implement, and share innovative techniques for making legal information more findable and understandable for the public. We value accuracy and objectivity, both in the technologies we use and the content we publish
    </Text>
    <Image py={6} margin={'auto'} src={straightline} />
    </Box>
    </>
  )
}

export default Contactnow;
