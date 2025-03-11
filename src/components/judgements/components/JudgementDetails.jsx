import { Box, Image, Text, VStack } from "@chakra-ui/react";
import CriminalLawImage from "../../../assets/judgements/criminal_law.png";
import React from "react";

export default function JudgementDetails({error,loading,judgements}) {
  return (
    <Box maxW="672px">
      <Image src={CriminalLawImage} />
      <VStack mt={4} gap={4}>
      {judgements && judgements.length > 0 ?  judgements.slice(0,1).map((judgement, index) => (
        <>
        <Text className=" text-3xl text-black">
        {judgement.title}
        </Text>
        <Text className=" text-sm text-[#353535]">
          The NOIDA Toll Bridge Company Limited (NTBCL), has preferred the
          instant appeal questioning the judgement dated 26.10.2016 passed by
          the High Court of Judicature at Allahabad (High Court).The NOIDA Toll
          Bridge Company Limited (NTBCL), has preferred the instant appeal
          questioning the judgement dated 26.10.2016 passed by the High Court of
          Judicature at Allahabad (High Court).{" "}
          <Text cursor="pointer" className="font-bold"  as="a"   href={judgement.href} target="_blank" rel="noopener noreferrer">
            Know more
          </Text>
        </Text>
        </>

         ))
        
         : (
          <Text color="gray.500">No data available</Text>)}
      </VStack>
    </Box>
  );
}
