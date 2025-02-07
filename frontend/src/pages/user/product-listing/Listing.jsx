import Filter from "@/components/Filter";
import React, { useEffect, useState } from "react";
import ListProduct from "./ListProduct";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProductStore } from "@/stores/productStore";
import { useSearchParams } from "react-router-dom";
const Listing = () => {
  const { getProducts, totalPages, currentPage } = useProductStore();
  const sortOption = [
    {
      label: "Mới nhất",
      value: "newest",
    },
    {
      label: "Cũ nhất",
      value: "oldToNew",
    },
    {
      label: "Tên: A-Z",
      value: "aToZ",
    },
    {
      label: "Tên: Z-A",
      value: "zToA",
    },
    {
      label: "Giá: Tăng dần",
      value: "lowToHigh",
    },
    {
      label: "Giá: Giảm dần",
      value: "highToLow",
    },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(totalPages);
  
  const handleSort = (value) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    setSearchParams(params);
  };
  const sort = searchParams.get("sort") || "newest";
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (!params.has("sort")) {
      params.set("sort", "newest");
    }
    getProducts(params);
  }, [sort]);
  const handlePage = (value) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", value);
    setSearchParams(params);
  };
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);
    setSearchParams(params);
  }, [totalPages]);

  return (
    <div className="flex justify-between mx-20 gap-10 mt-10">
      <Filter />
      <div className="space-y-2 w-full">
        <div className="flex gap-2 items-center justify-end">
          <h2>Sắp xếp theo</h2>
          <Select onValueChange={(e) => handleSort(e)} defaultValue={sort}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {sortOption.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <ListProduct />
        <Pagination className={parseInt(totalPages) <= 1 ? "hidden" : ""}>
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
            <PaginationItem
              className={parseInt(totalPages) < 3 ? "hidden" : ""}
            >
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
    </div>
  );
};

export default Listing;
