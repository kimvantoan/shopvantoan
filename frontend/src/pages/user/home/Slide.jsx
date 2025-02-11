import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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
    const [api, setApi] = useState();
    const intervalRef = useRef();
  
    useEffect(() => {
      if (!api) {
        return;
      }
  
      const startAutoplay = () => {
        intervalRef.current = window.setInterval(() => {
          api.scrollNext();
        }, 5000); 
      };
  
      const stopAutoplay = () => {
        if (intervalRef.current) {
          window.clearInterval(intervalRef.current);
        }
      };
  
      startAutoplay();
  
      const element = api.element;
      if (element) {
        element.addEventListener("mouseenter", stopAutoplay);
        element.addEventListener("mouseleave", startAutoplay);
      }
  
      return () => {
        stopAutoplay();
        if (element) {
          element.removeEventListener("mouseenter", stopAutoplay);
          element.removeEventListener("mouseleave", startAutoplay);
        }
      };
    }, [api]);
  
    return (
      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem key={slide.id}>
                <Card className="border-none">
                  <CardContent className="relative p-0 aspect-[2/1]">
                    <img
                      src={slide.image}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg">
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
  )
}

export default Slide