import React from "react";
import CheckoutSummary from "./CheckoutSummary";
import Timeline from "@/components/Timeline";
import hero from "@/assets/hero.png";
import { Button } from "@/components/ui/button";
const ReviewOrder = () => {
  const step = "review";
  return (
    <div className="px-40 my-5">
      <h1 className="font-bold text-4xl mb-5">Xem lại đơn hàng</h1>
      <div className="flex justify-between gap-20">
        <div className="flex flex-col w-full">
          <Timeline step={step} />
          <div className="mt-5">
            <h2 className="font-bold text-lg">Danh sách sản phẩm</h2>
            <div className="flex gap-3 py-5 border-b">
              <div className="size-20 bg-gray-100 rounded-lg overflow-hidden">
                <img src={hero} className="overflow-cover" alt="" />
              </div>
              <div>
                <p className="font-bold">Raw Black T-Shirt</p>
                <p>Color: Black</p>
                <p>Size: XL</p>
              </div>
            </div>
          </div>
          <div className="py-5 border-b">
            <h2 className="font-bold text-lg mb-3">Địa chỉ giao hàng</h2>
            <div>
              <p className="font-bold">Name</p>
              <p>phone</p>
              <p>{`address.detail, address.commune, address.district, address.city`}</p>
            </div>
          </div>
          <div className="py-5 border-b">
            <h2 className="font-bold text-lg mb-3">Phương thức thanh toán</h2>
            <div>
              <p className="font-bold">Thanh toán khi nhận hàng</p>
            </div>
          </div>
        </div>
          <CheckoutSummary end={true}/>
      </div>
    </div>
  );
};

export default ReviewOrder;
