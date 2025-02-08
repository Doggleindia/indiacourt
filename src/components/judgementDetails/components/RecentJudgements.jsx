import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import JudgeHammerImage from "../../../assets/judgements/judge_hammer.png";
import LawStatueImage from "../../../assets/judgements/law_statue.png";
import BookImage from "../../../assets/legalTopics/family_law_in_india.png";
import { Link } from "react-router-dom";

const RecentJudgementItem = ({ imgurl, title, desc }) => {
  return (
    <>
      <HStack
        align="center"
        spacing={4}
        flexDirection={{ base: "column", lg: "row" }}
        py={4}
      >
        <Image
          src={imgurl}
          width={{ base: "350px", md: "140px" }}
          alt="law_queen"
        />
        <VStack align="start" spacing={4}>
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
          <Link to={"/blog/:id"}>
            <Text
              fontWeight={"bold"}
              backgroundColor={"transparent"}
              size="md"
              color={"#C08729"}
              textAlign={"left"}
            >
              Read more
            </Text>
          </Link>
        </VStack>
      </HStack>
    </>
  );
};

export default function RecentJudgements() {
  return (
    <Box maxW={{ base: "100%", md: "35%" }}>
      <Text fontSize={"3xl"} fontWeight={"bold"}>
        Recent judgements
      </Text>
      <RecentJudgementItem
        title="23 cases have been successfully"
        desc="Lorem ipsum dolor sit amet."
        imgurl={JudgeHammerImage}
      />
      <RecentJudgementItem
        title="23 cases have been successfully"
        desc="Lorem ipsum dolor sit amet."
        imgurl={LawStatueImage}
      />

      <Flex justify="center" w="full">
        <Image mt={4} src={BookImage} maxH="300px" />
      </Flex>
    </Box>
  );
}
