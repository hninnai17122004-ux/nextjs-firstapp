'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const Page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#181818] p-4">
            <div className="w-full max-w-md">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    className="w-full h-[350px] md:h-[700px] rounded-2xl overflow-hidden shadow-2xl"
                >
                    <SwiperSlide>
                        <img
                            src="https://tse4.mm.bing.net/th/id/OIP.vVHHr5bcUHWoICjuYOrFCwHaLv?rs=1&pid=ImgDetMain&o=7&rm=3"
                            className="w-full h-full object-cover"
                            alt="Slide 1"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            src="https://tse2.mm.bing.net/th/id/OIP.ZkkNmttEDPoEWAQ8mes4zAHaNK?rs=1&pid=ImgDetMain&o=7&rm=3"
                            className="w-full h-full object-cover"
                            alt="Slide 2"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            src="https://tse4.mm.bing.net/th/id/OIP.-c1O_MEeWduxSnlv1242WwHaK9?rs=1&pid=ImgDetMain&o=7&rm=3"
                            className="w-full h-full object-cover"
                            alt="Slide 3"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Page