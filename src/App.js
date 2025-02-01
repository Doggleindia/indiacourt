import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import MainCourt from "./components/homepagepart/MainCourt";
import Hero from "./components/home/page";

function App() {
  return (
    
        <Router>
          <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/" element={<MainCourt />} />
          </Routes>
        </Router>
         
    
  );
}

export default App;
