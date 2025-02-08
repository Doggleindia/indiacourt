import { Box } from "@chakra-ui/react";
import React from "react";
import LegalTopicDetails from "./LegalTopicDetails";
import CommonFooter from "../CommonFooter";

export default function Page() {
  return (
    <>
      <Box pt={{ base: "5rem", xl: "8rem" }}>
        <LegalTopicDetails />
      </Box>

      <CommonFooter />
    </>
  );
}
