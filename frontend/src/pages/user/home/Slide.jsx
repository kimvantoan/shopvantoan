import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination,Autoplay } from 'swiper/modules';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1200&h=600",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1200&h=600",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200&h=600",
  },
];
const Slide = () => {
    return (
      <>
      <Swiper
         spaceBetween={30}
         centeredSlides={true}
         autoplay={{
           delay: 3000,
           disableOnInteraction: false,
         }}
         pagination={{
           clickable: true,
         }}
         navigation={true}
         modules={[Autoplay, Pagination, Navigation]}
         className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide  key={slide.id}>
            <img className= 'w-full h-[500px]' src={slide.image} alt="" />
          </SwiperSlide>
        ))}
        
      </Swiper>
    </>
  )
}

export default Slide