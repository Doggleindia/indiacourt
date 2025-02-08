import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function BookCard({ image, version, title, description }) {
  return (
    <VStack gap={4} align="start" maxW="sm">
      <Box className="border border-[#353535] p-5">
        <Image src={image} />
      </Box>
      <Box w="full">
        <Text className=" text-base text-[#07070B]">{version}</Text>
        <Text className=" text-2xl text-[#07070B]">{title}</Text>
        <Text className=" text-xs text-[#07070B]">{description}</Text>
      </Box>
    </VStack>
  );
}
