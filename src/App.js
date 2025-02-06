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
        <Route path="/legal-topics" element={<LegalTopics />} />
        <Route path="/judgements" element={<Judgements />} />
        <Route path="/judgement-details" element={<JudgementDetails />} />
        {/* <Route path="/" element={<MainCourt />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
