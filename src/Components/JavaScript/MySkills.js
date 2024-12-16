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
          <p className="title_desc" data-aos="fade-up">
            These are the skills that shape your ideas and vision
            <br />into Reality.
          </p>
          <section data-aos="fade-up" className="myskills flex flex-wrap justify-center align-items-center gap-[2rem] m-auto mt-[5rem] gap-y-[4rem] w-[80%] ">
            {mySkills.map(({ tech_img, name, svg_title }) => (
              <div
                title={svg_title}
                key={svg_title}
                className="w-fit"
                
              >
                <div className="group w-fit h-[10rem] bg-[#37214d] p-[2.6rem] rounded-[22px] grayscale-[1] hover:bg-[#2A1454] hover:grayscale-0 hover:border hover: border-[#8750f7] transition-colors duration-[.5s]">
                  <img
                    src={tech_img}
                    className=" w-[4rem] group-hover:scale-[1.1] transition-all duration-[0.5s]"
                    alt=""
                  />
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
