import React, { useEffect } from "react";
import NewArrivals from "./NewArrivals";
import { useCartStore } from "@/stores/cartStore";
import Slide from "./Slide";
import { CategoryCarousel } from "./Categories";
import Values from "./Values";
import Banner from "./Banner";

const Home = () => {
  const { getCart } = useCartStore();
  useEffect(() => {
    getCart()
  }, []);
  return (
    <div className="space-y-10">
      <Slide />
      <div className="px-44 flex flex-col gap-10">
        <CategoryCarousel/>
        <NewArrivals />
        <Values/>
      </div>
        <Banner/>
    </div>
  );
};

export default Home;
