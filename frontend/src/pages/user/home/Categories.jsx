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
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
export function CategoryCarousel() {
  const { getCategories, categories } = useCategoryStore();
  useEffect(() => {
    getCategories();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold">Danh mục</h2>
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
          <SwiperSlide
            onClick={() => navigate(`/shop?category=${category._id}`)}
            key={category.id}
            className="md:basis-1/3 lg:basis-1/4"
          >
            <div className="relative group overflow-hidden rounded-lg">
              <div className="relative h-60 w-full">
                <img
                  src={category.image.url || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold text-white">
                  {category.name}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
