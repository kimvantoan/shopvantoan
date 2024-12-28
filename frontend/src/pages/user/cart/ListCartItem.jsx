import React from "react";
import CartItem from "./CartItem";

const ListCartItem = () => {
  return (
    <div>
      <h2 className="font-semibold pb-5 border-b mb-5">Giỏ hàng của bạn</h2>
      <div className="flex flex-col gap-5">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
};

export default ListCartItem;
