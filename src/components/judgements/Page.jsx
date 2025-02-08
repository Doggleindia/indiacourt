import { Box } from "@chakra-ui/react";
import React from "react";
import Judgements from "./Judgements";
import CommonFooter from "../CommonFooter";

export default function Page() {
  return (
    <>
      <Box pb={4} pt={{ base: "5rem", xl: "8rem" }}>
        <Judgements />
      </Box>
      <CommonFooter />
    </>
  );
}
