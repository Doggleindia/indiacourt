import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../header/Navbar";
import Judgements from "./Judgements";
import Connect from "../homepagepart/Connect";
import FAQ from "../home/component/Faq";
import Advertisement from "../home/component/Advertisement";
import Inquiry from "../home/component/Inquiry";
import Footer from "../Footer";

export default function Page() {
  return (
    <Box pt={32}>
      <Navbar />
      <Judgements />
      <Connect />
      <Advertisement />
      <Box mb={5}>
        <Inquiry />
      </Box>

      <Footer />
      {/* <Findalawyer />

      <Advertisment />
      <Box pb={5}>
        <Inquiry />
      </Box>
      <Footer /> */}
    </Box>
  );
}
