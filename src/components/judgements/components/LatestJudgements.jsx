import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import React from "react";

export default function LatestJudgements() {
  return (
    <VStack gap={5}>
      <Text className=" text-[#07070B] text-2xl font-normal">
        Latest Judgements
      </Text>
      <Box border="1px solid #C08729" px={4} py={5} w="full">
        <Text className="text-sm font-normal text-black border-b-[1px] border-b-[#F0E5D4] leading-6">
          China Development Bank Vs. Doha Bank Q.P.S.C.
        </Text>
        <Text className="text-sm font-normal text-black border-b-[1px] border-b-[#F0E5D4] leading-6">
          Abdul Rejak Laskar Vs. Mafizur Rahman
        </Text>
        <Text className="text-sm font-normal text-black border-b-[1px] border-b-[#F0E5D4] leading-6">
          Dwarika Prasad (D) through LRS. Vs. Prithvi Raj Singh
        </Text>
        <Text className="text-sm font-normal text-black border-b-[1px] border-b-[#F0E5D4] leading-6">
          Bherulal Bhimaji Oswal (D) by LRS. Vs. Madhusudan N.Kumbhare
        </Text>
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
  );
}
