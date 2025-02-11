import CardProduct from "@/components/CardProduct";
import CardSkeleton from "@/components/CardSkeleton";
import { useProductStore } from "@/stores/productStore";
import React, { useEffect } from "react";

const ListProduct = () => {
  const { loading, getProducts, products } = useProductStore();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {products && products.length > 0 ? (
        <div className="grid grid-cols-4 gap-x-5 gap-y-10">
          {loading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            products?.map((product) => (
              <CardProduct key={product._id} product={product} />
            ))
          )}
        </div>
      ) : (
        <div className="text-center space-y-2">
          <img
            className="mx-auto w-1/2 h-[300px]"
            src="/no-product.png"
            alt=""
          />
          <h1 className="text-xl text-red-500 ">
            Rất tiếc! Không tìm thấy sản phẩm theo yêu cầu
          </h1>
        </div>
      )}
    </>
  );
};

export default ListProduct;
