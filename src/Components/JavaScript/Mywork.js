import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { projects } from "./CustomApi";
import { Element } from "react-scroll";

function Mywork() {
  const [filterProject, setfilterProject] = useState(projects);
  return (
    <>
      <Element name="Portfolio" className="Works container_width">
        <section className="works text-center paddingTB relative">
          <h1 className="heading_title" data-aos="fade-up">
            My Recent Works
          </h1>
          <p className="title_desc" data-aos="fade-up">
            I put your ideas and your vision into a unique web project that{" "}
            <br /> inspires you and your customers.
          </p>

          <div className="mywork_shadow"></div>
          <div className="grid grid-cols-2 justify-center mt-[4rem] gap-[2rem]">
            {filterProject.map(({ pro_title, pro_img, about, demo }) => (
              <div
                key={pro_title}
                className="mywork_parent project_demo flex items-center flex-col"
              >
                <img
                  src={pro_img}
                  className="img_demo w-[100%] h-[100%] object-cover p-[2.3rem] pb-[0rem] rounded-[15px] bg-[#140C1C]"
                />
                <a
                  href={demo}
                  className=" h-[0] w-[100%]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="demo_box flex items-center w-[94%] m-auto relative bottom-[9rem] gap-[3rem] p-[1rem] text-left rounded-[10px] w-[30rem] bg-gradient-to-br from-purple-600 to-[#320d4e] text-left">
                    <div className="demo_container">
                      <button className="pro_title text-[1.9rem] font-[sans-serif] font-bold text-ellipsis overflow-hidden whitespace-nowrap text-left">
                        {pro_title}
                      </button>
                      <p className="project_desc font-[sans-serif] opacity-[0.9]">
                        {about}
                      </p>
                    </div>
                    <div>
                      <FaArrowRightLong className="mywork_child text-[1.8rem]" />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
      </Element>
    </>
  );
}

export default Mywork;
