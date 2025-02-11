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
  
  export function CategoryCarousel() {
    const {getCategories, categories} = useCategoryStore();
    useEffect(() => {
      getCategories();
    },[])
    const navigate = useNavigate();
    return (
      <div  className="w-full max-w-6xl mt-10 mx-auto px-4">
        <h2 className="text-3xl text-center font-semibold mb-6">Danh mục sản phẩm</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {categories.map((category) => (
              <CarouselItem onClick={() => navigate(`/shop?category=${category._id}`)}  key={category.id} className="md:basis-1/3 lg:basis-1/4">
                <Card className="border-none">
                  <CardContent className="p-0">
                    <div className="relative group cursor-pointer">
                      <img
                        src={category.image.url}
                        alt={category.name}
                        className="w-full aspect-[4/5] object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors rounded-lg flex items-center justify-center">
                        <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-6" />
          <CarouselNext className="-right-4 md:-right-6" />
        </Carousel>
      </div>
    );
  }