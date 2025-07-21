//import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Faq from "./components/Faq";
import HowTujengeWorks from "./components/HowTujengeWorks";
import SuccessStories from "./components/SuccessStories";
import Opportunities from "./components/Opportunities";
import GroupSavings from "./components/GroupSavings";

// Layout-aware wrapper
function LayoutWrapper({ children }) {
  const location = useLocation();
  const hideLayout = ["/signup", "/login"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/learn/how-tujenge-works" element={<HowTujengeWorks />} />
          <Route path="/invest/stories" element={<SuccessStories />} />
          <Route path="/invest/opportunities" element={<Opportunities />} />
          <Route path="/save/group" element={<GroupSavings />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
