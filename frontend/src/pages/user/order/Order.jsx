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
  const { orders, getOrderUser } = useOrderStore();
  useEffect(() => {
    getOrderUser();
  }, [orders]);
  return (
    <div>
      <PageTitle pagetitle="Đơn hàng" crumb={breadcrumbData} />
      <LayoutProfile>
        {orders.length > 0 ? (
          <>
            <div className="grid border-b text-gray-600  py-3 grid-cols-5 ">
              <p className="col-span-2">Mã đơn hàng</p>
              <p>Ngày đặt</p>
              <p>Thành tiền</p>
              <p>Vận chuyển</p>
            </div>
            {orders.map((order) => (
              <OrderItem key={order.id} order={order} />
            ))}
          </>
        ) : (
          <div className="text-center">
            <img
              src="/search-box.jpg"
              className="mx-auto size-[350px]"
              alt=""
            />
            <h2 className="text-xl text-red-500">Bạn chưa có đơn hàng nào 😥</h2>
          </div>
        )}
      </LayoutProfile>
    </div>
  );
};

export default Order;
