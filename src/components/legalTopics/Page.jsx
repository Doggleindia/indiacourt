import { Box } from "@chakra-ui/react";
import React from "react";
import LegalTopics from "./LegalTopics";
import CommonFooter from "../CommonFooter";

export default function Page() {
  return (
    <>
      <Box pt={{ base: "5rem", xl: "8rem" }}>
        <LegalTopics />
      </Box>

      <CommonFooter />
    </>
  );
}
