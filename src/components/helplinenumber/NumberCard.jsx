import { Box, Text } from "@chakra-ui/react";
import React from "react";

const NumberCard = ({ title, number, idx }) => {
  return (
    <>
      <Box
        key={idx}
        py={3}
        backgroundColor={"#FEF0EA"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Text
          fontSize="lg"
          justifyContent={"center"}
          color={"#3A3A38"}
          fontWeight="medium"
        >
          {title.split("").slice(0, 12).join("")}{" "}
          {title.split("").length > 12 ? "..." : ""}
        </Text>
        <Text
          fontSize="lg"
          justifyContent={"center"}
          color={"#3A3A38"}
          fontWeight="medium"
        >
          {number}
        </Text>
      </Box>
    </>
  );
};

export default NumberCard;
