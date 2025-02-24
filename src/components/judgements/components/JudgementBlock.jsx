import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";


export default function JudgementBlock({error,loading,judgements}) {
  
  return (
    <>
    {loading && <Spinner color="#C08729" size="lg" />}
            {error && <Text color="red.500">Error: {error}</Text>}
            {judgements.map((judgement, index) => (
    <Box py={3} px={7} border="1px solid #C08729" width={'100%'}>
      <Text className="text-[#C08729] text-sm">Supreme Court</Text>
      <Text className=" text-2xl text-black">
      {judgement.date}
      </Text>
      <Text className="text-[#353535] text-sm">
        
      {judgement.title}
      </Text>
      <Flex justify="flex-end">
        <Flex
          gap={2}
          align="center"
          mt={2}
          as="button"
          _hover={{ color: "#C08729" }}
        >
          <Text className=" text-[12px] font-bold"  as="a"   href={judgement.href} target="_blank" rel="noopener noreferrer">Learn more</Text>
          <FaArrowRightLong />
        </Flex>
      </Flex>
    </Box>
     ))}
    </>
  );
}
