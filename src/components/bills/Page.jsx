import { Box } from "@chakra-ui/react";
import React from "react";
import CommonFooter from "../CommonFooter";
import Bills from "./Bills";

export default function Page() {
  return (
    <>
      <Box pb={4} pt={{ base: "5rem", xl: "8rem" }}>
        <Bills />
      </Box>
      <CommonFooter />
    </>
  );
}
