import formatPrice from "@/utils/FormatPrice";
import React, { useEffect, useState } from "react";
import { CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaRegHeart } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Carousel,
  CarouselMainContainer,
  SliderMainItem,
  CarouselThumbsContainer,
  SliderThumbItem,
} from "@/components/ui/embla-carousel";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Share from "./Share";
import { useProductStore } from "@/stores/productStore";
import { useCartStore } from "@/stores/cartStore";
import { percentDis } from "@/utils/Percentdis";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";
import { useAuthStore } from "@/stores/authStore";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Carousel_Product = () => {
  const { product } = useProductStore();
  const { id } = useParams();
  const [data, setdata] = useState({
    productId: id,
    color: "",
    quantity: 1,
    size: "",
  });
  const { user } = useAuthStore();

  const addToCartHandler = async (e) => {
    e.preventDefault();
    if (!user) {
      toast("Vui lòng đăng nhập để mua hàng");
    } else {
      await addToCart(data);
      toast.success("Đã thêm sản phẩm vào giỏ hàng");
    }
  };
  const { addToCart, loading } = useCartStore();
  return (
    <div
      className="flex items-start gap-32 mt-10"
      style={{ userSelect: "none" }}
    >
      <Carousel orientation="vertical" className="flex items-center gap-2">
        <CarouselThumbsContainer className="h-[300px] basis-1/5 ">
          {product?.images.map((image, index) => (
            <SliderThumbItem
              key={index}
              index={index}
              className="bg-transparent"
            >
              <span className="border  bg-gray-100 border-muted flex items-center justify-center h-full w-full  cursor-pointer bg-background">
                <img src={image.url} className="object-cover h-full" alt="" />
              </span>
            </SliderThumbItem>
          ))}
        </CarouselThumbsContainer>
        <div className="relative basis-4/5">
          <CarouselMainContainer className="h-[500px]">
            {product?.images.map((image, index) => (
              <SliderMainItem
                key={index}
                className="border bg-gray-100 border-muted flex items-center justify-center h-52"
              >
                <img src={image.url} className="object-cover h-full" alt="" />
              </SliderMainItem>
            ))}
          </CarouselMainContainer>
        </div>
      </Carousel>

      <div className="flex flex-col w-1/2 gap-4">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-3xl ">{product?.name}</h2>
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
        <div className="flex gap-2 items-center border-b pb-3">
          <span className="text-xl text-red-500">
            {formatPrice(product?.price)}
          </span>
          <s className="text-gray-500">{formatPrice(product?.oldPrice)}</s>
          <span className="text-red-500 px-1 border">
            {-percentDis(product?.oldPrice, product?.price)}%
          </span>
        </div>
        <form onSubmit={addToCartHandler} className="flex flex-col gap-3">
          <div>
            <h3 className="font-semibold mb-2">Màu sắc</h3>
            <Select onValueChange={(e) => setdata({ ...data, color: e })}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Chọn màu sắc" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {product?.colors?.map((color) => (
                    <SelectItem value={color} key={color}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold mb-2">Kích thước</h3>
            <Select onValueChange={(e) => setdata({ ...data, size: e })}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Chọn kích thước" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {product?.sizes?.map((size) => (
                    <SelectItem value={size} key={size}>
                      {size}
                    </SelectItem>
                  ))}
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
              onChange={(e) => setdata({ ...data, quantity: e.target.value })}
              className="w-[90px]"
            />
          </div>
          <div className="flex gap-3">
            {loading ? (
              <LoadingButton loading className="w-full"></LoadingButton>
            ) : (
              <Button
                type="submit"
                className="w-full"
                disabled={data.color === "" || data.size === ""}
              >
                Thêm giỏ hàng
                <AiOutlineShoppingCart
                  className="text-white"
                  size={26}
                  cursor={"pointer"}
                />
              </Button>
            )}
          </div>
        </form>
        <Button variant="outline" className="border-black ">
          Thêm sản phẩm yêu thích <FaRegHeart />
        </Button>
      </div>
    </div>
  );
};

export default Carousel_Product;
