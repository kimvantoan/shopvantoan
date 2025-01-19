import React from "react";
import formatPrice from "@/utils/FormatPrice";
import { percentDis } from "@/utils/Percentdis";
const CardProduct = ({ product }) => {
  return (
    <div
      onClick={() => location.replace(`/product/${product?._id}`)}
      className="group overflow-hidden relative hover:shadow-gray-500/40 hover:shadow duration-300 cursor-pointer p-2"
    >
      <div className="z-10 px-1 text-sm bg-white text-red-500 absolute top-2 left-2">
        {-percentDis(product?.oldPrice, product?.price)}%
      </div>
      <div className="bg-gray-100 h-[300px] mb-3 overflow-hidden">
        <img
          src={product?.images[0].url}
          className="h-full object-cover m-auto group-hover:scale-110 duration-300"
        />
      </div>
      <div className=" text-center">
        <h3>{product?.name}</h3>
        <span className="text-red-500 mr-2">{formatPrice(product?.price)}</span>
        <s className="text-gray-500 text-sm">
          {formatPrice(product?.oldPrice)}
        </s>
      </div>
    </div>
  );
};

export default CardProduct;
