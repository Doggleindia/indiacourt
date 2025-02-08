import React from "react";
import Books from "./Books";
import Findalawyer from "../home/component/Findalawyer";
import Faq from "../home/component/Faq";
import Advertisment from "../home/component/Advertisement";
import { Box } from "@chakra-ui/react";
import Footer from "../Footer";
import Inquiry from "../home/component/Inquiry";
import Navbar from "../header/Navbar";

export default function Page() {
  return (
    <>
     <Navbar/>
      <Books />
      <Findalawyer />
      <Faq />
      <Advertisment />
      <Box pb={5}>
        <Inquiry />
      </Box>
      <Footer />
    </>
  );
}
