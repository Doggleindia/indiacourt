import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function JudgementBlock() {
  return (
    <Box py={3} px={7} border="1px solid #C08729">
      <Text className="text-[#C08729] text-sm">Supreme Court</Text>
      <Text className=" text-2xl text-black">
        NOIDA Toll Bridge Company Ltd. Vs. Federation of NOIDA Residents Welfare
        Association
      </Text>
      <Text className="text-[#353535] text-sm">
        The NOIDA Toll Bridge Company Limited (NTBCL), has preferred the instant
        appeal questioning the judgement dated 26.10.2016 passed by the High
        Court of Judicature at Allahabad (High Court). The issue before the High
        Court concerned a challenge to the collection and levying of toll, as
        legitimised by the provisions enumerated in the Agreement dated
        12.11.1997
      </Text>
      <Flex gap={2} align="center" mt={2} justify="flex-end">
        <Text className=" text-[12px] font-bold">Learn more</Text>
        <FaArrowRightLong />
      </Flex>
    </Box>
  );
}
