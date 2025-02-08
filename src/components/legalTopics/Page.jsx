import { Box } from "@chakra-ui/react";
import React from "react";
import LegalTopics from "./LegalTopics";
import Navbar from "../header/Navbar";
import Findalawyer from "../home/component/Findalawyer";
import Faq from "../home/component/Faq";
import Advertisment from "../home/component/Advertisement";
import Inquiry from "../home/component/Inquiry";
import Footer from "../Footer";

export default function Page() {
  return (
    <Box pt={32}>
      {/* <Navbar /> */}
      <LegalTopics />
      <Findalawyer />
      <Faq />
      <Advertisment />
      <Box pb={5}>
        <Inquiry />
      </Box>
      <Footer />
    </Box>
  );
}
