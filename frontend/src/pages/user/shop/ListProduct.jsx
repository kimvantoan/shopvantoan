import React, { useEffect } from "react";
import CardProduct from "../../../components/CardProduct";
import ButtonFill from "../../../components/ButtonFill";
import ButtonStrocke from "../../../components/ButtonStrocke";
import { useProductStore } from "../../../stores/productStore";

const ListProduct = () => {
  const { products, allProducts, setPage, pagination } = useProductStore();

  useEffect(() => {
    allProducts(pagination.page, pagination.limit);
  }, [pagination.page]);

  const handleNextPage = () => {
    if (pagination.page < pagination.totalPages) {
      setPage(parseInt(pagination.page) + 1);
    }
  };

  const handlePrevPage = () => {
    if (pagination.page > 1) {
      setPage(pagination.page - 1);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-x-6 gap-y-12">
        {products?.map((item, index) => (
          <CardProduct item={item} key={index} />
        ))}
      </div>
      <div className="justify-center flex mt-10">
        <ButtonFill title="«" onClick={handlePrevPage} />

        <ButtonStrocke title={pagination.page} />

        <ButtonFill title="»" onClick={handleNextPage} />
      </div>
    </div>
  );
};

export default ListProduct;
