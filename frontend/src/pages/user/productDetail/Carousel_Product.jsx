import formatPrice from "@/utils/FormatPrice";
import React from "react";
import { CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import {
  Carousel,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  SliderMainItem,
  CarouselThumbsContainer,
  SliderThumbItem,
} from "@/components/ui/embla-carousel";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Share from "./Share";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import CartSheet from "@/components/CartSheet";

const Carousel_Product = () => {
  const color = ["red", "green", "blue", "yellow", "black", "white"];
  const size = ["S", "M", "L", "XL", "XXL"];
  return (
    <div className="flex items-start gap-32 mt-16">
      <Carousel>
        <CarouselNext className="top-1/3 -translate-y-1/3" />
        <CarouselPrevious className="top-1/3 -translate-y-1/3" />
        <CarouselMainContainer className="h-60">
          {Array.from({ length: 5 }).map((_, index) => (
            <SliderMainItem key={index} className="bg-transparent">
              <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
                Slide {index + 1}
              </div>
            </SliderMainItem>
          ))}
        </CarouselMainContainer>
        <CarouselThumbsContainer>
          {Array.from({ length: 5 }).map((_, index) => (
            <SliderThumbItem
              key={index}
              index={index}
              className="bg-transparent"
            >
              <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
                Slide {index + 1}
              </div>{" "}
            </SliderThumbItem>
          ))}
        </CarouselThumbsContainer>
      </Carousel>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Raw Black T-Shirt Lineup</h2>
          <i className="p-2 cursor-pointer bg-gray-100 rounded-full">
            <Dialog>
              <DialogTrigger asChild>
                <CiShare2 size={20} />
              </DialogTrigger>
              <Share />
            </Dialog>
          </i>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaStar className="text-yellow-500" />
          <p>4.2 -</p>
          <p>54 Đánh giá</p>
        </div>
        <div>
          <span className="font-semibold text-xl">{formatPrice(30000)}</span>{" "}
          <s className="text-gray-500">{formatPrice(40000)}</s>
        </div>
        <div className="">
          <h3 className="font-bold mb-2">Màu sắc</h3>
          <ToggleGroup variant="outline" type="single">
            {color.map((color) => (
              <ToggleGroupItem
                value={color}
                key={color}
                aria-label="Toggle color"
              >
                {color}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold mb-2">Kích cỡ</h3>
          <ToggleGroup
            variant="outline"
            type="single"
            className="justify-start"
          >
            {size.map((size) => (
              <ToggleGroupItem value={size} key={size} aria-label="Toggle size">
                {size}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <div className="">
          <h3 className="font-bold mb-2">Số lượng</h3>

          <div className="border border-black rounded-sm w-fit">
            <Button variant="ghost" className="text-xl">
              -
            </Button>
            <Button variant="ghost" className="text-lg">
              1
            </Button>
            <Button variant="ghost" className="text-xl">
              +
            </Button>
          </div>
        </div>
        <div className="flex gap-3">
          <Sheet>
            <SheetTrigger>
              <Button>Thêm vào giỏ hàng</Button>
            </SheetTrigger>
            <CartSheet />
          </Sheet>
          <Button variant="outline" className="border-black">
            <FaRegHeart />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Carousel_Product;
