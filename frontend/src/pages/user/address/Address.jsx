import React from "react";
import PageTitle from "@/components/PageTitle";
import LayoutProfile from "@/layouts/userLayout/LayoutProfile";
import { Button } from "@/components/ui/button";
import AddressItem from "./AddressItem";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import FormAddress from "./FormAddress";
const Address = () => {
  const breadcrumbData = [
    { label: "Trang chủ", href: "/" },
    { label: "Địa chỉ giao hàng", href: "/address" },
  ];
  return (
    <div>
      <PageTitle pagetitle="Đơn hàng" crumb={breadcrumbData} />
      <LayoutProfile>
        <div className="flex justify-between">
          <h2 className="mb-5 font-semibold">Địa chỉ giao hàng</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="link">Thêm địa chỉ</Button>
            </DialogTrigger>
            <FormAddress />
          </Dialog>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <AddressItem />
          <AddressItem />
          <AddressItem />
          <AddressItem />
        </div>
      </LayoutProfile>
    </div>
  );
};

export default Address;
