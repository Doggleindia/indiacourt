import { Button, Divider, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const BlogCard = ({imgurl,title,desc,top}) => {
  return (
    <>
     <HStack
              align="center"
              spacing={8}
              flexDirection={{ base: "column", md: "row" }}
              pt={top}
            >
              <Image src={imgurl} maxW={{base:'100%',md:"35%"}} alt="law_queen" />
              <VStack align="start" maxW={{base:'100%',md:"35%"}} spacing={4}>
                <Text fontSize="2xl" color="#07070B" fontWeight="semibold">
                 {title}
                </Text>
                <Divider
                  width={"100%"}
                  p={"1px"}
                  color={"#07070B"}
                  background={"#07070B"}
                />
                <Text fontSize="sm" color="#07070B">
                  {desc}
                </Text>
                <Button
                  width={"100%"}
                  backgroundColor={"#056B38"}
                  size="md"
                  color={"#ffff"}
                >
                  Read Now
                </Button>
              </VStack>
            </HStack>
    </>
  )
}

export default BlogCard