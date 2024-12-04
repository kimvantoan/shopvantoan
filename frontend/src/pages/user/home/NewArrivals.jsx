import React from "react";
import { Link } from "react-router-dom";
import CardProduct from "@/components/CardProduct";
const NewArrivals = () => {
  return (
    <div>
      <h2 className="font-semibold text-3xl mb-5 text-center">Sản phẩm mới</h2>
      <p className="text-end text-lg mb-3">
        <Link to={"/shop"} className="link">
          Xem thêm
        </Link>
      </p>
      <div className="grid grid-cols-4 gap-6">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  );
};

export default NewArrivals;
