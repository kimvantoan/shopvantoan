import React from "react";
import ListCartItem from "./ListCartItem";
import Summary from "./Summary";

const Cart = () => {
  return (
    <div>
      <div className="px-40 mb-10" >
        <h1 className="font-bold text-4xl my-5">Giỏ hàng</h1>
        <div className="flex justify-between">
          <ListCartItem />
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
