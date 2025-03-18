import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Hero from "./components/home/page";
import Helplinenumber from "./components/helplinenumber/Page";
import LegalTopics from "./components/legalTopics/Page";
import LegalTopicDetails from "./components/legalTopicDetails/Page";
import Resources from "./components/resources/page";
import Articles from "./components/articles/Articles";
import BlogDetails from "./components/home/component/blog/BlogDetails";
import Acts from "./components/acts/Acts";
import Particularacts from "./components/acts/Particularacts";
import Judgements from "./components/judgements/Page";
import JudgementDetails from "./components/judgementDetails/Page";
import ActsDesc from "./components/acts/ActsDesc";
import CaseNumber from "./components/casenumber/CaseNumber";
import Contactus from "./components/contactus/page";
import Lawyer from "./components/lawyer/Lawyer";
import Resolution from "./components/resolution/Resolution";
import Joinlawyer from "./components/lawyer/JoinAsLawyer/Joinlawyer";
import { ValidateDocument } from "./components/validate/ValidateDocument";
import Dictionary from "./components/dictionary/Dictionary";
import Books from "./components/books/Page";
import BookDetails from "./components/bookDetails/Page";
import Navbar from "./components/header/Navbar";
import ChatScreen from "./components/chatscreen/chatscreen";
import { useState } from "react";
import StickyChatBox from "./components/home/component/StickyChatBox";
import ScrollToTop from "./config/ScrollToTop";
import Bills from "./components/bills/Page";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(true);
  
  const handleToggleChat = () => {
    console.log("this is click");
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <Router>
        
      <ScrollToTop />
        <AppContent isChatOpen={isChatOpen} handleToggleChat={handleToggleChat} />
      </Router>
    </>
  );
}

function AppContent({ isChatOpen, handleToggleChat }) {
  const location = useLocation(); 
  const isHomePage = location.pathname === "/";
  return (
    <>
       {!isHomePage && <Navbar />}
      {location.pathname !== "/chat" && (
        <StickyChatBox isChatOpen={isChatOpen} handleToggleChat={handleToggleChat} />
      )}

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/chat" element={<ChatScreen />} />
        <Route path="/help-line" element={<Helplinenumber />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/acts" element={<Acts />} />
        <Route path="/acts/:id" element={<Particularacts />} />
        <Route path="/desc" element={<ActsDesc />} />
        <Route path="/legal-topics" element={<LegalTopics />} />
        <Route path="/legal-topic/:id" element={<LegalTopicDetails />} />
        <Route path="/judgements" element={<Judgements />} />
        <Route path="/judgement/:id" element={<JudgementDetails />} />
        <Route path="/case-number" element={<CaseNumber />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/find-lawyer" element={<Lawyer />} />
        <Route path="/resolution" element={<Resolution />} />
        <Route path="/join-as-lawyer" element={<Joinlawyer />} />
        <Route path="/validate" element={<ValidateDocument />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/bills" element={<Bills />} />
      </Routes>
    </>
  );
}

export default App;
