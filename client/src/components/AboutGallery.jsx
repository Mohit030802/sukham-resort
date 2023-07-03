import React from 'react'
import about1 from '../assets/AboutGallery/about1.webp'
import about2 from '../assets/AboutGallery/about2.webp'
import about3 from '../assets/AboutGallery/about3.webp'
import about7 from '../assets/AboutGallery/about7.webp'
import about5 from '../assets/AboutGallery/about5.webp'
import about6 from '../assets/AboutGallery/about6.webp'

const AboutGallery = () => {
    return (
        <div>
            <div className='flex justify-center items-center text-center'>
                <h1 className='text-5xl font-bold font-serif'><span className='border-b-4 mt-2 border-black border-double'>Gallery</span></h1>
            </div>

            <div class="container mx-auto px-5 -mt-2 lg:px-32 lg:pt-24">
                <div class="-m-1 flex flex-wrap md:-m-2 center">
                    <div class="flex w-1/2 flex-wrap">
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src={about1} />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src={about7} />
                        </div>
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src={about5} />
                        </div>
                    </div>
                    <div class="flex w-1/2 flex-wrap">
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src={about6} />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src={about2} />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src={about3} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutGallery
