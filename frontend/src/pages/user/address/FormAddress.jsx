import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const FormAddress = () => {
  return (
    <DialogContent className="sm:max-w-1/2">
      <DialogHeader>
        <DialogTitle>Sửa địa chỉ</DialogTitle>
      </DialogHeader>
      <form className="grid grid-cols-2 gap-4 py-4">
        <div className="grid gap-2">
          <Label htmlFor="name" className="">
            Tên người nhận
          </Label>
          <Input id="name" type="text" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="tel" className="">
            Số điện thoại
          </Label>
          <Input id="tel" type="text"/>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="city" className="">
            Thành phố
          </Label>
          <Input id="city" type="text"/>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="district" className="">
            Quận, huyện
          </Label>
          <Input id="district" type="text"/>
        </div>
        <div className="grid col-span-2 gap-2">
          <Label htmlFor="commune" className="">
            Xã
          </Label>
          <Input id="commune" type="text"/>
        </div>
        <div className="grid col-span-2 gap-2">
          <Label htmlFor="detaildetail" className="">
            Chi tiết điểm giao hàng
          </Label>
          <Input id="detaildetail" type="text"/>
        </div>
      </form>
      <DialogFooter>
        <Button type="submit">Lưu</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default FormAddress;
