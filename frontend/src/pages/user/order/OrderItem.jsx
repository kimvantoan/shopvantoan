import React from "react";
import hero from "@/assets/hero.png";
import formatPrice from "@/utils/FormatPrice";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const OrderItem = () => {
  return (
    <div className="grid grid-cols-6 items-center">
      <div className="size-20 bg-gray-100 rounded-lg overflow-hidden">
        <img src={hero} className="overflow-cover" alt="" />
      </div>
      <div className="col-span-2">
        <p className="font-semibold">Raw Black T-Shirt</p>
        <p>Color: Black Size: XL</p>
      </div>
      <p className="place-self-center">{formatPrice(30000)}</p>
      <Badge className={"w-fit"}>Đang giao</Badge>
      <Button variant="outline">Chi tiết</Button>
    </div>
  );
};

export default OrderItem;
