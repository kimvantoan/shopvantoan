import Timeline from "@/components/Timeline";
import React from "react";
import CheckoutSummary from "./CheckoutSummary";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const step = "payment";
   const navigate = useNavigate();
    const handleNext = () => navigate("/checkout/review");
  return (
      <div className="px-40 my-5">
        <h1 className="font-bold text-4xl mb-5">Phương thức thanh toán</h1>
        <div className="flex justify-between gap-20">
          <div className="flex flex-col gap-5 w-full">
            <Timeline step={step} />
            <h2 className="font-bold">Chọn phương thức thanh toán</h2>
            <RadioGroup defaultValue="r1">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="r1" id="radio-01-r1" />
                <Label htmlFor="radio-01-r1">Thanh toán khi nhận hàng</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="r2" id="radio-01-r2" />
                <Label htmlFor="radio-01-r2">Option 2</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="r3" id="radio-01-r3" />
                <Label htmlFor="radio-01-r3">Option 3</Label>
              </div>
            </RadioGroup>
            <Button  onClick={handleNext} className="mt-5 w-fit">Tiếp tục</Button>
          </div>
          <CheckoutSummary />
        </div>
      </div>
  );
};

export default Payment;
