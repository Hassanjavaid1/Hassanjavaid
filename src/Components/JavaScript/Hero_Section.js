import React, { useRef, useState, useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import hassan from "../Photos/my_pic.png";
import CountUp from "react-countup";
import { Element } from "react-scroll";

function Hero_Section() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
          }
        });
      },
      {
        threshold: 0.7,
      }
    );
    observer.observe(targetRef.current);
  }, []);

  return (
    <>
      <Element name="About" className="About container_width">
        <section className="hero_section">
          <div className="hero_container flexClass !justify-around mt-16">
            <div className="hero_description w-1/2" data-aos="fade-right">
              <h3 className="hero_name font-bold text-[2.8rem] font-sans-serif text-[#DDDDDD]">
                I'm Hassanjavaid
              </h3>

              <h1 className="heading_title font-bold text-[3rem] text-uppercase font-sans-serif">
                FrontEnd React + <br /> NodeJS Developer
              </h1>

              <p className="hero_intro text-[1.4rem] max-w-[100%] w-[31.9rem] font-sans-serif text-[#D6D6D7] mt-[1.3rem]">
                I break down complex user experience problems to create
                integritiy focussed solutions that connect people.
              </p>
              <div className="resume_social flex items-center gap-[2.3rem] space-y-[23] mt-[2rem]">
                <div className="flex items-center gap-[1.1rem] z-40">
                  <a
                    href="https://www.linkedin.com/in/hassan-javaid-aa7610290/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="svg_icon"
                  >
                    {" "}
                    <FaLinkedinIn className="icon" />
                  </a>
                  <a
                    href="https://github.com/Hassanjavaid1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="svg_icon"
                  >
                    {" "}
                    <FaGithub className="icon" />
                  </a>
                </div>
              </div>
            </div>
            <h1 className="animated-text">HI</h1>

            <div data-aos="fade-left" className="">
              <img
                src={hassan}
                alt=""
                className="hero_pic object-cover rounded-[0.8rem] border-[2px] border-[#9c6cff5e] hover:border-[#7f4ae7] transform rotate-2 hover:rotate-0"
              />
            </div>
            
          </div>
          <div
            ref={targetRef}
            className="hero_counter flex items-center justify-evenly flex-wrap mt-5rem pb-[2rem] mt-[5rem]"
          >
            {isIntersecting && (
              <>
                <h4 className="about_hero text-[3rem] text-[#DDDDDD] font-400 text-[4.6rem] flex items-center justify-center font-sans-serif gap-[0.3rem]">
                  <CountUp end={2} />
                  <span className="counter_text text-[1rem] font-sans-serif opacity-[0.9] ">
                    Years of <br /> Experience
                  </span>
                </h4>
                <h4 className="about_hero text-[3rem] text-[#DDDDDD] font-400 text-[4.6rem] flex items-center justify-center font-sans-serif gap-[0.3rem]">
                  <CountUp end={parseFloat(9)} />+
                  <span className="counter_text text-[1rem] font-sans-serif opacity-[0.9] ">
                    Projects <br /> Completed
                  </span>
                </h4>
                <h4 className="about_hero text-[3rem] text-[#DDDDDD] font-400 text-[4.6rem] flex items-center justify-center font-sans-serif gap-[0.3rem]">
                  <CountUp end={1} />{" "}
                  <span className="counter_text text-[1rem] font-sans-serif opacity-[0.9] ">
                    Internship <br />
                    Completed
                  </span>
                </h4>
              </>
            )}
          </div>
        </section>
      </Element>
    </>
  );
}

export default Hero_Section;
