import React from "react";
import { Link } from "react-router-dom";
import heros from "@/assets/hero.png";
import formatPrice from "@/utils/FormatPrice";
const CardProduct = () => {
  return (
    <Link to={"/product/1"} className="overflow-hidden bg-white">
      <div className="bg-gray-100 h-80 mb-3  overflow-hidden group ">
        <img src={heros} className="h-full object-cover m-auto group-hover:scale-110 transition duration-300" />
      </div>
      <div className="text-sm">
        <h3 className="font-bold">Roadstar</h3>
        <span className="font-medium">{formatPrice(30000)}</span> <s className="text-gray-500">{formatPrice(40000)}</s>
      </div>
    </Link>
  );
};

export default CardProduct;
