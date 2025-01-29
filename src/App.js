import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import MainCourt from "./components/homepagepart/MainCourt";

function App() {
  return (
    
        <Router>
          <Routes>
          <Route path="/" element={<MainCourt />} />
          </Routes>
        </Router>
         
    
  );
}

export default App;
