import React from "react";
import Hero from "./Hero";
import Category from "./category";
import NewArrivals from "./NewArrivals";
import Brand from "./Brand";

const Home = () => {
  return (
    <div className=" flex flex-col gap-20 bg-gray-100">
      <Hero />
      <div className="px-24 flex flex-col gap-10">
        <Brand />
        <NewArrivals />
        <Category />
      </div>
    </div>
  );
};

export default Home;
