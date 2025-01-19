import React from "react";
import InforDelivery from "./inforDelivery";
import CheckoutSummary from "./CheckoutSummary";
import { Separator } from "@/components/ui/separator";

const Checkout = () => {
  return (
    <div className="flex h-screen">
      <InforDelivery />
      <Separator orientation="vertical" />
      <CheckoutSummary />
    </div>
  );
};

export default Checkout;
