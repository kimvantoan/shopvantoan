import React, { useEffect, useState } from "react";

import { useCategoryStore } from "@/stores/categoryStore";
import { useSearchParams } from "react-router-dom";
import { useProductStore } from "@/stores/productStore";
import { FormControl, MenuItem, Select } from "@mui/material";
const Filter = () => {
  const { getCategories, categories } = useCategoryStore();
  const { getProducts } = useProductStore();

  const [searchParams, setSearchParams] = useSearchParams();
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
      label: "Giá: Tăng dần",
      value: "lowToHigh",
    },
    {
      label: "Giá: Giảm dần",
      value: "highToLow",
    },
  ];
  const priceRanges = [
    {
      label: "Dưới 100.000đ",
      min: 0,
      max: 100000,
    },
    {
      label: "100.000đ - 200.000đ",
      min: 100000,
      max: 200000,
    },
    {
      label: "200.000đ - 500.000đ",
      min: 200000,
      max: 500000,
    },
    {
      label: "500.000đ - 1.000.000đ",
      min: 500000,
      max: 1000000,
    },
  ];
  const handleCategory = (value) => {
    const params = new URLSearchParams(searchParams);
     value?params.set("category", value):params.delete("category");
    setSearchParams(params);
  };
  const handlePrice = (value) => {
    const params = new URLSearchParams(searchParams);
    value?params.set("price", value):params.delete("price");
    setSearchParams(params);
  };
  const handleSort = (value) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    setSearchParams(params);
  };
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const [curSort, setCurSort] = useState(searchParams.get("sort") || "newest");
  const [curCat, setCurCat] = useState(searchParams.get("category") || "All");
  const [curPrice, setCurPrice] = useState(searchParams.get("price") || "All");
  useEffect(() => {
    !searchParams.has('sort') && searchParams.set("sort", "newest");
    getProducts(searchParams);
  }, [searchParams, getProducts]);
  return (
    <div className="flex justify-between">
      <div className="flex gap-5">
        <div>
          <p className="font-semibold text-[#6C7275]">Danh mục</p>
          <FormControl>
            <Select sx={{ width: 200, height: 40 }} defaultValue={curCat}>
              <MenuItem value="All" onClick={() => handleCategory("")}>
                Tất cả
              </MenuItem>
              {categories.map((category) => (
                <MenuItem
                  key={category._id}
                  id={category.name}
                  value={category.name}
                  onClick={() => handleCategory(category._id)}
                >
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <p className="font-semibold text-[#6C7275]">Giá</p>
          <FormControl>
            <Select sx={{ width: 200, height: 40 }} defaultValue={curPrice}>
              <MenuItem value="All" onClick={() => handlePrice("")}>
                Tất cả
              </MenuItem>
              {priceRanges.map((item) => (
                <MenuItem
                  value={`${item.min}-${item.max}`}
                  onClick={() => handlePrice(`${item.min}-${item.max}`)}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="flex items-end gap-4">
        <div>
          <p className="font-semibold text-[#6C7275]">Sắp xếp</p>
          <FormControl>
            <Select sx={{ width: 200, height: 40 }} defaultValue={curSort}>
              {sortOption.map((sort) => (
                <MenuItem
                  value={sort.value}
                  onClick={() => handleSort(sort.value)}
                >
                  {sort.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Filter;
