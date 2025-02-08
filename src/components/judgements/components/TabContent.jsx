import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import TrackInput from "./TrackInput";
import BookImage from "../../../assets/legalTopics/family_law_in_india.png";
import JudgementBlock from "./JudgementBlock";
import LatestJudgements from "./LatestJudgements";
import JudgementDetails from "./JudgementDetails";

export default function TabContent() {
  const arr = [...Array(8).keys()].map((i) => i);
  const base = 1920;

  return (
    <Box border="1px solid #BF987466" pl={9} pr={10} py={5}>
      <TrackInput />

      <Flex mt={8} w="full" gap={5} justify="space-between">
        <Box className="hidden md:flex flex-col" gap={6}>
          <Box border="1px solid #C08729" px={4} py={5} w="full">
            {arr.map((val) => (
              <Text className=" text-sm font-normal text-[#07070B] border-b-[1px] border-b-[#F0E5D4] leading-6 w-max mx-auto">
                {base - val * 10} - {base - val * 10 + 9}
              </Text>
            ))}
          </Box>
          <Image src={BookImage} w="197px" />
        </Box>

        <Box>
          <Flex gap={6} justify="space-between">
            <JudgementDetails />

            <Box className="hidden md:block">
              <LatestJudgements />
            </Box>
          </Flex>

          <VStack mt={4} gap={6}>
            <JudgementBlock />
            <JudgementBlock />
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
