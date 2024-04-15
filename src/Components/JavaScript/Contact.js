import React, { useRef, useState } from "react";
import { myContact } from "./CustomApi";
import { Element } from "react-scroll";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [message, setmessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ih4fg1a", "template_9ov7kld", form.current, {
        publicKey: "yyT2QZQsWom98Vb38",
      })
      .then(
        () => {
          setmessage("Message sent successfully!");
          toast.success("Message sent successfully!");
        },
        (error) => {
          setmessage("Message failed! Please try again.");
          toast.error("Message failed! Please try again.");
        }
      );
  };

  return (
    <>
      <Element name="Contact" className="Contact">
      <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastStyle={{
                  background:
                    "linear-gradient(45deg, rgb(26 17 46 / 96%), rgb(111 50 157))",
                  color: "#ffffff",
                  borderRadius: "8px",
                }}
              />{" "}
        <div className="contact_me flex items-center justify-center gap-20 pb-[10rem]">
          <div
            className="contact_form bg-[#140C1C] w-fit p-[2rem] rounded-[1rem]"
            data-aos="fade-left"
          >
            <h1 className="heading_title">Let’s work together!</h1>
            <p className="title_desc text-[1.1rem] font-[sans-serif]">
              I design and code beautifully simple things and i love <br /> what
              i do. Just simple like that!
            </p>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-[1rem] w-fit mt-[1rem] gap-x-10"
            >
              <div className="input_flex">
                <input
                  type="text"
                  placeholder="First name"
                  className="input_field"
                  onChange={(e) => e.target.value}
                  name="first_name"
                  required
                  id="input"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input_field"
                  name="last_name"
                  onChange={(e) => e.target.value}
                  required
                  id="input"
                />
              </div>
              <div className="input_flex">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input_field"
                  onChange={(e) => e.target.value}
                  name="email"
                  required
                  id="input"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input_field"
                  name="number"
                  id="input"
                />
              </div>
              <select
                required
                name="service"
                id="service"
                className="input_field text-[1.1rem] font-sans-serif]"
              >
                <option value="career" className="option">
                  Choose Services
                </option>
                <option value="Need Frontend Developer" className="option">
                  Need Frontend Developer
                </option>
                <option value="Need JavaScript Developer" className="option">
                  Need JavaScript Developer
                </option>
                <option value="Need ReactJS Developer" className="option">
                  Need ReactJS Developer
                </option>
                <option value="Other" className="option">
                  Other
                </option>
              </select>
              <textarea
                required
                cols="8"
                rows="6"
                placeholder="Message"
                className="input_field"
                onChange={(e) => e.target.value}
                name="message"
                id="input"
              ></textarea>
              <button className="btn w-fit font-[sans-serif] py-4 px-6 rounded-[50px] font-[600]">
                Send Message
              </button>
             
            </form>
          </div>
          <div className="my_detail flex flex-col gap-6">
            <div
              data-aos="fade-left"
              className="info flex items-center gap-4 w-[31rem] leading-[1.8rem]"
            >
              <div className="contact_svg w-fit">
                <FaLinkedinIn />
              </div>
              <div className="flex flex-col">
                <span className="font-[sans-serif] capitalize opacity-[0.9] text-[17px]">
                  Linkedin
                </span>
                <a
                  href="https://linkedin.com/in/hassan-javaid159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" transition-all duration-900 hover:text-[#6650F7] text-[1.2rem] font-[sans-serif] font-[600 tracking-[1px]"
                >
                  Visit Linkedin
                </a>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="info flex items-center gap-4 w-[31rem] leading-[1.8rem]"
            >
              <div className="contact_svg w-fit">
                <MdOutlineMailOutline />
              </div>
              <div className="flex flex-col">
                <span className="font-[sans-serif] capitalize opacity-[0.9] text-[17px]">
                  Email
                </span>
                <a
                  href="mailto:hassanjavaid159@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" transition-all duration-900 hover:text-[#6650F7] text-[1.2rem] font-[sans-serif] font-[600 tracking-[1px]"
                >
                  hassanjavaid159@gmail.com
                </a>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="info flex items-center gap-4 w-[31rem] leading-[1.8rem]"
            >
              <div className="contact_svg w-fit">
                <IoLocationOutline />
              </div>
              <div className="flex flex-col">
                <span className="font-[sans-serif] capitalize opacity-[0.9] text-[17px]">
                  Address
                </span>
                <a
                  href="https://maps.app.goo.gl/1NdDC1LH8erQWrdV6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" transition-all duration-900 hover:text-[#6650F7] text-[1.2rem] font-[sans-serif] font-[600 tracking-[1px]"
                >
                  Bismillah Chowk Road, Sector 4 Baldia, Karachi, Sindh.
                </a>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Contact;
