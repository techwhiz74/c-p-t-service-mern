import React, { useState } from "react";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { motion } from "framer-motion";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileDropdownVisible, setMobileDropdownVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    setMobileDropdownVisible(false);
    setDropdownVisible(false);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdownVisible(false);
    } else {
      setDropdownVisible(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdownVisible(false);
    } else {
      setDropdownVisible(false);
    }
  };
  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const location = useLocation();
  const getNavbarStyle = () => {
    switch (location.pathname) {
      case '/login':
        return 'other-navbar';
      case '/signup':
        return 'other-navbar';
      case '/programs':
        return 'other-navbar'
      case '/donate':
        return 'other-navbar';
      case '/ideas':
        return 'other-navbar';
      case '/volunteer':
        return 'other-navbar';
      case '/partner':
        return 'other-navbar';
      default:
        return 'navbar';
    }
  }


  return (
    <>
     <motion.nav
        className={`${getNavbarStyle()}`}
      >
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="./logo.png" alt="Logo" width={150} height={80} />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <motion.li className="nav-item"
          variants={linkVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}>
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </motion.li>
          <motion.li
            className="nav-item"
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className="aboutSection">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About <i className="fas fa-caret-down large-trigger" />
              </Link>
              <i
                className={
                  mobileDropdownVisible
                    ? "fas fa-caret-down mobile-trigger"
                    : "fas fa-caret-up mobile-trigger"
                }
                onClick={() => setMobileDropdownVisible(!mobileDropdownVisible)}
              />
            </div>
            {(dropdownVisible || mobileDropdownVisible) && <Dropdown />}
          </motion.li>
          <motion.li className="nav-item"
          variants={linkVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}>
            <Link to="/impact" className="nav-links" onClick={closeMobileMenu}>
              Impact
            </Link>
          </motion.li>
          <motion.li className="nav-item"
          variants={linkVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}>
            <Link
              to="/programs"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Programs
            </Link>
          </motion.li>
          <motion.li className="nav-item"
          variants={linkVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}>
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </motion.li>
          <motion.li
          variants={linkVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}>
            <Link
              to="/login"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign In
            </Link>
          </motion.li>
        </ul>
        {isLoggedIn ? (<LoginButton />) : (<LogoutButton />)}
        
      </motion.nav>
    </>
  );
}

export default Navbar;
