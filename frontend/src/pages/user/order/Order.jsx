import PageTitle from "@/components/PageTitle";
import LayoutProfile from "@/layouts/userLayout/LayoutProfile";
import React, { useEffect } from "react";
import OrderItem from "./OrderItem";
import { useOrderStore } from "@/stores/orderStore";

const Order = () => {
  const breadcrumbData = [
    { label: "Trang chủ", href: "/" },
    { label: "Đơn hàng", href: "/orders" },
  ];
  const {orders,getOrderUser}=useOrderStore();
  useEffect(() => {
    getOrderUser();
  },[orders])
  return (
    <div>
      <PageTitle pagetitle="Đơn hàng" crumb={breadcrumbData} />
      <LayoutProfile>
        <div className="grid font-bold border-b bg-gray-100 py-3 grid-cols-6 text-center">
          <p className="col-span-2">Mã đơn hàng</p>
          <p>Ngày đặt</p>
          <p>Thành tiền</p>
          <p>Phương thức thanh toán</p>
          <p>Vận chuyển</p>
        </div>
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </LayoutProfile>
    </div>
  );
};

export default Order;
