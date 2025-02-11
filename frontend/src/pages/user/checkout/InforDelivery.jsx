import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useAddressStore } from "@/stores/addressStore";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BsBank } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import { useOrderStore } from "@/stores/orderStore";
import { LoadingButton } from "@/components/ui/loading-button";
import { toast } from "sonner";
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
        <Select
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
        </Select>
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
          {/* <Separator />
          <div className="flex p-4 items-center space-x-2">
            <RadioGroupItem value="Chuyển khoản qua ngân hàng" id="option-2" />
            <Label htmlFor="option-2" className="flex items-center gap-2">
              <BsBank className="size-7 text-yellow-500" /> Chuyển khoản qua
              ngân hàng
            </Label>
          </div> */}
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
