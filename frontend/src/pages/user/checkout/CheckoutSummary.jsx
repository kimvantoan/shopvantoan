import React from "react";
import formatPrice from "@/utils/FormatPrice";
import { useCartStore } from "@/stores/cartStore";

const CheckoutSummary = () => {
  const { cart, totalPrice } = useCartStore();
  return (
    <div className="flex flex-col flex-1 px-32 bg-gray-100">
      <div>
        {cart?.map((cartItem) => (
          <div className="grid grid-cols-5 border-b py-2">
            <div className="size-14 bg-gray-100 rounded-lg overflow-hidden">
              <img
                className="overflow-cover"
                alt=""
                src={cartItem?.productId.images[0].url}
              />
            </div>
            <div className="col-span-3">
              <span className="font-bold mr-3">{cartItem?.productId.name}</span>
              <span>x{cartItem.quantity}</span>
              <p>
                {cartItem?.color}/{cartItem?.size}
              </p>
            </div>
            <p className="justify-self-end">
              {formatPrice(cartItem?.productId.price)}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-5 pb-5 border-b">
        <div className="flex justify-between gap-20">
          <p className="text-gray-500 font-semibold">Tổng tiền hàng</p>
          <p className="font-semibold ">{formatPrice(totalPrice)}</p>
        </div>
        <div className="flex justify-between gap-20">
          <p className="text-gray-500 font-semibold">Phí giao hàng</p>
          <p className="font-semibold ">Free</p>
        </div>
      </div>

      <div className="flex justify-between gap-20 my-5">
        <p className="text-gray-500 font-semibold">Tổng tiền</p>
        <p className="font-semibold ">{formatPrice(totalPrice)}</p>
      </div>
    </div>
  );
};

export default CheckoutSummary;
