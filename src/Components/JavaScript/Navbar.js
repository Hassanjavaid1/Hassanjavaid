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
    if (!toggle) {
      settoggle(true);
    } else {
      settoggle(false);
    }
  };

  return (
    <>
      <Element name="Navbar" className={navScroll ? "nav_scroll" : ""}>
        <nav className="container mx-auto px-6 py-4 relative lg:px-10 lg:py-6 xl:px-28 xl:py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center lg:gap-12">
              <Link
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                to="Navbar"
              >
                <img
                  src={logo}
                  className="w-[80px] h-[55px] logo_img  object-cover 2xl:w-[90px] 2xl:h-[65px]"
                  alt=""
                />
              </Link>
              <a
                href="mailto:hassanjavaid159@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden email font[600] font-sans-serif ml-[-1.8rem] transition-all duration-500 hover:text-[#7c4be6] lg:block 2xl:font-semibold"
              >
                hassanjavaid159@gmail.com
              </a>
            </div>
            <ul
              className={`${
                toggle ? "flex" : "hidden"
              } flex-col items-center justify-center gap-8 absolute left-0 right-0 top-20 z-50  h-screen bg-[#2a1454] text-4xl font-sans-serif font-[600] lg:flex lg:flex-row lg:static lg:bg-transparent lg:text-lg lg:h-auto`}
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
            <div className="flex items-center gap-4">
              <Link
                activeClass="button"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                to="Contact"
              ></Link>
              <button className="btn font-sans-serif font-bold text-nowrap rounded-full py-3 px-7 xl:px-10 xl:py-4">
                Hire Me!
              </button>
              {!toggle ? (
                <FaAlignRight
                  className="burger text-4xl lg:hidden"
                  onClick={handleDisplay}
                />
              ) : (
                <RxCross1
                  className="text-4xl burger lg:hidden"
                  onClick={handleDisplay}
                />
              )}
            </div>
          </div>
        </nav>
      </Element>
    </>
  );
}

export default Navbar;
