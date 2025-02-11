import React from "react";
import formatPrice from "@/utils/FormatPrice";
import { percentDis } from "@/utils/Percentdis";
import { Link } from "react-router-dom";
const CardProduct = ({ product }) => {
  return (
    <Link
    to={`/product/${product?._id}`}
      className=" group overflow-hidden relative hover:shadow-gray-500/40 hover:shadow duration-300 cursor-pointer p-2"
    >
      <div className=" z-10 px-1 text-sm bg-white text-red-500 absolute top-3 left-3">
        {-percentDis(product?.oldPrice, product?.price)}%
      </div>
      <div className="flex group bg-gray-100  h-[260px] mb-3 overflow-hidden">
        <img
          src={product?.images[0].url}
          className="h-full group-hover:-translate-x-[100%] object-cover mx-auto duration-500"
        />
        <img
          src={product?.images[1] && product?.images[1].url}
          className="h-full group-hover:-translate-x-[100%] object-cover m-auto duration-500"
        />
      </div>
      <div className="text-center text-sm">
        <h3 className="group-hover:text-yellow-500">{product?.name}</h3>
        <span className="text-red-500  mr-2">{formatPrice(product?.price)}</span>
        <s className="text-gray-500 text-xs">
          {formatPrice(product?.oldPrice)}
        </s>
      </div>
    </Link>
  );
};

export default CardProduct;
