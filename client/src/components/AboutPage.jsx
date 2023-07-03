import React from 'react'

import aboutImg from "../assets/AboutUs/img.jpg";
import AboutGallery from './AboutGallery';

const AboutPage = ({data:{description}})  => {
  return (
    <div className='bg-gradient-to-r from-[#DCD6F7] via-[#BBE1FA]  to-[#BBDED6]'>
    
      <div
      className="mx-auto  p-8 "
      id="about"
    >
      <h1 className="flex justify-center items-center  text-gray-900 font-bold mb-[2.25rem] text-5xl font-serif ">
        <span className="border-b-4 mt-2 border-black border-double">
          About Us
        </span>
      </h1>
      <div className="md:grid md:grid-cols-2 md:mb-4 items-center justify-between space-x-9 flex flex-col  my-3">
        <img
          className="flex rounded-lg shadow-lg shadow-gray-600"
          src={aboutImg}
          alt="SUKHAM"
        />
        <div className="mt-2">
          <h2 className=" text-2xl text-gray-900 font-bold mb-5 ">
            We are{" "}
            <span className="text-gold text-6xl border-b-4 border-black w-fit border-double ">
              SUKHAM
            </span>
          </h2>
          <p className="text-gray-900 text-lg font-paraFont leading-9">
           {description}
          </p>
         

          
        </div>
      </div>
    </div>
    <AboutGallery/>
      
      <div className="mx-auto   p-8 " id="about">
      <h1 className="flex justify-center items-center  text-gray-900 font-bold mb-5 text-5xl font-serif"><span className='border-b-4 mt-2 border-black border-double'>Where are we</span></h1>
      <div className="flex justify-center items-center w-full m-8 p-2 bg-gray-400 bg-opacity-10 shadow-md shadow-gray-500 ml-1 rounded-lg ">
      <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7341.141332915838!2d76.86034987329806!3d23.07619663378666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1683455187108!5m2!1sen!2sin"
           
            height="450"
            style={{ width: '100%' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
         
        </div>
      
      </div>
    </div>
    
  )
}

export default AboutPage
