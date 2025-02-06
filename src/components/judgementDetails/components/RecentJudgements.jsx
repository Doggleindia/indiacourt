import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import JudgeHammerImage from "../../../assets/judgements/judge_hammer.png";
import LawStatueImage from "../../../assets/judgements/law_statue.png";
import BookImage from "../../../assets/legalTopics/family_law_in_india.png";

const RecentJudgementItem = ({ image }) => {
  return (
    <Flex gap={3} align="center" h="max-content">
      <Box w="max-content">
        <Image src={image} />
      </Box>
      <VStack>
        <Text className="text-2xl text-[#07070B]">
          23 cases have been successfully
        </Text>
        <Box h="1px" bg="#C08729" w="full" />
        <Text className="text-lg text-[#07070B]">
          Lorem ipsum dolor sit amet.
        </Text>
        <Text color="#C08729">read more</Text>
      </VStack>
    </Flex>
  );
};

export default function RecentJudgements() {
  return (
    <VStack align="start">
      <Text className=" text-[#07070B] text-3xl font-normal">
        Recent Judgements
      </Text>
      <RecentJudgementItem image={JudgeHammerImage} />
      <RecentJudgementItem image={LawStatueImage} />

      <Flex justify="center" w="full">
        <Image mt={4} src={BookImage} maxH="300px" />
      </Flex>
    </VStack>
  );
}
