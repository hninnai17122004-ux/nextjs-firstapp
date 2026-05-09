'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Page = () => {
  return (
    <div className="min-h-screen bg-[#181818] flex flex-col items-center pt-20 px-0">
      
      <div className="w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          
          
          className="w-full rounded-4xl h-[450px] md:h-[600px] lg:h-[80vh] object-container"
        >
          <SwiperSlide>
            <img 
              src="https://wallpaperbat.com/img/80136101-up-cartoon-wallpaper-27-image.jpg" 
              alt="Slide 1"
              className="w-full h-full object-cover object-center" 
            />
          </SwiperSlide>

          <SwiperSlide>
            <img 
              src="https://wallpapercave.com/wp/wp4757526.jpg" 
              alt="Slide 2"
              className="w-full h-full object-cover object-center"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img 
              src="https://wallpapercave.com/wp/wp4757526.jpg" 
              alt="Slide 2"
              className="w-full h-full object-cover object-center"
            />
          </SwiperSlide>
        </Swiper>
       
      </div>
    </div>
  );
};

export default Page;