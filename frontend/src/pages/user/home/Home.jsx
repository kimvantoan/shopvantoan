import React, { useEffect } from "react";
import NewArrivals from "./NewArrivals";
import { useCartStore } from "@/stores/cartStore";
import Slide from "./Slide";
import { CategoryCarousel } from "./Category";

const Home = () => {
  const { getCart } = useCartStore();
  useEffect(() => {
    getCart()
  }, []);
  return (
    <>
      <Slide />
      <div className="px-44 flex flex-col gap-10">
        <CategoryCarousel/>
        <NewArrivals />
      </div>
    </>
  );
};

export default Home;
