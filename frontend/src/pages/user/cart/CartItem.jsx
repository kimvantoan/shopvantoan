import { Button } from "@/components/ui/button";
import formatPrice from "@/utils/FormatPrice";
import React from "react";
import hero from "@/assets/hero.png";
import { FaRegTrashCan } from "react-icons/fa6";
const CartItem = () => {
  return (
    <div className="grid grid-cols-8 items-center">
      <div className="size-20 bg-gray-100 rounded-lg overflow-hidden">
        <img src={hero} className="overflow-cover" alt="" />
      </div>
      <div className="col-span-3">
        <p className="font-bold">Raw Black T-Shirt</p>
        <p>Color: Black</p>
        <p>Size: XL</p>
      </div>
      <p className="place-self-center">{formatPrice(30000)}</p>
      <div className="border flex items-center gap-2 rounded-xl border-black overflow-hidden w-fit col-span-2 place-self-center">
        <Button variant="ghost" className="text-xl">
          -
        </Button>
        <p style={{ userSelect: "none" }} className="text-lg">
          1
        </p>
        <Button variant="ghost" className="text-xl">
          +
        </Button>
      </div>
      <Button className="w-fit place-self-center" variant="ghost">
        <FaRegTrashCan className="text-red-500 cursor-pointer" />
      </Button>
    </div>
  );
};

export default CartItem;
