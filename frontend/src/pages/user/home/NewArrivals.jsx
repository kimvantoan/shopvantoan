import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CardProduct from "@/components/CardProduct";
import { useProductStore } from "@/stores/productStore";
const NewArrivals = () => {
  const { getProducts,products } = useProductStore();
  useEffect(() => {
    getProducts({ sort: "newest", limit: 12 });
  }, []); 
  return (
    <div>
      <h2 className="font-semibold text-3xl text-center">Sản phẩm mới</h2>
      <p className="text-end text-lg">
        <Link to={"/shop"} className="link">
          Xem thêm
        </Link>
      </p>
      <div className="grid grid-cols-4 gap-6">
        {products?.map((product) => (
          <CardProduct key={product._id} product={product} />
        ))}
        
      </div>
    </div>
  );
};

export default NewArrivals;
