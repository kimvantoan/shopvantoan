import PageTitle from "@/components/PageTitle";
import LayoutProfile from "@/layouts/userLayout/LayoutProfile";
import React from "react";
import OrderItem from "./OrderItem";

const Order = () => {
  const breadcrumbData = [
    { label: "Trang chủ", href: "/" },
    { label: "Đơn hàng", href: "/orders" },
  ];
  return (
    <div>
      <PageTitle pagetitle="Đơn hàng" crumb={breadcrumbData} />
      <LayoutProfile>
        <h2 className="mb-5 font-semibold">Đơn hàng</h2>
        <div className="flex flex-col gap-3">
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>
      </LayoutProfile>
    </div>
  );
};

export default Order;
