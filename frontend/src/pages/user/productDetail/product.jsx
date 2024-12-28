import formatPrice from "@/utils/FormatPrice";
import React from "react";
import { CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { CiHeart } from "react-icons/ci";
import a from "../../../assets/a.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Share from "./Share";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import CartSheet from "@/components/CartSheet";
const product = () => {
  const color = ["red", "green", "blue", "yellow", "black", "white"];
  const size = ["S", "M", "L", "XL", "XXL"];
  return (
    <div className="flex items-start gap-32 mt-16">
      <Carousel className="bg-gray-100 rounded-lg w-1/2">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="h-[574px]">
                <img
                  src={a}
                  alt={`Slide ${index + 1}`}
                  className="h-full mx-auto object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="flex flex-col gap-8">
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
        <div className="flex items-center gap-2 bg-gray-100 p-2 w-fit rounded-3xl text-gray-600">
          <FaStar />
          <p>4.2 -</p>
          <p>54 Đánh giá</p>
        </div>
        <div>
          <span className="font-semibold text-xl">{formatPrice(30000)}</span>{" "}
          <s className="text-gray-500">{formatPrice(40000)}</s>
        </div>
        <div className="">
          <h3 className="font-medium text-gray-600 mb-2">Màu sắc</h3>
          <ToggleGroup variant="outline" type="single">
            {color.map((color) => (
              <ToggleGroupItem
                value={color}
                className="data-[state=on]:bg-gray-200"
                key={color}
                aria-label="Toggle color"
              >
                {color}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-gray-600 mb-2">Kích cỡ</h3>
          <ToggleGroup
            variant="outline"
            type="single"
            className="justify-start"
          >
            {size.map((size) => (
              <ToggleGroupItem
                value={size}
                className="data-[state=on]:bg-gray-200"
                key={size}
                aria-label="Toggle size"
              >
                {size}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <div className="">
          <h3 className="font-medium text-gray-600 mb-2">Số lượng</h3>

          <div className="border-2 rounded-sm w-fit">
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
          <Button className="w-full">
            <Sheet>
              <SheetTrigger>Thêm vào giỏ hàng</SheetTrigger>
              <CartSheet/>
            </Sheet>
          </Button>
          <Button variant="outline">
            <CiHeart />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default product;
