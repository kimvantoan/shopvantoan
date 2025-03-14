import React from "react";
import formatPrice from "@/utils/FormatPrice";
import { percentDis } from "@/utils/Percentdis";
import { Link } from "react-router-dom";
const CardProduct = ({ product }) => {
  return (
    // <Link
    //   to={`/product/${product?._id}`}
    //   className="group overflow-hidden relative bg-gray-100 hover:shadow-gray-500/40 hover:shadow duration-300 cursor-pointer"
    // >
    //   <div className="z-10 px-1 rounded-full text-sm text-white bg-red-500 absolute top-3 right-3">
    //     {-percentDis(product?.oldPrice, product?.price)}%
    //   </div>
    //   <div className="flex group bg-gray-100  h-[260px] mb-3 overflow-hidden">
    //     <img
    //       src={product?.images[0].url}
    //       className="h-full group-hover:-translate-x-[100%] object-cover mx-auto duration-500"
    //     />
    //     <img
    //       src={product?.images[1] && product?.images[1].url}
    //       className="h-full group-hover:-translate-x-[100%] object-cover m-auto duration-500"
    //     />
    //   </div>
    //   <div className="text-center text-sm">
    //     <h3 className="group-hover:text-yellow-500">{product?.name}</h3>
    //     <span className="text-red-500  mr-2">
    //       {formatPrice(product?.price)}
    //     </span>
    //     <s className="text-gray-500 text-xs">
    //       {formatPrice(product?.oldPrice)}
    //     </s>
    //   </div>
    // </Link>
    <Link to={`/product/${product?._id}`} className="max-w-sm bg-background">
      <div className="relative">
        <img
          src={product?.images[1] && product?.images[1].url}
          alt="Loveseat Sofa"
          className="w-full h-72 object-cover"
        />
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {-percentDis(product?.oldPrice, product?.price)}%
        </span>
      </div>
      <div className="space-y-2 mt-2">
        <h2 className="">{product?.name}</h2>
        <div className="flex gap-2 items-end">
          <p className=" font-bold text-primary">
            {formatPrice(product?.price)}
          </p>
          <p className="text-sm text-zinc-500 line-through">
            {formatPrice(product?.oldPrice)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;
