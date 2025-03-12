import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { FaStar } from "react-icons/fa";
import { useCategoryStore } from "@/stores/categoryStore";
import { useSearchParams } from "react-router-dom";
import { useProductStore } from "@/stores/productStore";
const Filter = () => {
  const { getCategories, categories } = useCategoryStore();
  const { getProducts } = useProductStore();

  const [searchParams, setSearchParams] = useSearchParams();

  const filter = {
    priceRanges: [
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
    ],
    categories,
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    star: ["5", "4", "3", "2", "1"],
  };
  const resetFilter = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("category");
    params.delete("size");
    params.delete("price");
    params.delete("star");
    setSearchParams(params);
  };

  const handle = (name, value) => {
    const params = new URLSearchParams(searchParams);
    const curValues = params.getAll(name);
    if (curValues.includes(value)) {
      const newValue = curValues.filter((item) => item !== value);
      params.delete(name);
      newValue.forEach((item) => params.append(name, item));
    } else {
      params.append(name, value);
    }
    setSearchParams(params);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const selectedCategories = searchParams.getAll("category");
  const selectedSizes = searchParams.getAll("size");
  const selectedPrices = searchParams.getAll("price");
  const selectedStars = searchParams.getAll("star");

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    selectedCategories.forEach((category) =>
      params.append("category", category)
    );
    selectedSizes.forEach((size) => params.append("size", size));
    selectedPrices.forEach((price) => params.append("price", price));
    selectedStars.forEach((star) => params.append("star", star));
    if (!params.has("sort")) {
      params.set("sort", "newest");
    }
    getProducts(params);
  }, [searchParams]);

  return (
    <div>
      <Accordion
        type="multiple"
        className="w-[250px]"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Danh mục</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {categories.map((item) => (
              <Label
                style={{ userSelect: "none" }}
                className="flex items-center gap-2"
              >
                <Checkbox
                  onCheckedChange={() => handle("category", item._id)}
                  id={item.name}
                  value={item.name}
                  className="h-4 w-4"
                  checked={searchParams.getAll("category").includes(item._id)}
                />
                <Label
                  htmlFor={item.name}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item.name}
                </Label>
              </Label>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Giá</AccordionTrigger>
          <AccordionContent className="space-y-3">
            <div className="grid gap-2">
              {filter.priceRanges.map((item) => (
                <Label
                  style={{ userSelect: "none" }}
                  className="flex items-center gap-2"
                >
                  <Checkbox
                    onCheckedChange={() =>
                      handle("price", `${item.min}-${item.max}`)
                    }
                    id={item.label}
                    className="h-4 w-4 text-primary accent-slate-950"
                    value={`${item.min}-${item.max}`}
                    checked={searchParams
                      .getAll("price")
                      .includes(`${item.min}-${item.max}`)}
                  />
                  <Label htmlFor={item.label}>{item.label}</Label>
                </Label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Kích thước</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {filter.size.map((item) => (
              <Label
                style={{ userSelect: "none" }}
                className="flex items-center gap-2"
              >
                <Checkbox
                  id={item}
                  onCheckedChange={() => handle("size", item)}
                  value={item}
                  checked={searchParams.getAll("size").includes(item)}
                />
                <label
                  htmlFor={item}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item}
                </label>
              </Label>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Đánh giá</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {filter.star.map((item) => (
              <Label
                style={{ userSelect: "none" }}
                className="flex items-center gap-2"
              >
                <Checkbox
                  id={item}
                  onCheckedChange={() => handle("star", item)}
                  value={item}
                  checked={searchParams.getAll("star").includes(item)}
                />
                <label
                  htmlFor={item}
                  className="text-sm flex text-yellow-500 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <FaStar size={16} className={item >= 1 ? "" : "opacity-20"} />
                  <FaStar size={16} className={item >= 2 ? "" : "opacity-20"} />
                  <FaStar size={16} className={item >= 3 ? "" : "opacity-20"} />
                  <FaStar size={16} className={item >= 4 ? "" : "opacity-20"} />
                  <FaStar size={16} className={item >= 5 ? "" : "opacity-20"} />
                </label>
              </Label>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex gap-2 mt-5 ">
        <Button onClick={resetFilter}>Làm mới</Button>
      </div>
    </div>
  );
};

export default Filter;
