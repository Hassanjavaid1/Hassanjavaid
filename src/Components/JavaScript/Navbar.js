import React, { useEffect, useState } from "react";
import logo from "../Photos/HJ.png";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
function Navbar() {
  const [navScroll, setNavScroll] = useState(false);
  const [toggle, settoggle] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 300 && !navScroll) {
        setNavScroll(true);
      } else if (scrollY <= 300 && navScroll) {
        setNavScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navScroll]);
  const handleDisplay = () => {
    settoggle(!toggle);
  };
  return (
    <>
            <Element name="Navbar" className="Navbar">
      <nav className={navScroll ? "nav_scroll" : ""}>
        <div className="navbar flex items-center justify-center gap-[7rem]">
          <div className="flex items-center ">
            <Link
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                to="Navbar">
              <img
                src={logo}
                className="logo_img w-[12rem] max-w-sm h-[9rem] object-cover"
                alt=""
              />
            </Link>
            <a
              href="mailto:hassanjavaid159@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="email font[600] font-sans-serif ml-[-1.8rem] transition-all duration-500 hover:text-[#7c4be6] "
            >
              hassanjavaid159@gmail.com
            </a>
          </div>
          <ul
            className={`flex items-center justify-center gap-[2rem] font-sans-serif font-[600] ${
              toggle ? "visible" : "hide"
            }`}
          >
            <li>
              <Link
                className="nav_link"
                activeClass="nav_active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                to="About"
                onClick={handleDisplay}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="nav_link"
                activeClass="nav_active"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                to="Portfolio"
                onClick={handleDisplay}
              >
                Portfolio
              </Link>{" "}
            </li>
            <li>
              <Link
                className="nav_link"
                activeClass="nav_active"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
                to="Skills"
                onClick={handleDisplay}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="nav_link"
                activeClass="nav_active"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                to="Contact"
                onClick={handleDisplay}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="media_flex sm:flex sm:items-center sm:gap-8 ">
            <Link
              activeClass="button"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              to="Contact"
            >
              <button className="btn font-sans-serif font-bold rounded-[50px] py-[12px] px-[30px] sm:pt-[14px] sm:pb-[14px]">
                Hire Me!
              </button>
            </Link>
            <label htmlFor="check" className="burger hidden">
              <input type="checkbox" id="check" onClick={handleDisplay} />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
      </nav>
      </Element>
    </>
  );
}

export default Navbar;
