import React from "react";
import CartItem from "./CartItem";

const ListCartItem = () => {
  return (
    <div className="w-2/3 ">
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-8 place-items-center border-b pb-3">
          <p className="col-span-4 place-self-start">Sản phẩm</p>
          <p className="">Giá</p>
          <p className="col-span-2">Số lượng</p>
        </div>
        <CartItem />
     
      </div>
    </div>
  );
};

export default ListCartItem;
