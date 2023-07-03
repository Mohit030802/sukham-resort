import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination, Navigation } from "swiper";

import { EffectFade, Autoplay, Keyboard } from 'swiper';


import Room1 from '../assets/Slider/Room1.jpeg'
import sullivans from '../assets/Slider/sullivans.jpg'
import terrace from '../assets/Slider/Terrace.jpeg'


// import Img4 from '../assets/SUKHAMRESORT/Way to SUKHAM Resort/Real/WhatsApp Image 2023-04-29 at 13.43.17.jpeg'

const slides = [
    {
        title: "BandiPur Tiger Reserve",
        bg: Room1,
        btn: 'Book Now'
    },
    {
        title: "Mountains and trees",
        bg: sullivans,
        btn: 'Book Now'
    },
    {
        title: "Your Resort for Vacation",
        bg: Room1,
        btn: 'Book Now'
    }
]

const Slider = () => {
    return (
        <Swiper
            grabCursor={true}
            centeredSlides={true}
           
            keyboard={{
                enabled: true,
            }}
            loop={true}
            navigation={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            effect={"fade"}
            modules={[Pagination, Navigation, EffectFade, Autoplay, Keyboard]}
            className="h-[180px] lg:h-[600px] md:h-[400px] "
        >
            {slides.map((slide, index) => {
                const { title, bg} = slide;
                return (
                    <SwiperSlide className='relative h-full item-center font-paraFont' key={index}>
                        <div className=' absolute w-full h-full bg-black/50' >

                        </div>
                        <div >
                            <div className=' uppercase  md:text-xl text-white absolute flex justify-center items-center h-[100px] md:h-[200px] w-screen'>
                                Sukham Resort
                            </div>
                            <div className=' uppercase font-bold text-2xl md:text-7xl text-white absolute flex text-center justify-center items-center h-[200px] md:h-[300px] w-screen'>
                                {title}
                            </div>
                            
                            <div className='w-full h-full flex justify-center'>
                                <img className='object-fill h-full w-full' src={bg} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}

        </Swiper>

    )
}

export default Slider