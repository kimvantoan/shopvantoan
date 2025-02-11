import React from "react";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import formatDate from "@/utils/FormatDate";
import formatTime from "@/utils/FormatTime";
import { Separator } from "@/components/ui/separator";
import formatPrice from "@/utils/FormatPrice";
import { ScrollArea } from "@/components/ui/scroll-area"
const OrderDetail = ({ order }) => {
  return (
    <DialogContent className="w-[800px] h-screen">
      <ScrollArea>
      <DialogHeader>
        <DialogTitle>ĐƠN HÀNG: {order._id}</DialogTitle>
        <DialogDescription>
          <p>
            Đặt lúc - {formatDate(order.createdAt)},{" "}
            {formatTime(order.createdAt)}
          </p>
        </DialogDescription>
      </DialogHeader>
      <div className="bg-gray-50 w-fit">
        <p className="bg-red-100 p-2">Địa chỉ nhận hàng</p>
        <div className="p-2 text-sm space-y-2">
          <p className="font-semibold">Tên: {order.shippingAddress.name}</p>
          <p>Sđt: {order.shippingAddress.phone}</p>
          <p>Địa chỉ: {`${order.shippingAddress.detail}, ${order.shippingAddress.commune}, ${order.shippingAddress.district}, ${order.shippingAddress.city}`}</p>
        </div>
      </div>
      <div className="bg-gray-50 flex my-3">
        <div className="flex-1 text-center">
          <p className="p-2 bg-red-100">Phương thức thanh toán</p>
          <p className="">{order.paymentMethod}</p>
        </div>
        <Separator orientation="vertical" />
        <div className="flex-1 text-center">
          <p className="p-2 bg-red-100">Trạng thái thanh toán</p>
          <p>
            {order.payment ? "Đã thanh toán" : "Chưa thanh toán"}
            {order.payment}
          </p>
        </div>
      </div>

      <div className="border-8 border-red-100 p-2">
        <h2>CHI TIẾT ĐƠN HÀNG</h2>
        <Separator />
        <div className="grid grid-cols-8 place-items-center mt-5 pb-2">
          <p className="col-span-3">Sản phẩm</p>
          <p className="col-span-3">Mã sản phẩm</p>
          <p>Đơn giá</p>
          <p>Thành tiền</p>
        </div>
        <Separator />
        {order.products.map((product) => (
          <div className="grid grid-cols-8 place-items-center text-sm text-gray-700 py-2  border-b">
            <div className="col-span-3 flex gap-1 place-self-start">
              <img
                src={product.productId.images[0].url}
                className="size-14"
                alt=""
              />
              <div>
                <p>{`${product.productId.name} x${product.quantity}`}</p>
                <p>
                  {product.size}/{product.color}
                </p>
              </div>
            </div>
            <p className="col-span-3">{product.productId._id}</p>
            <p>{formatPrice(product.productId.price)}</p>
            <p>{formatPrice(product.quantity * product.productId.price)}</p>
          </div>
        ))}
        <div className="flex justify-between mt-2">
          <div className="space-y-3">
            <p>Giá sản phẩm</p>
            <p>Phí giao hàng</p>
            <p>Tổng tiền</p>
          </div>
          <div className="space-y-3">
            <p>{formatPrice(order.totalPrice)}</p>
            <p>Free</p>
            <p>{formatPrice(order.totalPrice)}</p>
          </div>
        </div>
      </div>
      <DialogFooter className="sm:justify-start mt-3">
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Đóng
          </Button>
        </DialogClose>
      </DialogFooter>
      </ScrollArea>
    </DialogContent>
  );
};

export default OrderDetail;
