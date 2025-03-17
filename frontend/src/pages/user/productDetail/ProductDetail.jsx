import React, { useEffect } from "react";
import Detail from "./Detail";
import Carousel_Product from "./Carousel_Product";
import ProductSkeleton from "./ProductSkeleton";
import { useProductStore } from "@/stores/productStore";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const { loading, getProductbyId } = useProductStore();
  const { id } = useParams();
  useEffect(() => {
    getProductbyId(id);
  }, []);
  return (
    <div className="px-32 flex flex-col gap-16">
      {loading ? <ProductSkeleton /> : <Carousel_Product />}
      <Detail />
    </div>
  );
};

export default ProductDetail;
