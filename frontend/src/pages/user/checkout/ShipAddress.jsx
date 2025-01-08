import React from "react";
import AddressItem from "../address/AddressItem";
import Timeline from "@/components/Timeline";
import { Button } from "@/components/ui/button";
import CheckoutSummary from "./CheckoutSummary";
import { useNavigate } from "react-router-dom";

const ShipAddress = () => {
  const step = "address";
  const navigate = useNavigate();
  const handleNext = () => navigate("/checkout/payment");
  return (
    <div className="px-40 my-5" >
      <h1 className="font-bold text-4xl mb-5">Địa chỉ giao hàng</h1>
      <div className="flex justify-between gap-20">
        <div className="flex flex-col gap-5 w-full">
          <Timeline step={step} />
          <h2 className="font-bold">Điểm giao hàng</h2>
          <div className="grid grid-cols-2 gap-3">
            <div htmlFor="address" className="relative">
              <input
                type="radio"
                name="address"
                id="address"
                className="absolute top-5 right-5 h-4 w-4 text-primary accent-slate-950"
              />
              <label htmlFor="address" className="cursor-pointer">
                <AddressItem id="address" />
              </label>
            </div>
            <div htmlFor="address" className="relative">
              <input
                type="radio"
                name="address"
                id="address1"
                required
                className="absolute top-5 right-5 h-4 w-4 text-primary accent-slate-950"
              />
              <label htmlFor="address1" className="cursor-pointer">
                <AddressItem id="address" />
              </label>
            </div>
          </div>
          <Button onClick={handleNext}   className="w-fit">Tiếp tục</Button>
        </div>
        <CheckoutSummary />
      </div>
    </div>
  );
};

export default ShipAddress;
