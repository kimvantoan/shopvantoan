import React from "react";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import hero from "@/assets/hero.png";
import formatPrice from "@/utils/FormatPrice";
import { Button } from "./ui/button";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
const CartSheet = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Giỏ hàng</SheetTitle>
          <div className="grid grid-cols-4 gap-5 py-5 border-b-2">
            <div className="size-20 bg-gray-100 rounded-lg overflow-hidden relative">
              <img src={hero} alt="" className="h-full mx-auto object-cover" />
              <IoClose className="absolute top-0 size-6 right-0 cursor-pointer bg-gray-200" />
            </div>
            <div className="col-span-3 ">
              <div className="grid grid-cols-5 justify-between gap-4 text-sm mb-2">
                <p className="font-medium col-span-3 break-words">Raw Black T-Shirt  </p>
                <p className="text-gray-600">xanh</p>
                <p className="text-gray-600">XL</p>
              </div>
              <div className="flex items-center gap-4">
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
                <p className="font-medium text-lg">{formatPrice(30000)}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p>Tổng tiền:</p>
              <p>{formatPrice(30000)}</p>
            </div>
            <Button className="w-full">Giỏ hàng</Button>
            <Link to="/checkout" className="mx-auto underline" >Thanh toán</Link>
          </div>
      </SheetHeader>
    </SheetContent>
  );
};

export default CartSheet;
