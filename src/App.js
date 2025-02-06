import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Hero from "./components/home/page";
import Helplinenumber from "./components/helplinenumber/Page";
import Resources from "./components/resources/page";
import Articles from "./components/articles/Articles";

function App() {
  return (
    
        <Router>
          <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/help-line" element={<Helplinenumber />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/articles" element={<Articles />} />
          {/* <Route path="/" element={<MainCourt />} /> */}
          </Routes>
        </Router>
         
    
  );
}

export default App;
