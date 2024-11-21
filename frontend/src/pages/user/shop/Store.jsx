import React from "react";
import Fillter from "./Fillter";
import ListProduct from "./ListProduct";
import { useProductStore } from "../../../stores/productStore";

export const Store = () => {
  const { pagination } = useProductStore();
  return (
    <div className="bg-gray-100">
      <h3 className="font-semibold text-3xl mb-5 text-right px-24">{`Trang ${pagination.page} / ${pagination.totalPages}`}</h3>
      <div className="grid grid-cols-4 px-24 gap-4">
        <Fillter />
        <div className="col-span-3">
          <ListProduct />
        </div>
      </div>
    </div>
  );
};
