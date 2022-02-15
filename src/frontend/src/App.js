import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./components/pages/Home";
import Gan from "./components/pages/Gan";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gan" element={<Gan />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
