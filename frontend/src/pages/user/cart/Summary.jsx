import { Button } from "@/components/ui/button";
import formatPrice from "@/utils/FormatPrice";
import React from "react";
import { Link } from "react-router-dom";

const Summary = () => {
  return (
    <div className="flex flex-col p-5 border h-fit">
      <h2 className="font-semibold text-xl mb-10">Chi tiết đơn hàng</h2>
      <div className="flex flex-col gap-5 pb-5 border-b">
        <div className="flex justify-between gap-20">
          <p className="text-gray-500 font-semibold">Tổng tiền hàng</p>
          <p className="font-semibold ">{formatPrice(30000)}</p>
        </div>
        <div className="flex justify-between gap-20">
          <p className="text-gray-500 font-semibold">Phí giao hàng</p>
          <p className="font-semibold ">Free</p>
        </div>
      </div>

      <div className="flex justify-between gap-20 mt-5">
        <p className="text-gray-500 font-semibold">Tổng tiền</p>
        <p className="font-semibold ">{formatPrice(30000)}</p>
      </div>
      <Link to="/checkout">
      <Button className="w-full mt-5">Mua hàng</Button>
      </Link>
      <Link to={"/shop"} className="mx-auto mt-5 underline">
        Tiếp tục mua hàng
      </Link>
    </div>
  );
};

export default Summary;