'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// CSS file တွေကတော့ Swiper အလုပ်လုပ်ဖို့ လိုကိုလိုပါတယ် (ဒါတွေက library ရဲ့ base တွေပါ)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Page = () => {
  return (
    <div className="min-h-screen bg-[#181818] flex flex-col items-center pt-20 px-0">
    
        
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        
          className="w-full h-[450px] md:h-[600px] lg:h-[80vh]"
        >
          <SwiperSlide>
            <img 
              src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2025/03/princess-mononoke.jpg" 
              className="w-full h-full object-cover object-center" 
              alt="Slide 1"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img 
              src="https://wallpapercave.com/wp/wp4757526.jpg" 
              className="w-full h-full object-cover object-center"
              alt="Slide 2"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img 
              src="https://4kwallpapers.com/images/wallpapers/snow-white-and-the-2560x1440-21917.png" 
              className="w-full h-full object-cover object-center"
              alt="Slide 3"
            />
          </SwiperSlide>
        </Swiper>

      </div>
    
  );
};

export default Page;