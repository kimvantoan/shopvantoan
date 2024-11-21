import React from "react";
import nike from "../../../assets/nike.png";
const Brand = () => {
  return (
    <>
      <h2 className="font-semibold text-3xl text-center ">Thương hiệu</h2>
      <div className="flex gap-4 justify-around">
        <img src={nike} className="size-36"/>
        <img src={nike} className="size-36"/>
        <img src={nike} className="size-36"/>
      </div>
    </>
  );
};

export default Brand;
