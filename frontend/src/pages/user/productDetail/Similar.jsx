import CardProduct from "@/components/CardProduct";
import { useProductStore } from "@/stores/productStore";
import React, { useEffect } from "react";

const Similar = () => {
  const { products, getProducts } = useProductStore();
  useEffect(() => {
    getProducts({limit:5});
  }, []);
  return (
    <div>
      <h2 className="text-2xl">SẢN PHẨM LIÊN QUAN</h2>
      <div className="grid grid-cols-5 gap-5 my-10">
        {products?.map((product) => (
          <CardProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Similar;
