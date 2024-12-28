import { Button } from "@/components/ui/button";
import formatPrice from "@/utils/FormatPrice";
import React from "react";
import hero from "@/assets/hero.png";
import { IoCloseOutline } from "react-icons/io5";
const CartItem = () => {
  return (
    <div className="grid grid-cols-7 gap-3 items-center">
      <div className="size-20 bg-gray-100 rounded-lg overflow-hidden">
        <img src={hero} className="overflow-cover" alt="" />
      </div>
      <div className="col-span-2">
        <p className="font-semibold">Raw Black T-Shirt</p>
        <p>Color: Black Size: XL</p>
      </div>
      <p className="place-self-center">{formatPrice(30000)}</p>
      <div className="border-2 rounded-sm w-fit col-span-2 place-self-center">
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
      <Button className="w-fit place-self-center" variant="secondary">
        <IoCloseOutline />
      </Button>
    </div>
  );
};

export default CartItem;
