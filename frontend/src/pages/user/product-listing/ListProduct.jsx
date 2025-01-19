import CardProduct from "@/components/CardProduct";
import CardSkeleton from "@/components/CardSkeleton";
import { useProductStore } from "@/stores/productStore";
import React, { useEffect } from "react";

const ListProduct = () => {
  const { products,loading, getAllProduct } = useProductStore();
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <div className="grid grid-cols-4 gap-x-5 gap-y-10">
      {products?.map((product) =>
        loading ? (
          <CardSkeleton />
        ) : (
          <CardProduct key={product._id} product={product} />
        )
      )}
    </div>
  );
};

export default ListProduct;
