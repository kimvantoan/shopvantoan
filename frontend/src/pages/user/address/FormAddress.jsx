import React, { useEffect, useState } from "react";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAddressStore } from "@/stores/addressStore";
import { LoadingButton } from "@/components/ui/loading-button";
import { toast } from "sonner";
const FormAddress = ({ address }) => {
  const { createAddress, updateAddress, action, loading } = useAddressStore();
  const [data, setData] = useState({
    name: "",
    phone: "",
    city: "",
    district: "",
    commune: "",
    detail: "",
  });
  useEffect(() => {
    if (action === "edit") {
      setData(address);
    }
  }, [action]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (action === "edit") {
      await updateAddress(address._id, data);
      toast.success("Sửa địa chỉ thành công");
    } else {
      await createAddress(data);
      toast.success("Thêm địa chỉ thành công");
    }
  };
  return (
    <DialogContent className="w-1/2">
      <DialogHeader>
        <DialogTitle>
          {action === "edit" ? "Sửa địa chỉ" : "Thêm địa chỉ"}
        </DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 py-4">
        <div className="grid gap-2">
          <Label htmlFor="name" className="">
            Tên người nhận
          </Label>
          <Input
            id="name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            type="text"
            required
            value={data?.name}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="tel" className="">
            Số điện thoại
          </Label>
          <Input
            id="tel"
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            type="text"
            required
            value={data?.phone}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="city" className="">
            Thành phố
          </Label>
          <Input
            id="city"
            onChange={(e) => setData({ ...data, city: e.target.value })}
            type="text"
            required
            value={data?.city}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="district" className="">
            Quận, huyện
          </Label>
          <Input
            id="district"
            onChange={(e) => setData({ ...data, district: e.target.value })}
            type="text"
            required
            value={data?.district}
          />
        </div>
        <div className="grid col-span-2 gap-2">
          <Label htmlFor="commune" className="">
            Xã
          </Label>
          <Input
            id="commune"
            onChange={(e) => setData({ ...data, commune: e.target.value })}
            type="text"
            required
            value={data?.commune}
          />
        </div>
        <div className="grid col-span-2 gap-2">
          <Label htmlFor="detaildetail" className="">
            Chi tiết điểm giao hàng
          </Label>
          <Input
            id="detaildetail"
            onChange={(e) => setData({ ...data, detail: e.target.value })}
            type="text"
            required
            value={data?.detail}
          />
        </div>
        <DialogFooter className="sm:justify-start">
          {loading ? (
            <LoadingButton loading></LoadingButton>
          ) : (
            <Button type="submit">Lưu</Button>
          )}
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default FormAddress;
