import React from "react";
import { mySkills } from "./CustomApi";
import { Element } from "react-scroll";
function MySkills() {
  return (
    <>
      <div className="myskills_container text-center pt-[5rem] pb-[5rem]">
        <h1 className="heading_title" data-aos="fade-up">
          My Skills
        </h1>
        <Element name="MYSkills" className="Skills">
          <p className="title_desc">
            I put your ideas and thus your wishes in the form of a unique web
            project that <br /> inspires you and your customers.
          </p>
          <section className="myskills flex flex-wrap justify-center gap-[2rem] m-auto mt-[5rem] gap-y-[4rem] w-[80%] ">
            {mySkills.map(({ tech_img, level, name, svg_title }) => (
              <div
                title={svg_title}
                key={svg_title}
                className="w-fit"
                data-aos="fade-left"
              >
                <div className="group w-fit h-[10rem] bg-[#37214d] leading-[4rem] pt-[2.2rem] pl-[3rem] pr-[3rem] rounded-[22px] grayscale-[1] hover:bg-[#2A1454] hover:grayscale-0 hover:border hover: border-[#8750f7] transition-colors duration-[1s] flex flex-col items-center">
                  <img
                    src={tech_img}
                    className=" w-[3.5rem] group-hover:scale-[1.1] transition-all duration-[0.5s]"
                    alt=""
                  />
                  <p className="skill_level text-[1.4rem] font-[sans-serif] font-bold group-hover:text-[#8750F7]">
                    {level}
                  </p>
                </div>
                <p className="name text-[#8e27e5] text-[1.1rem] mt-[0.9rem] font-[sans-serif]">
                  {name}
                </p>
              </div>
            ))}
          </section>
        </Element>
      </div>
    </>
  );
}

export default MySkills;
