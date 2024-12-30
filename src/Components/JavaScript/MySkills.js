import React from "react";
import { mySkills } from "./CustomApi";
import { Element } from "react-scroll";

function MySkills() {
  return (
    <>
      <div className="container mx-auto p-3 py-8 text-center md:py-20 lg:py-20 xl:px-28">
        <Element name="MYSkills" className="Skills">
        <h1 className="heading_title text-4xl font-bold sm:text-5xl" data-aos="fade-up">
          My Skills
        </h1>
          <p className="title_desc mt-4 " data-aos="fade-up">
            These are the skills that shape your ideas and vision
            <br />
            into reality.
          </p>
          <section
            data-aos="fade-up"
            className="flex items-center justify-center flex-wrap mt-8 gap-y-6 gap-x-4 sm:py-10 2xl:gap-y-10 2xl:gap-x-6"
          >
            {mySkills.map(({ tech_img, name }) => (
              <div key={name} className="w-fit">
                <div className="group w-fit h-40 bg-[#37214d] p-10 px-14 rounded-3xl  hover:bg-[#2A1454] hover:grayscale-0 hover:border hover: border-[#8750f7] transition-colors duration-[.6s]">
                  <img
                    src={tech_img}
                    className=" w-[4rem] object-cover transition-all duration-[0.5s] grayscale-[1] group-hover:scale-[1.1] group-hover:grayscale-[0]"
                    alt=""
                  />
                </div>
                <p className="name text-[#8e27e5] text-[1.1rem] mt-[0.9rem] font-sans">
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
