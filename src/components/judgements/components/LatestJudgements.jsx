import { Box, Flex, Spinner, Text, VStack } from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import React from "react";

export default function LatestJudgements({error,loading,judgements, tabName}) {
  return (
    <>
    {loading && <Spinner color="#C08729" size="lg" />}
                {error && <Text color="red.500">Error: {error}</Text>}
              
    <VStack gap={5}>
      
      <Text className=" text-[#07070B] text-2xl font-normal">
        Latest {tabName === 'Lok Sabha' || tabName === 'Rajya Sabha' ? 'Updates' : 'Judgements'}
      </Text>
      <Box border="1px solid #C08729" px={4} py={5} w="full">
      {judgements.slice(0,6).map((judgement, index) => (
        <Text className="text-sm font-normal text-black border-b-[1px] border-b-[#F0E5D4] leading-6">
        {judgement.title}
        </Text>
       ))}
        <Box justifyContent="center" display="flex">
          <Flex
            gap={2}
            mt={2}
            as="button"
            _hover={{ color: "#C08729" }}
            alignItems="center"
          >
            <Text className=" text-[12px] font-bold">See more</Text>
            <FaArrowRightLong />
          </Flex>
        </Box>
      </Box>
    </VStack>
    </>
  );
}
