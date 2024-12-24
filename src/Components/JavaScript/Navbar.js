import React, { useEffect, useState } from "react";
import logo from "../Photos/HJ.png";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import { RxCross1 } from "react-icons/rx";
import { FaAlignRight } from "react-icons/fa6";

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
    if(!toggle){
      settoggle(true);
    }else{
      settoggle(false)
    }
  };

  return (
    <>
      <Element name="Navbar" className="Navbar">
        <nav className={navScroll ? "nav_scroll" : ""}>
          <div className="navbar flexClass container_width">
            <div className="flex items-center ">
              <Link
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                to="Navbar"
              >
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
            <div className="media_flex">
              <Link
                activeClass="button"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                to="Contact"
              >
                <button className="btn font-sans-serif font-bold text-nowrap rounded-[50px] py-[17px] px-[35px]">
                  Hire Me!
                </button>
              </Link>
              {
                !toggle?(
                  <FaAlignRight className="burger hidden text-[3rem]" onClick={handleDisplay}/>
                ):(
                  <RxCross1 className=" text-[3rem] burger hidden" onClick={handleDisplay}/>
                )
              }
            </div>
          </div>
        </nav>
      </Element>
    </>
  );
}

export default Navbar;
