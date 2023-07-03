import React from 'react'
import testmonials from '../utils/testmonials'
import Testimonials from './Testimonials'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Keyboard } from "swiper";
const TestimonialComp = () => {

  return (
    <div className='bg-gradient-to-r from-[#DCD6F7] via-[#BBE1FA]  to-[#BBDED6]'>
      <h1 className="flex  justify-center items-center text-center font-bold mb-4">
        <span className="text-6xl border-b-4 border-black w-fit border-double">
          Testimonials
        </span>
      </h1>
      <div>
        <Swiper
          keyboard={{
            enabled: true,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,

          }}
          modules={[EffectCoverflow,Keyboard]}
          className="mySwiper"
        >

          {
            testmonials.map((testmonial) =>
              <SwiperSlide>
                <Testimonials name={testmonial.name} reviews={testmonial.reviews} key={testmonial.id} />
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>

    </div>
  )
}

export default TestimonialComp
