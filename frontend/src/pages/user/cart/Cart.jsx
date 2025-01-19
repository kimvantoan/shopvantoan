import React, { useEffect } from "react";
import ListCartItem from "./ListCartItem";
import Summary from "./Summary";
import { useCartStore } from "@/stores/cartStore";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { cart, getCart } = useCartStore();
  useEffect(() => {
    getCart();
  }, []);
  return (
    <div>
      <div className="px-40 mb-10">
        <h1 className="font-bold text-4xl my-5">Giỏ hàng</h1>
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="flex justify-between">
            <ListCartItem />
            <Summary />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
