import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ image, version, title, description, _id }) {
  return (
    <VStack gap={4} align="start" maxW="sm">
      <Box className="border border-[#353535] p-5 relative" overflow="hidden">
        <Link to={`/books/${_id}`}>
          {/* Book Image */}
          <Image src={image} className="w-full h-auto object-fit" />
          {/* Overlay Title on Image */}
          <Text
            position="absolute"
            bottom="220px"
            left="50%"
            transform="translateX(-50%)"
            color="gold"
            fontWeight="bold"
            fontSize="lg"
            textAlign="center"
            bg=""
            px={3}
            py={1}
            borderRadius="md"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
          >
            {title}
          </Text>
        </Link>
      </Box>
      <Box w="full">
        <Text className="text-base text-[#07070B]">{title}</Text>
        <Text className="text-base text-[#07070B]">{version}</Text>
        <Text className="text-xs text-[#07070B]">{description}</Text>
      </Box>
    </VStack>
  );
}
