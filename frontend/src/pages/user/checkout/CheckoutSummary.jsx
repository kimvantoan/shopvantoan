import React from 'react'
import formatPrice from "@/utils/FormatPrice";
import { Button } from '@/components/ui/button';
import OrderSuccess from '@/components/OrderSuccess';

const CheckoutSummary = ({end}) => {
  return (
    <div className="flex flex-col p-5 border h-fit w-[400px]">
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

    <div className="flex justify-between gap-20 my-5">
      <p className="text-gray-500 font-semibold">Tổng tiền</p>
      <p className="font-semibold ">{formatPrice(30000)}</p>
    </div>
    {end && <OrderSuccess /> || <Button className="mt-5">Đặt hàng</Button>}
  </div>
  )
}

export default CheckoutSummary