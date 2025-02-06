import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../header/Navbar";
import JudgementDetails from "./JudgementDetails";

export default function Page() {
  return (
    <Box pt={32}>
      <Navbar />
      <JudgementDetails />
      {/* <Connect />
      <Advertisement />
      <Box mb={5}>
        <Inquiry />
      </Box>
      <Footer /> */}
    </Box>
  );
}
