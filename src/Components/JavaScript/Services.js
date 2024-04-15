import React, { useEffect, useMemo, useState } from "react";
import { serviceData } from "./CustomApi";
import { Element } from "react-scroll";

function Services() {
  const [myServices, setmyServices] = useState([]);
  useEffect(() => {
    setmyServices(serviceData);
  }, []);
  return (
    <>
      <Element name="Services" className="Services">
        <section className="myservices text-center pt-[4.5rem] pb-[6rem]">
          <div>
            <h1 className="heading_title" data-aos="fade-up">
              My Quality Services
            </h1>
            <p className="title_desc" data-aos="fade-up">
              We put your ideas and thus your wishes in the form of a unique web
              project <br /> that inspires you and you customers.
            </p>
          </div>
          <div className="mt-[2.7rem]">
            {myServices.map(({ sno, title, description, sericon }) => (
              <div
                key={title}
                className="service_box flex items-center justify-center bg-gradient-to-br  gap-[2rem] p-[1rem] max-w-[85%] m-auto border-b border-b-[#6144d56e]"
                data-aos="fade-up"
              >
                <div className="serv_media_box flex items-center justify-center">
                  <div className="flex items-center gap-[0.8rem]">
                <h4 className="sno  text-[#7E4AE7] text-[1.5rem] font-bold font-sans-serif">
                  {sno}
                </h4>
                <h3 className="service_title text-[2rem] text-nowrap font-bold font-sans-serif uppercase lg:overflow-hidden lg:text-ellipsis lg:text-left w-[26rem]">
                  {title}
                </h3>
                </div>
                <p className="media_icon hidden">{sericon}</p>
                </div>

                <div className="serv_media_desc w-[66rem] text-left">
                  <p className="service_desc font-[sans-serif]">
                    {description}
                  </p>

                </div>
                <p className="serv_icon">{sericon}</p>

              </div>
            ))}
          </div>
        </section>
      </Element>
    </>
  );
}

export default Services;
