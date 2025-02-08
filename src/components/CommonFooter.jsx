import React from "react";
import Findalawyer from "./home/component/Findalawyer";
import Faq from "./home/component/Faq";
import Advertisement from "./home/component/Advertisement";
import Inquiry from "./home/component/Inquiry";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

export default function CommonFooter() {
  return (
    <>
      <Findalawyer />
      <Faq />
      <Advertisement />
      <Box pb={5}>
        <Inquiry />
      </Box>
      <Footer />
    </>
  );
}
