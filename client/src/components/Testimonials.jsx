import React from "react";
import profilePic from "../assets/hotelroom.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper";

const Testimonials = ({ name, reviews,id }) => {
  return (
    <>
      <div className="max-w-full h-full  p-12 bg-gradient-to-r from-[#DCD6F7] via-[#BBE1FA]  to-[#BBDED6]">
       
      
          <div className="flex justify-center items-center max-w-full mt-4 p-4">
    
              <div className="flex justify-center items-start mt-4">
                <div className="flex w-[50%] justify-center items-center m-2 p-2  mt-4 ">
                  <div className="flex flex-col bg-white border-2 rounded-md text-center p-2 justify-center items-center ">
                    <img
                      className="w-40 h-36 rounded-full"
                      src={profilePic}
                      alt=""
                    />
                    <p className="mt-4 text-center font-paraFont text-gray-500">
                     
                      {reviews}
                    </p>
                    <span className="font-bold text-2xl mt-2">{name}</span>
                  </div>
                </div>
              </div>
           
            
          </div>
       
      </div>
    </>
  );
};

export default Testimonials;
