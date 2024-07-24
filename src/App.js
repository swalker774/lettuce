import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [heroVisible, setHeroVisible] = useState(true);

  return (
    <Router>
      <div className="bg-white text-[#4CAF50]">
        <Navbar setHeroVisible={setHeroVisible} />
        <Routes>
          <Route path="/" element={<Home heroVisible={heroVisible} />} />
          <Route path="/menu" element={<Menu heroVisible={heroVisible} />} />
          <Route path="/about" element={<About heroVisible={heroVisible} />} />
          <Route
            path="/contact"
            element={<Contact heroVisible={heroVisible} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
