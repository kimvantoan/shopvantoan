import React, { useEffect } from "react";
import CardProduct from "../../../components/CardProduct";
import { useProductStore } from "../../../stores/productStore";
import { Link } from "react-router-dom";
const NewArrivals = () => {
  const { products, allProducts, pagination } = useProductStore();

  useEffect(() => {
    allProducts(pagination.page);
  }, [pagination.page]);
  return (
    <div>
      <h2 className="font-semibold text-3xl mb-5">Sản phẩm mới</h2>
      <p className="text-end text-lg mb-3">
        <Link to={"/shop"} className="link">
          Xem thêm
        </Link>
      </p>
      <div className="grid grid-cols-4 gap-6">
        {products?.slice(0, 4).map((item, index) => (
          <CardProduct item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
