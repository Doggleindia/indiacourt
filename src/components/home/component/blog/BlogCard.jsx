import { Button, Divider, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({imgurl,title,desc,Direction,width,to}) => {
  return (
    <>
     <HStack
              align="center"
              spacing={4}
              flexDirection={{ base: "column", md: Direction || "row" }}
              // pt={top}
            >
              <Image src={imgurl} width={{base:'100%',md: width ||"50%"}} height={'30vh'} alt="law_queen" />
              <VStack align="start" maxW={{base:'100%',md: width || "50%"}} spacing={4}>
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
                <Link to={to}>
                <Button
                  width={"100%"}
                  backgroundColor={"#056B38"}
                  size="md"
                  color={"#ffff"}
                >
                  Read Now
                </Button>
                </Link>
              </VStack>
            </HStack>
    </>
  )
}

export default BlogCard