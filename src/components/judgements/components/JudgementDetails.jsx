import { Box, Image, Text, VStack } from "@chakra-ui/react";
import CriminalLawImage from "../../../assets/judgements/criminal_law.png";
import React from "react";

export default function JudgementDetails() {
  return (
    <Box maxW="672px">
      <Image src={CriminalLawImage} />
      <VStack mt={4} gap={4}>
        <Text className=" text-3xl text-black">
          NOIDA Toll Bridge Company Ltd. Vs. Federation of NOIDA Residents
          Welfare Association
        </Text>
        <Text className=" text-sm text-[#353535]">
          The NOIDA Toll Bridge Company Limited (NTBCL), has preferred the
          instant appeal questioning the judgement dated 26.10.2016 passed by
          the High Court of Judicature at Allahabad (High Court).The NOIDA Toll
          Bridge Company Limited (NTBCL), has preferred the instant appeal
          questioning the judgement dated 26.10.2016 passed by the High Court of
          Judicature at Allahabad (High Court).{" "}
          <Text as="span" className="font-bold">
            Know more
          </Text>
        </Text>
      </VStack>
    </Box>
  );
}
