import React, { useRef, useState, useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import hassan from "../Photos/my_pic.png";
import CountUp from "react-countup";
import { Element } from "react-scroll";

function Hero_Section() {
  // const [isIntersecting, setIsIntersecting] = useState(false);
  // const targetRef = useRef(null); // Reference to the observed element

  // useEffect(() => {
  //   // Define the callback function that will handle intersection events
  //   const observerCallback = (entries,observe) => {
  //     const [entry] = entries; // We only observe one element, so we get the first entry
  //     console.log("entery:", entries);
  //     setIsIntersecting(entry.isIntersecting); // Update state based on intersection
  //   };

  //   // Set up Intersection Observer with desired options
  //   const observerOptions = {
  //     root: null, // Observe against the viewport
  //     rootMargin: "0px",
  //     threshold: 0.1, // Trigger when 50% of the element is visible
  //   };

  //   // Create a new Intersection Observer
  //   const observer = new IntersectionObserver(
  //     observerCallback,
  //     observerOptions
  //   );

  //   // Start observing the target element
  //   if (targetRef.current) observer.observe(targetRef.current);

  // }, []);

  return (
    <>
      <Element name="About" className="About">
        <section className="hero_section">
          <div className="hero_container flex items-center justify-center gap-[17rem] mt-16">
            <div className="hero_description" data-aos="fade-right">
              <h3 className="hero_name font-bold text-[2.8rem] font-sans-serif text-[#DDDDDD]">
                I'm Hassanjavaid
              </h3>

              <h1 className="heading_title font-bold text-[3rem] text-uppercase font-sans-serif">
                FrontEnd React + <br /> NodeJS Developer
              </h1>

              <p className="hero_intro text-[1.4rem] max-w-[100%] w-[31.9rem] font-sans-serif text-[#D6D6D7] mt-[1.3rem]">
                I break down complex user experinece problems to create
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

            <div data-aos="fade-left">
              <img
                src={hassan}
                alt=""
                title="Hassanjavaid"
                class="hero_pic max-h-[30rem] w-[27rem] object-cover rounded-[0.8rem] border-[2px] border-[#9c6cff5e] contrast-[1] hover:border-[#7f4ae7] transform rotate-2 hover:rotate-0"
              />
            </div>
          </div>

          <div className="hero_counter flex items-center justify-center mt-5rem pb-[2rem] gap-[17rem] mt-[2rem]">
            <h4 className="about_hero text-[3rem] text-[#DDDDDD] font-bold text-[4.6rem] flex items-center justify-center font-sans-serif gap-[0.3rem]">
              <CountUp end={2} />
              <span className="counter_text text-[1rem] font-sans-serif opacity-[0.9] font-[600] ">
                Years of <br /> Experience
              </span>
            </h4>
            <h4 className="about_hero text-[3rem] text-[#DDDDDD] font-bold text-[4.6rem] flex items-center justify-center font-sans-serif gap-[0.3rem]">
              <CountUp end={parseFloat(9)} />+
              <span className="counter_text text-[1rem] font-sans-serif opacity-[0.9] font-[600] ">
                Projects <br /> Completed
              </span>
            </h4>
            <h4 className="about_hero text-[3rem] text-[#DDDDDD] font-bold text-[4.6rem] flex items-center justify-center font-sans-serif gap-[0.3rem]">
              <CountUp end={1} />{" "}
              <span className="counter_text text-[1rem] font-sans-serif opacity-[0.9] font-[600] ">
                Internship <br />
                Completed
              </span>
            </h4>
          </div>
        </section>
      </Element>
    </>
  );
}

export default Hero_Section;
