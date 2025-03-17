import React from "react";

import { LocalShipping, SupportAgent, CreditCard } from "@mui/icons-material";
const Values = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full">
              <LocalShipping className="text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Free Shipping</h3>
              <p className="text-sm text-gray-500">On all orders over $50</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full">
              <SupportAgent className="text-primary" />
            </div>
            <div>
              <h3 className="font-medium">24/7 Support</h3>
              <p className="text-sm text-gray-500">Get help when you need it</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full">
              <CreditCard className="text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Secure Payment</h3>
              <p className="text-sm text-gray-500">100% secure transactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
