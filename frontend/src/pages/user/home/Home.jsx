import React, { useEffect } from "react";
import Hero from "./Hero";
import NewArrivals from "./NewArrivals";
import Brand from "./Brand";
import { useProductStore } from "@/stores/productStore";

const Home = () => {
  const { getProducts } = useProductStore();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Hero />
      <div className="px-44 flex flex-col gap-10">
        <Brand />
        <NewArrivals />
      </div>
    </>
  );
};

export default Home;
