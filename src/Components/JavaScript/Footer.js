import React from "react";
import hassanjavaid from "../Photos/HJ.png";
import { Link, Element, animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <>
      <div className="footer_content flex items-center justify-center flex-col leading-[3.1]">
        <img
          src={hassanjavaid}
          className="footer_img w-[10rem] max-w-sm mb-[-1.2rem]"
          alt=""
        />
        <div className=" flex items-center justify-center ">
          <ul className="footer_ul flex items-center justify-center gap-[2rem] font-sans-serif font-[600]">
            <li>
              <Link
                className="nav_link"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                activeClass="nav_active"
                to="About"
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
                offset={-50}
                duration={500}
                to="Portfolio"
              >
                Portfolio
              </Link>
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
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <h3 className="footer_copyright text-[#7957d1eb] font-[sans-serif] text-[1.1rem]">
          &copy; 2024 All rights reserved by{" "}
          <span className="font-bold">Hassanjavaid!</span>
        </h3>
      </div>
    </>
  );
}

export default Footer;
