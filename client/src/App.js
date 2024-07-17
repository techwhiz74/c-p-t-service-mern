import React from "react";
import {
  BrowserRouter as Router,
  
} from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTopButton";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <AnimatedRoutes/>
        <BackToTop />
        <Footer />
      </Router>
    </>
  );
}

export default App;
