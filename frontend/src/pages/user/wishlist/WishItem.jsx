import React from "react";
import hero from "@/assets/hero.png";
import formatPrice from "@/utils/FormatPrice";
import { Button } from "@/components/ui/button";

const WishItem = () => {
  return (
    <div className="grid grid-cols-6 items-center">
      <div className="size-20 bg-gray-100 rounded-lg overflow-hidden">
        <img src={hero} className="overflow-cover" alt="" />
      </div>
      <div className="col-span-2 space-y-3">
        <p className="font-semibold">Raw Black T-Shirt</p>
        <p className="text-gray-500 text-sm">Brand</p>
      </div>
      <p className="place-self-center">{formatPrice(30000)}</p>
      <Button variant="outline">Chi tiết</Button>
      <Button variant="link" className="text-red-500">
        Xóa
      </Button>
    </div>
  );
};

export default WishItem;
