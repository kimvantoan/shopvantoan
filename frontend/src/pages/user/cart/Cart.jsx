import PageTitle from "@/components/PageTitle";
import React from "react";
import ListCartItem from "./ListCartItem";
import Summary from "./Summary";

const Cart = () => {
  const breadcrumbData = [
    { label: "Trang chủ", href: "/" },
    { label: "Giỏ hàng", href: "/cart" },
  ];
  return (
    <div>
      <PageTitle pagetitle="Giỏ hàng" crumb={breadcrumbData} />
      <div className="flex justify-between px-40 my-10">
        <ListCartItem />
        <Summary />
      </div>
    </div>
  );
};

export default Cart;
