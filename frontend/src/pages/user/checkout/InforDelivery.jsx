
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useAddressStore } from "@/stores/addressStore";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BsCashCoin } from "react-icons/bs";
import { useOrderStore } from "@/stores/orderStore";
import { LoadingButton } from "@/components/ui/loading-button";
import { useCartStore } from "@/stores/cartStore";
const InforDelivery = () => {
  const { addresses, getAllAddress } = useAddressStore();
  const { createOrder, loading } = useOrderStore();
  const { totalPrice } = useCartStore();
  useEffect(() => {
    getAllAddress();
  }, []);
  const [data, setData] = useState({
    shippingAddress: null,
    paymentMethod: "",
    totalPrice: totalPrice,
  });
  return (
    <div className="flex-1 flex flex-col gap-5 px-32">
      <div>
        <h2 className="mb-2 font-semibold text-xl">Địa chỉ giao hàng</h2>
        {/* <Select
          onValueChange={(value) =>
            setData({ ...data, shippingAddress: value })
          }
        >
          <SelectTrigger className="h-32">
            <SelectValue placeholder="Chọn địa chỉ" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {addresses?.map((address) => (
                <>
                  <SelectItem value={address} key={address}>
                    <p className="font-bold">{address.name}</p>
                    <p>{address.phone}</p>
                    <p>{`${address.detail}, ${address.commune}, ${address.district}, ${address.city}`}</p>
                  </SelectItem>
                  <Separator />
                </>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select> */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Địa chỉ</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onChange={(e) => setData({ ...data, shippingAddress: e.target.value })}
          >
            {addresses?.map((address) => (
              <MenuItem value={address} key={address._id}>
                <p className="font-bold">{address.name}</p>
                <p>{address.phone}</p>
                <p>{`${address.detail}, ${address.commune}, ${address.district}, ${address.city}`}</p>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <h2 className="mb-2 font-semibold text-xl">Phương thức thanh toán</h2>
        <RadioGroup
          onValueChange={(value) => setData({ ...data, paymentMethod: value })}
          className="border"
          value={data.paymentMethod}
          defaultValue="Thanh toán khi nhận hàng"
        >
          <div className="flex p-4 items-center space-x-2">
            <RadioGroupItem value="Thanh toán khi nhận hàng" id="option-one" />
            <Label htmlFor="option-one" className="flex items-center gap-2">
              <BsCashCoin className="size-7 text-green-800" /> Thanh toán khi
              nhận hàng
            </Label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex justify-between mt-5">
        <Link to="/cart">Giỏ hàng</Link>
        {loading ? (
          <LoadingButton loading>Hoàn tất đơn hàng</LoadingButton>
        ) : (
          <Button
            onClick={() => {
              createOrder(data);
            }}
            disabled={!data.shippingAddress || !data.paymentMethod}
            className="w-fit"
          >
            Hoàn tất đơn hàng
          </Button>
        )}
      </div>
    </div>
  );
};

export default InforDelivery;
