import React from "react";

import Product from "./product";
import Detail from "./Detail";
import Similar from "./Similar";
const ProductDetail = () => {
  return (
    <div className="px-44 flex flex-col gap-16">
      <Product />
      <Detail />
      <Similar/>
    </div>
  );
};

export default ProductDetail;
