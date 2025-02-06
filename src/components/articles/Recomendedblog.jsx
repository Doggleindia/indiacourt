import { Button, Divider, HStack, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Recomendedblog = ({imgurl,title,desc,top}) => {
  return (
  <>
   <HStack
                align="center"
                spacing={4}
                flexDirection={{ base: "column", md: "row" }}
                py={4}
              >
                <Image src={imgurl} width={{base:'350px',md:"140px"}} alt="law_queen" />
                <VStack align="start" maxW={{base:'100%',md:"35%"}} spacing={4}>
                  <Text fontSize="2xl" color="#07070B" fontWeight="semibold">
                   {title}
                  </Text>
                  <Divider
                    width={"100%"}
                    p={"1px"}
                    color={"#07070B"}
                    background={"#C08729"}
                  />
                  <Text fontSize="sm" color="#07070B">
                    {desc}
                  </Text>
                  <Link to={'/blog/:id'}>
                  <Text
                  fontWeight={'bold'}
                    backgroundColor={"transparent"}
                    size="md"
                    color={"#C08729"}
                    textAlign={'left'}
                  >
                    Read Now
                  </Text>
                  </Link>
                </VStack>
              </HStack>
               
  </>
  )
}

export default Recomendedblog