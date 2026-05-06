'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Page = () => {
    return (
         <div className="min-h-screen flex items-center justify-center bg-[#181818] p-4">
            <div className="w-full md:wd-600px">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    className="w-full h-[500px] md:h-[700px] rounded-2xl overflow-hidden shadow-2xl md:mt-30 md:mb-30 "
                >
                    <SwiperSlide>
                        <img
                             src="https://wallpaperbat.com/img/80136101-up-cartoon-wallpaper-27-image.jpg"
                            className="w-full rounded-lg object-cover"
                            alt="Slide 1"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                             src="https://wallpapercave.com/wp/wp4757526.jpg"
                            className="w-full rounnded-lg object-cover"
                            alt="Slide 2"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            src="https://screenradar.com/wp-content/uploads/2023/11/garfield.jpg"
                            className="w-full rounnded-lg object-contain "
                            alt="Slide 2"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
       
      
    )
}

export default Page
