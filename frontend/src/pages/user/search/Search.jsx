import CardProduct from "@/components/CardProduct";
import CardSkeleton from "@/components/CardSkeleton";
import { Input } from "@/components/ui/input";
import { useProductStore } from "@/stores/productStore";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Search = () => {
  const { loading, getProducts, products } =
    useProductStore();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchText, setSearchText] = useState(searchParams.get("q") || "");
  useEffect(() => {
    getProducts({ q: searchText });
  },[searchParams]);
  return (
    <div className="mt-5">
      <div className="text-center mx-auto">
        <Input
          placeholder="Tìm kiếm"
          className="w-1/3 mx-auto"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setSearchParams({ q: searchText });
              getProducts({ q: searchText });
            }
          }}
        />
        <h1 className="text-3xl mt-3">Tìm kiếm</h1>
        <p>
          có <span className="text-red-500">{products?.length || 0}</span>{" "}
          sản phẩm cho tìm kiếm
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-4 gap-6 mx-40 mt-10">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-6 mx-40 mt-10">
          {products?.map((product) => (
            <CardProduct key={product?._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
