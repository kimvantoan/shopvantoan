import React from "react";
import { Link } from "react-router-dom";
import heros from "@/assets/hero.png";
import formatPrice from "@/utils/FormatPrice";
const CardProduct = () => {
  return (
    <Link to={"/detail"} className="rounded-md overflow-hidden bg-white">
      {/* hover vào thẻ cha thì thẻ con chịu ảnh hưởng */}
      <div className="bg-gray-100 h-80 mb-6 rounded-md overflow-hidden group ">
        <img src={heros} className="h-full object-cover m-auto group-hover:scale-110 transition duration-300" />
      </div>
      <div className="">
        <h3 className="font-semibold">Roadstar</h3>
        <p className="my-3 font-medium text-gray-500">category</p>
        <span className="font-semibold text-xl">{formatPrice(30000)}</span> <s className="text-gray-500">{formatPrice(40000)}</s>
      </div>
    </Link>
  );
};

export default CardProduct;
