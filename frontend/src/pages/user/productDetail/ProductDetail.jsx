import React from "react";

import Detail from "./Detail";
import Similar from "./Similar";
import Carousel_Product from "./Carousel_Product";
const ProductDetail = () => {
  return (
    <div className="px-44 flex flex-col gap-16">
      <Carousel_Product />
      <Detail />
      <Similar/>
    </div>
  );
};

export default ProductDetail;
