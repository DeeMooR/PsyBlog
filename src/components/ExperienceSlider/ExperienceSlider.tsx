import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, A11y } from 'swiper/modules';
import { certificates } from 'src/config';

import './ExperienceSlider.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const ExperienceSlider = () => {
  return (
    <Swiper
      speed={800}
      slidesPerView={1}
      spaceBetween={50}
      loop={true}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Autoplay, Navigation, Pagination, A11y]}
      className='mySwiper'
    >
      {certificates.map(value => (
        <SwiperSlide key={value}>
          <div className="customSlide">
            <div className="content">
              <img src={value} alt={value} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

