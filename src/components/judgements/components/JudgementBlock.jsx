import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function JudgementBlock({ error, loading, judgements, searchQuery }) {
  // Filter judgements based on search query
  const filteredJudgements = judgements.filter((judgement) =>
    judgement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    judgement.date.includes(searchQuery)
  );

  return (
    <>
      {loading && <Spinner color="#C08729" size="lg" />}
      {error && <Text color="red.500">Error: {error}</Text>}
      {filteredJudgements.length === 0 && !loading && <Text color="gray.500">No results found.</Text>}
      {filteredJudgements.map((judgement, index) => (
        <Box key={index} py={3} px={7} border="1px solid #C08729" width={'100%'}>
          <Text className="text-[#C08729] text-sm">Supreme Court</Text>
          <Text className=" text-2xl text-black">{judgement.date}</Text>
          <Text className="text-[#353535] text-sm">{judgement.title}</Text>
          <Flex justify="flex-end">
            <Flex
              gap={2}
              align="center"
              mt={2}
              as="button"
              _hover={{ color: "#C08729" }}
            >
              <Text className=" text-[12px] font-bold" as="a" href={judgement.href} target="_blank" rel="noopener noreferrer">
                Learn more
              </Text>
              <FaArrowRightLong />
            </Flex>
          </Flex>
        </Box>
      ))}
    </>
  );
}
