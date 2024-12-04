import React from "react";
import nike from "../../../assets/nike.png";
const Brand = () => {
  return (
    <>
      <div className="flex gap-4 justify-around mt-20 ">
        <img src={nike} className="size-24 bg-gray-100 rounded-full p-3"/>
        <img src={nike} className="size-24 bg-gray-100 rounded-full p-3"/>
        <img src={nike} className="size-24 bg-gray-100 rounded-full p-3"/>
      </div>
    </>
  );
};

export default Brand;
