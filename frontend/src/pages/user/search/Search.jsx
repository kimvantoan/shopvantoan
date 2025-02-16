import CardProduct from "@/components/CardProduct";
import CardSkeleton from "@/components/CardSkeleton";
import { Input } from "@/components/ui/input";
import { useProductStore } from "@/stores/productStore";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
export const Search = () => {
  const { loading, getProducts, products, totalPages, currentPage } =
    useProductStore();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchText, setSearchText] = useState(searchParams.get("q") || "");
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (!params.has("page")) {
      params.set("page", 1);
    }
    params.set("limit", 20);
    getProducts(params);
  }, [searchParams]);
  const handlePage = (value) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", value);
    setSearchParams(params);
  };

  return (
    <div className="mt-5">
      <div className="text-center mx-auto">
        <Input
          placeholder="Tìm kiếm"
          className="w-1/3 mx-auto"
          value={searchText}
          required
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
          có{" "}
          <span className="text-red-500">
            {(searchParams.get("q") && products?.length) || 0}
          </span>{" "}
          sản phẩm cho tìm kiếm
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-5 gap-6 mx-40 mt-10">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-6 mx-40 mt-10">
          {searchParams.get("q") &&
            products?.map((product) => (
              <CardProduct key={product?._id} product={product} />
            ))}
        </div>
      )}
      <Pagination className={!searchParams.get("q") ||totalPages<2 ? "hidden" : ""}>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={parseInt(currentPage) === 1 ? "hidden" : ""}
              onClick={() => currentPage > 1 && handlePage(currentPage - 1)}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              isActive={parseInt(currentPage) === 1}
              onClick={() => handlePage(1)}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className={`${
                parseInt(currentPage) === parseInt(totalPages) ||
                parseInt(currentPage) === 1
                  ? "hidden"
                  : ""
              }`}
              onClick={() => handlePage(currentPage)}
              isActive
            >
              {currentPage}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className={parseInt(totalPages) < 3 ? "hidden" : ""}>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              isActive={parseInt(currentPage) === totalPages}
              onClick={() => handlePage(totalPages)}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className={
                parseInt(currentPage) === parseInt(totalPages) ? "hidden" : ""
              }
              onClick={() =>
                currentPage < totalPages &&
                handlePage(parseInt(currentPage) + 1)
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
