import React from "react";
import Navbar from "../header/Navbar";
import Hero from "./component/Hero";
import Counter from "./component/Counter";
import Highlights from "./component/Highlights";
import Judgements from "./component/Judgements";
import LegalBooks from '../homepagepart/LegalBooks'
import Connect from '../homepagepart/Connect'
import Services from '../homepagepart/Services'
import HelpLine from '../homepagepart/HelpLine'
import Resources from "./component/Resources";
import Findalawyer from "./component/Findalawyer";
import Faq from "./component/Faq";
import Blog from "./component/blog/Blog";
import Joinus from "./component/Joinus";
import Advertisment from "./component/Advertisement";
import Inquiry from "./component/Inquiry";
import Subscribe from "./component/Subscribe";
import Footer from "../Footer";
const page = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Counter />
      <Highlights />
      <Judgements />
      <LegalBooks />
      <Connect />
      <Services />
      <HelpLine />
      <Resources/>
      <Findalawyer/>
      <Blog/>
      <Faq/>
      <Joinus/>
      <Advertisment/>
      <Inquiry/>
      <Subscribe/>
      <Footer />
    </>
  );
};

export default page;
