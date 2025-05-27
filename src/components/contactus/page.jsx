import React from "react";
import Inquiry from "../home/component/Inquiry";
import { Box } from "@chakra-ui/react";
import Contact from "./Contact";
import Connect from "../homepagepart/Connect";
import Faq from "../home/component/Faq";
import Advertisment from "../home/component/Advertisement";
import Footer from "../Footer";

const Page = () => {
  return (
    <>
      <Box
        pt={{ base: "5rem", xl: "5rem" }}
        overflowX="hidden" // ⛔ Prevents horizontal scroll
      >
        {/* Use Box instead of Container unless you want fixed maxWidth */}
        <Box maxW="container.7xl" >
          <Contact />
          <Connect />
          <Faq />
          <Advertisment />
          <Inquiry />
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Page;
