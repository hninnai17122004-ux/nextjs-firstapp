'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';

const Page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#181818] p-4">
            <div className="w-full object-cover">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    className="w-full h-[500px] md:h-[700px] rounded-2xl overflow-hidden shadow-2xl"
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
                            src="https://th.bing.com/th/id/OIP.XsZ-Xx4ssHieOieIhYG2ywHaEo?w=293&h=183&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
                            className="w-full rounded-lg object-cover"
                            alt="Slide 2"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            src="https://screenradar.com/wp-content/uploads/2023/11/garfield.jpg"
                            className="w-full rounded-lg object-contain"
                            alt="Slide 2"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Page