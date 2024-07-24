import React from 'react'
import {
    Route,
    Routes,
    Navigate,
    useLocation
  } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Impact from "./components/pages/Impact";
import Programs from "./components/pages/Programs";
import ContactUs from "./components/pages/ContactUs";
import SignUp from "./components/pages/SignUp";
import Team from "./components/pages/TeamPage";
import NewsCard from "./components/Cards/News/NewsCard";
import DetailedNews from "./components/Cards/News/DetailedNews";
import Signup from "./components/Forms/SignUp/register/Signup";
import Login from "./components/Forms/SignUp/login/Login";
import{AnimatePresence} from "framer-motion"
import Donate from "./components/Cards/MoreWays/Donate";
import Ideas from "./components/Cards/MoreWays/Ideas";
import Partner from "./components/Cards/MoreWays/Partner";
import Volunteer from "./components/Cards/MoreWays/Volunteer";

function AnimatedRoutes() {
    const user = localStorage.getItem("token");
    const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<NewsCard />} />
          <Route path="/news/:id" element={<DetailedNews />} />
          {user && <Route path="/sign-up" element={<SignUp />} />}
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/sign-up" element={<Navigate replace to="/login" />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/ideas' element={<Ideas />} />
          <Route path='/volunteer' element={<Volunteer />} />
          <Route path='/partner' element={<Partner />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes