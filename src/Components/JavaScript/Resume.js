import React from 'react'
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa6";
import { resumeExperience,Education} from './CustomApi';
import {Element} from 'react-scroll'

function Resume() {
  return (
    <>
      <Element name='Resume' className='Resume'>
      <div className='resume_content flex justify-center gap-[9rem] pt-[10rem] pb-[6rem]'>
    <section className='firstSection'>
      <h1 data-aso="fade-up" className="heading_title flex items-center gap-[0.2rem]"><AiOutlineSafetyCertificate className='text-[#8127CF]'/>My Experience</h1>
      {resumeExperience.map(({workYear,role,location})=>(
      <div className=' mt-7' key={workYear} data-aos="fade-left">
      <div className='resume_hover flex flex-col leading-[1.6] bg-[#0f0518] w-[25rem] p-[1.3rem] rounded-[17px] transition-all duration-[3s] '>
        <h4 className="exp_date text-[#8127cf] text-[1.4rem] font-bold font-[sans-serif] capitalize">{workYear}</h4>
        <h3 className='exp_position uppercase text-[1.5rem] font-bold font-[sans-serif]'>{role}</h3>
        <h5 className="exp_location font-[sans-serif] opacity-[0.8]">{location}</h5>
      </div>
      </div>
       ))}
    </section>
    <section className='secondSection'>
      <h1 data-aso="fade-up" className="heading_title flex items-center gap-[0.2rem]"><FaGraduationCap className='text-[#8127CF]'/>My Education</h1>
      {Education.map(({eduYear,degree,location})=>(

     
      <div className=' mt-7' key={degree} data-aos="fade-right">
      <div className='resume_hover flex flex-col leading-[1.6] bg-[#0f0518] w-[25rem] p-[1.3rem] rounded-[17px]'>
        <h4 className="exp_date text-[#8127cf] text-[1.4rem] font-bold font-[sans-serif] capitalize">{eduYear}</h4>
        <h3 className='exp_position overflow-hidden whitespace-nowrap uppercase text-[1.5rem] font-bold font-[sans-serif] whitespace-nowrap text-ellipsis overflow-hidden'>{degree}</h3>
        <h5 className="exp_location font-[sans-serif] opacity-[0.8]">{location}</h5>
      </div>
      </div>
       ))}
    </section>
      </div>
      </Element>

    </>
  )
}

export default Resume
