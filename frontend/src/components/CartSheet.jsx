import React from "react";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import hero from "@/assets/hero.png";
import formatPrice from "@/utils/FormatPrice";
import { Button } from "./ui/button";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";
const CartSheet = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Bạn có 3 sản phẩm trong giỏ hàng</SheetTitle>
        <div className="flex gap-3 py-5 border-b-2">
          <div className="size-20 bg-gray-100 rounded-lg overflow-hidden relative">
            <img src={hero} alt="" className="h-full mx-auto object-cover" />
          </div>
          <div className="w-full flex justify-between items-end gap-3">
            <div className="flex flex-col text-sm mb-2">
              <p className="col-span-3 break-words">
                Raw Black T-ShirtT
              </p>
              <p>
                Màu sắc: <span>xanh</span>
              </p>
              <p>
                Kích thước: <span>XL</span>
              </p>
              <p className="font-bold">1x{formatPrice(30000)}</p>
            </div>
            <FaRegTrashCan className="text-red-500 cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between font-bold">
            <p>Tổng tiền:</p>
            <p>{formatPrice(30000)}</p>
          </div>
          <Link to={"/cart"}>
            <Button className="w-full">Giỏ hàng</Button>
          </Link>
          <Link to="/checkout">
            <Button variant="outline" className="w-full">
              Mua ngay
            </Button>
          </Link>
        </div>
      </SheetHeader>
    </SheetContent>
  );
};

export default CartSheet;
