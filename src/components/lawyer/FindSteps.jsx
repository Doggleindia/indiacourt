import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import StepsCard from './StepsCard'

const FindSteps = ({steps,lastimpression ,title,desc}) => {
  return (
    <>
       <Box
       display={'flex'}
       textAlign={'left'}
       justify="start"
       
                py={2}
                >    
                <VStack gap={'0'}>     
                <HStack  spacing={2}>
                  <Text color="#07070B" fontWeight={"bold"} fontSize={{base:'3xl',md:"3xl"}} >
                 {title}
                  </Text>
                  <HStack>
                    <Box height="2px" width="100px" bg="#C08729" />
                    <Box
                      width="12px"
                      height="12px"
                      bg="#C08729"
                      transform="rotate(45deg)"
                    />
                  </HStack>
                </HStack>
                <Text fontSize='sm' color="#000000" textAlign={'left'} marginRight={'auto'} >
              {desc}
                    </Text>
                    </VStack>
                </Box>
                    <StepsCard steps={steps} lastimpression={lastimpression}/>
    </>
  )
}

export default FindSteps