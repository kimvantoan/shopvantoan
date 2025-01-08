import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { useFillterStore } from "@/stores/fillterStore";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FaStar } from "react-icons/fa";
const Fillter = () => {
  const filler = {
    priceRanges: [
      {
        label: "Tất cả",
        min: 0,
        max: 0,
      },
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
    sizes: ["S", "M", "L", "XL", "2XL"],
    categories: ["Áo thun", "Áo sơ mi", "Áo khoác"],
    brand: ["Nike", "Adidas", "Puma"],
    star: [5, 4, 3, 2, 1],
  };
  const {
    selectedCategories,
    handleCategoryChange,
    handlePriceChange,
    handleSizeChange,
    selectedSizes,
    selectedPrices,
    selectedBrand,
    handleStar,
    selectedStar,
    handleBrandChange,reset
  } = useFillterStore();
  console.log(selectedCategories, selectedSizes, selectedPrices, selectedBrand, selectedStar);
  return (
    <div>
      <Accordion type="multiple" className="w-[250px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>Danh mục</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {filler.categories.map((item) => (
              <Label
                style={{ userSelect: "none" }}
                className="flex items-center gap-2"
              >
                <Checkbox
                  id={item}
                  onCheckedChange={() => handleCategoryChange(item)}
                  value={item}
                  checked={selectedCategories.includes(item)}
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
        <AccordionItem value="item-2">
          <AccordionTrigger>Kích thước</AccordionTrigger>
          <AccordionContent className="space-y-2">
            {filler.sizes.map((item) => (
              <Label
                style={{ userSelect: "none" }}
                htmlFor={item}
                className="flex items-center gap-2"
              >
                <Checkbox
                  id={item}
                  onCheckedChange={() => handleSizeChange(item)}
                  value={item}
                  checked={selectedSizes.includes(item)}
                />
                <p className="text-sm font-medium">{item}</p>
              </Label>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Giá</AccordionTrigger>
          <AccordionContent className="space-y-3">
            <div className="grid gap-2">
              {filler.priceRanges.map((item) => (
                <Label
                  style={{ userSelect: "none" }}
                  className="flex items-center gap-2"
                >
                  <input
                    onChange={() => handlePriceChange(item.min, item.max)}
                    type="radio"
                    className="h-4 w-4 text-primary accent-slate-950"
                    id={item.label}
                    name="priceRange"
                    value={[item.min, item.max]}
                    checked={
                      selectedPrices.includes(item.min) &&
                      selectedPrices.includes(item.max)
                    }
                  />
                  <Label htmlFor={item.label}>{item.label}</Label>
                </Label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Thương hiệu</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {filler.brand.map((item) => (
              <Label
                style={{ userSelect: "none" }}
                className="flex items-center gap-2"
              >
                <Checkbox
                  id={item}
                  onCheckedChange={() => handleBrandChange(item)}
                  value={item}
                  checked={selectedBrand.includes(item)}
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
        <AccordionItem value="item-5">
          <AccordionTrigger>Đánh giá</AccordionTrigger>
          <AccordionContent className="space-y-3">
            <RadioGroup onValueChange={handleStar} defaultValue={selectedStar ? selectedStar : "all"}>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="all" id="radio-06-all" />
                <Label htmlFor="radio-06-all">Tất cả</Label>
              </div>
              {filler.star.map((item) => (
                <div className="flex items-center gap-2">
                  <RadioGroupItem value={item} id={item} />
                  <Label
                    htmlFor={item}
                    className="inline-flex items-center gap-1"
                  >
                    <span
                      className="inline-flex items-center text-amber-500"
                      aria-hidden="true"
                    >
                      <FaStar
                        size={16}
                        className={item >= 1 ? "" : "opacity-30"}
                      />
                      <FaStar
                        size={16}
                        className={item >= 2 ? "" : "opacity-30"}
                      />
                      <FaStar
                        size={16}
                        className={item >= 3 ? "" : "opacity-30"}
                      />
                      <FaStar
                        size={16}
                        className={item >= 4 ? "" : "opacity-30"}
                      />
                      <FaStar
                        size={16}
                        className={item >= 5 ? "" : "opacity-30"}
                      />
                    </span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex gap-2 mt-5 ">
        <Button>Áp dụng lọc</Button>
        <Button onClick={reset} variant="outline">
          Làm mới
        </Button>
      </div>
    </div>
  );
};

export default Fillter;
