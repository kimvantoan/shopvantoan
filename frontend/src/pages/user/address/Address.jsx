import React, { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import LayoutProfile from "@/layouts/userLayout/LayoutProfile";
import { Button } from "@/components/ui/button";
import AddressItem from "./AddressItem";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import FormAddress from "./FormAddress";
import { useAddressStore } from "@/stores/addressStore";
const Address = () => {
  const breadcrumbData = [
    { label: "Trang chủ", href: "/" },
    { label: "Địa chỉ giao hàng", href: "/address" },
  ];
  const { getAllAddress, addresses, handleAction } = useAddressStore();
  useEffect(() => {
    getAllAddress();
  }, []);
  return (
    <div>
      <PageTitle pagetitle="Địa chỉ" crumb={breadcrumbData} />
      <LayoutProfile>
        <Dialog>
          <DialogTrigger asChild>
            <Button onClick={() => handleAction("add")} variant="link">
              Thêm địa chỉ
            </Button>
          </DialogTrigger>
          <FormAddress />
        </Dialog>
        {addresses.length > 0 ? (
          <div className="grid grid-cols-2 gap-3">
            {addresses.map((address) => (
              <AddressItem key={address.id} address={address} />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <img
              src="/address-not-fould.webp"
              className="mx-auto size-[350px]"
              alt=""
            />
            <h2 className="text-xl text-red-500">
              Hãy thêm địa chỉ để mua hàng
            </h2>
          </div>
        )}
      </LayoutProfile>
    </div>
  );
};

export default Address;
