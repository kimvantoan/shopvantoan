import React, { useState } from "react";
import ButtonFill from "../../../components/ButtonFill";
import ButtonStrocke from "../../../components/ButtonStrocke";
const Fillter = () => {
  const handleFilter = () => {};
  const handleReset = () => {
    setFillter({
      size: [],
      color: [],
      price: {
        min: "",
        max: "",
      },
      brand: [],
    });
  };
  const [fillter, setFillter] = useState({
    size: [],
    color: [],
    price: {
      min: "",
      max: "",
    },
    brand: [],
  });
  const handleFillter = (e) => {
    const { value, checked, name } = e.target;
    if (name === "min" || name === "max") {
      setFillter((prev) => ({
        ...prev,
        price: {
          ...prev.price,
          [name]: value,
        },
      }));
    } else {
      if (checked) {
        setFillter((prev) => ({
          ...prev,
          [name]: [...prev[name], value],
        }));
      } else {
        setFillter((prev) => ({
          ...prev,
          [name]: prev[name].filter((item) => item !== value),
        }));
      }
    }
  };

  return (
    <div className="rounded-md overflow-hidden bg-white h-fit p-3">
      <h2 className="font-semibold text-3xl mb-5 ">Lọc sản phẩm</h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        <ButtonStrocke title="làm mới" onClick={handleReset} />
        <ButtonFill title="Lọc" />
        <details className="col-span-2">
          <summary className="border-2 border-#748C70 font-bold text-#5A6D57 px-4 py-2">
            Size
          </summary>
          <ul className="dropdown-content border-2 border-t-0 border-#748C70 z-[1] p-4">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value={size}
                  onChange={handleFillter}
                  className="size-4"
                  name="size"
                  id={size}
                  checked={fillter.size.includes(size)}
                />
                <label className="text-#5A6D57" htmlFor={size}>
                  {size}
                </label>
              </li>
            ))}
          </ul>
        </details>
        <details className="col-span-2">
          <summary className="border-2 border-#748C70 font-bold text-#5A6D57 px-4 py-2">
            Màu sắc
          </summary>
          <ul className="dropdown-content border-2 border-t-0 border-#748C70 z-[1] p-4">
            {["Đỏ", "Đen", "Xanh", "Đen", "Đo"].map((color) => (
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value={color}
                  onChange={handleFillter}
                  className="size-4"
                  name="color"
                  id={color}
                  checked={fillter.color.includes(color)}
                />
                <label className="text-#5A6D57" htmlFor={color}>
                  {color}
                </label>
              </li>
            ))}
          </ul>
        </details>
        <details className="col-span-2">
          <summary className="border-2 border-#748C70 font-bold text-#5A6D57 px-4 py-2">
            Brand
          </summary>
          <ul className="dropdown-content border-2 border-t-0 border-#748C70 z-[1] p-4">
            {["Adidas", "Puma", "Nikke"].map((brand) => (
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value={brand}
                  onChange={handleFillter}
                  className="size-4"
                  name="brand"
                  id={brand}
                  checked={fillter.brand.includes(brand)}
                />
                <label className="text-#5A6D57" htmlFor={brand}>
                  {brand}
                </label>
              </li>
            ))}
          </ul>
        </details>
        <details className="col-span-2">
          <summary className="border-2 border-#748C70 font-bold text-#5A6D57 px-4 py-2">
            Giá
          </summary>
          <ul className="dropdown-content border-2 border-t-0 border-#748C70 p-4 flex flex-col gap-4">
            <input
              type="Number"
              name="min"
              placeholder="Giá tối thiểu"
              onChange={handleFillter}
              value={fillter.price.min}
              className="border-2 border-#5A6D57 px-2 text-#5A6D57 font-semibold py-2"
            />
            <input
              type="Number"
              onChange={handleFillter}
              name="max"
              placeholder="Giá tối đa"
              value={fillter.price.max}
              className="border-2 border-#5A6D57 px-2 text-#5A6D57 font-semibold py-2"
            />
          </ul>
        </details>
        <details className="col-span-2">
          <summary className="border-2 border-#748C70 font-bold text-#5A6D57 px-4 py-2">
            Danh mục
          </summary>
          <ul className="dropdown-content border-2 border-t-0 border-#748C70 p-4 flex flex-col gap-4 overflow-y-scroll h-60">
            {["Adidas", "Puma", "Nikke", "Nikke", "Nikke", "Nikke", "Nikke"].map((brand) => (
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value={brand}
                  onChange={handleFillter}
                  className="size-4"
                  name="brand"
                  id={brand}
                  checked={fillter.brand.includes(brand)}
                />
                <label className="text-#5A6D57" htmlFor={brand}>
                  {brand}
                </label>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </div>
  );
};

export default Fillter;
