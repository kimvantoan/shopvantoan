import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import formatPrice from "@/utils/FormatPrice";
import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import {
  Carousel,
  CarouselMainContainer,
  SliderMainItem,
  CarouselThumbsContainer,
  SliderThumbItem,
} from "@/components/ui/embla-carousel";
import { Skeleton } from "@/components/ui/skeleton";
const ProductSkeleton = () => {
  return (
    <div
      className="flex items-start gap-32 mt-10"
      style={{ userSelect: "none" }}
    >
      <Carousel orientation="vertical" className="flex items-center gap-2">
        <CarouselThumbsContainer className="h-[300px] basis-1/5 ">
          <SliderThumbItem className="bg-transparent">
            <span className="border  bg-gray-100 border-muted flex items-center justify-center h-full w-full  cursor-pointer bg-background">
              <img className="object-cover h-full" alt="" />
            </span>
          </SliderThumbItem>
        </CarouselThumbsContainer>
        <div className="relative basis-4/5">
          <CarouselMainContainer className="h-[500px]">
            <SliderMainItem className="border bg-gray-100 border-muted flex items-center justify-center h-52">
              <img className="object-cover h-full" alt="" />
            </SliderMainItem>
          </CarouselMainContainer>
        </div>
      </Carousel>

      <div className="flex flex-col w-1/2 gap-4">
        <div className="flex justify-between items-center">
          <Skeleton className="w-full h-8"></Skeleton>
        </div>
        <Skeleton className="w-1/2 h-5"/>
        <Skeleton className="w-1/2 h-5"/>
        <form className="flex flex-col gap-3">
          <div>
            <h3 className="font-semibold mb-2">Màu sắc</h3>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Chọn màu sắc" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem></SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold mb-2">Kích thước</h3>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Chọn kích thước" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem></SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold mb-2">Số lượng</h3>
            <Input
              type="number"
              min={1}
              defaultValue={1}
              className="w-[90px]"
            />
          </div>
          <div className="flex gap-3">
            <Button className="w-full">Thêm giỏ hàng</Button>

            <Button variant="outline" className="border-black">
              <FaRegHeart />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductSkeleton;
