import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { Card, CardContent } from "@/components/ui/card";
import { useCategoryStore } from "@/stores/categoryStore";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
  export function CategoryCarousel() {
    const {getCategories, categories} = useCategoryStore();
    useEffect(() => {
      getCategories();
    },[])
    const navigate = useNavigate();
    return (
      <div  className="w-full max-w-6xl mt-10 mx-auto px-4">
        <h2 className="text-3xl text-center font-semibold mb-6">Danh mục sản phẩm</h2>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {categories?.map((category) => (
          <SwiperSlide onClick={() => navigate(`/shop?category=${category._id}`)}  key={category.id} className="md:basis-1/3 lg:basis-1/4">
            <Card className="border-none">
              <CardContent className="p-0">
                <div className="relative group cursor-pointer">
                  <img
                    src={category.image.url}
                    alt={category.name}
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))} 
      </Swiper>
      </div>
    );
  }