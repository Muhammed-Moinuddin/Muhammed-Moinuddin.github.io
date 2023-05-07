import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';


export default function Slider() {

  return (
    
    <div className="container">
      <div className="title">
        <h2>Certifications I Got</h2>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <Image src={'/smit-certificate.jpg'} alt="slide_image" className='single_image' fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={'/js-algorithm-data-structure.jpg'} alt="slide_image" className='single_image' fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={'/piaic-certificate.jpg'} alt="slide_image" className='single_image' fill />
        </SwiperSlide>
        <SwiperSlide>
            <Image src={'/digiskills-wordpress.jpg'} alt="slide_image" className='single_image' fill />
        </SwiperSlide>
        <SwiperSlide>
         <Image src={'/digiskills-freelancing.jpg'} alt="slide_image" className='single_image' fill />
        </SwiperSlide>
        <SwiperSlide>
            <Image src={'/responsive-web-design.jpg'} alt="slide_image" className='single_image' fill />
        </SwiperSlide>

        <div className="slider-controller">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}
