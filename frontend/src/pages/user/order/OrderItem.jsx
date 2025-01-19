import React from "react";
import formatPrice from "@/utils/FormatPrice";
import formatDate from "@/utils/FormatDate";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import OrderDetail from "./OrderDetail";

const OrderItem = ({ order }) => {
  return (
    <div className="group text-sm grid text-center border-b-2 py-4 grid-cols-6 items-center">
      <Dialog >
        <DialogTrigger asChild>
          <p className="col-span-2 group-hover:text-red-500 cursor-pointer">{order._id}</p>
        </DialogTrigger>
        <OrderDetail order={order} />
      </Dialog>
      <p>{formatDate(order.createdAt)}</p>
      <p>{formatPrice(order.totalPrice)}</p>
      <p>{order.paymentMethod}</p>
      <p>{order.status}</p>
    </div>
  );
};

export default OrderItem;
