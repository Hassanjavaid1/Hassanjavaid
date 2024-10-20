import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { projects } from "./CustomApi";
import { Element } from "react-scroll";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Mywork() {
  const [filterProject, setfilterProject] = useState(projects);
  const [reactProject,setReactProject] = useState([])
  const [JSProject,setJSProject] = useState([])
  useEffect(()=>{
   setReactProject(filterProject.filter(a=>a.tech=='ReactJS'))
   setJSProject(filterProject.filter(a=>a.tech=='JavaScript'))
  },[filterProject])
  return (
    <>
      <Element name="Mywork" className="Works">
        <Tabs>
          <section className="works text-center pt-[8rem] pb-[6rem]">
            <h1 className="heading_title">My Recent Works</h1>
            <p className="title_desc">
              I put your ideas and thus your wishes in the form of a unique web
              project that <br /> inspires you and your customers.
            </p>
            <TabList className="filter_buttons flex items-center justify-center gap-[0.5rem] bg-[#050709] m-auto rounded-[50px] mt-[3rem]">
              
                <Tab className="filter_btn">All</Tab>
              
                <Tab className="filter_btn">JavaScript</Tab>
              
                <Tab className="filter_btn">ReactJS</Tab>
            </TabList>
            <TabPanel className="mywork_shadow grid grid-cols-[repeat(2,0fr)] justify-center mt-[4rem] gap-[3rem]">
                {filterProject.map(({ pro_title, pro_img, about, demo }) => (
                  <div
                    key={pro_title}
                    className="mywork_parent project_demo flex items-center flex-col"
                  >
                    <img
                      src={pro_img}
                      className="img_demo max-w-[32rem] h-[32rem] object-cover p-[2rem] pb-[0rem] rounded-[15px] bg-[#140C1C]"
                    />
                    <a
                      href={demo}
                      className=" h-[0]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="demo_box flex items-center relative bottom-[9rem] gap-[3rem] p-[1rem] text-left rounded-[10px] w-[30rem] bg-gradient-to-br from-purple-600 to-[#320d4e] text-left">
                        <div className="h-[6rem] demo_container">
                          <button className="pro_title text-[1.9rem] font-[sans-serif] font-bold w-[23rem] text-ellipsis overflow-hidden whitespace-nowrap text-left">
                            {pro_title}
                          </button>
                          <p className="project_desc font-[sans-serif] opacity-[0.9] w-[23rem]">
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
            </TabPanel>
            <TabPanel className="mywork_shadow grid grid-cols-[repeat(2,0fr)] justify-center mt-[0rem] gap-[3rem]">
                { JSProject.map(({ pro_title, pro_img, about, demo,tech })=>(
                  <div
                    key={tech}
                    className="mywork_parent project_demo flex items-center flex-col"
                  >
                    <img
                      src={pro_img}
                      className="img_demo max-w-[32rem] h-[32rem] object-cover p-[2rem] pb-[0rem] rounded-[15px] bg-[#140C1C]"
                    />
                    <a
                      href={demo}
                      className=" h-[0]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="demo_box flex items-center relative bottom-[9rem] gap-[3rem] p-[1rem] text-left rounded-[10px] w-[30rem] bg-gradient-to-br from-purple-600 to-[#320d4e] text-left">
                        <div className="h-[6rem] demo_container">
                          <button className="pro_title text-[1.9rem] font-[sans-serif] font-bold w-[23rem] text-ellipsis overflow-hidden whitespace-nowrap text-left">
                            {pro_title}
                          </button>
                          <p className="project_desc font-[sans-serif] opacity-[0.9] w-[23rem]">
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
            </TabPanel>
            <TabPanel className="mywork_shadow grid grid-cols-[repeat(2,0fr)] justify-center mt-[0rem] gap-[3rem]">
                { reactProject.map(({ pro_title, pro_img, about, demo })=>(
                  <div
                    key={pro_img} alt=""
                    className="mywork_parent project_demo flex items-center flex-col"
                  >
                    <img
                      src={pro_img}  alt=""
                      className="img_demo max-w-[32rem] h-[32rem] object-cover p-[2rem] pb-[0rem] rounded-[15px] bg-[#140C1C]"
                    />
                    <a
                      href={demo} alt=""
                      className=" h-[0]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="demo_box flex items-center relative bottom-[9rem] gap-[3rem] p-[1rem] text-left rounded-[10px] w-[30rem] bg-gradient-to-br from-purple-600 to-[#320d4e] text-left">
                        <div className="h-[6rem] demo_container">
                          <button className="pro_title text-[1.9rem] font-[sans-serif] font-bold w-[23rem] text-ellipsis overflow-hidden whitespace-nowrap text-left">
                            {pro_title}
                          </button>
                          <p className="project_desc font-[sans-serif] opacity-[0.9] w-[23rem]">
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
            </TabPanel>

         
          </section>
        </Tabs>
      </Element>
    </>
  );
}

export default Mywork;
