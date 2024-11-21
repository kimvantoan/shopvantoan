import React from "react";
import { Link } from "react-router-dom";
import formatPrice from "../utils/FormatPrice";
import { FaStar } from "react-icons/fa";
const CardProduct = ({ item }) => {
  return (
    <Link to={"/detail"} className="rounded-md overflow-hidden bg-white">
      <figure className="w-full h-96">
        <img
          src={item?.images[0].url}
          alt="Shoes"
          className="object-cover w-full h-full hover:scale-105 duration-300" 
        />
      </figure>
      <div className="px-5 py-2 flex flex-col">
        <p className="font-semibold text-xl">{item.name}</p>
        <div className="flex gap-4">
          <p className="text-lg">Brand name</p>
          <p className="flex items-center gap-1">
            4.4 <FaStar className="text-#5A6D57" />
          </p>
        </div>
        <div className="flex gap-3 items-end">
          <p className="font-bold text-2xl text-#5A6D57">{formatPrice(item?.price)}</p>
          <s className="text-xl text-gray-500">{formatPrice(item?.oldPrice)}</s>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;
