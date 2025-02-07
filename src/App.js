import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/home/page";
import Helplinenumber from "./components/helplinenumber/Page";
import LegalTopics from "./components/legalTopics/Page";
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/help-line" element={<Helplinenumber />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/acts" element={<Acts />} />
        <Route path="/acts/:id" element={<Particularacts />} />
        <Route path="/acts/:id/desc" element={<ActsDesc />} />
        <Route path="/legal-topics" element={<LegalTopics />} />
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
        <Route path="/book/:id" element={<BookDetails />} />
        {/* <Route path="/" element={<MainCourt />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
