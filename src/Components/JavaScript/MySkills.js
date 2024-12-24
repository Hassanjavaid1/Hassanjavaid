import React from "react";
import { mySkills } from "./CustomApi";
import { Element } from "react-scroll";

function MySkills() {
  return (
    <>
      <div className="myskills_container container_width text-center paddingTB">
        <h1 className="heading_title" data-aos="fade-up">
          My Skills
        </h1>
        <Element name="MYSkills" className="Skills">
          <p className="title_desc" data-aos="fade-up">
            These are the skills that shape your ideas and vision
            <br />
            into reality.
          </p>
          <section
            data-aos="fade-up"
            className="myskills flexClass !justify-center  flex-wrap  m-auto mt-[5rem] gap-y-[4rem] gap-x-[1rem]"
          >
            {mySkills.map(({ tech_img, name }) => (
              <div key={name} className="w-fit">
                <div className="group w-fit h-[10rem] bg-[#37214d] p-[2.6rem] px-[3.4rem] rounded-[22px] bg-[#140c1c] hover:bg-[#2A1454] hover:grayscale-0 hover:border hover: border-[#8750f7] transition-colors duration-[.6s]">
                  <img
                    src={tech_img}
                    className=" w-[4rem] transition-all duration-[0.5s] grayscale-[1] group-hover:scale-[1.1] group-hover:grayscale-[0]"
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
