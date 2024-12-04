import React from "react";
import Hero from "./Hero";
import NewArrivals from "./NewArrivals";
import Brand from "./Brand";

const Home = () => {
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
