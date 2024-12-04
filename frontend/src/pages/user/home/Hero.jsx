import React from "react";
import { Link } from "react-router-dom";
import hero from "../../../assets/hero.png";
import { IoMdArrowRoundForward } from "react-icons/io";
const Hero = () => {
  return (
    <div className="flex justify-evenly items-center bg-gray-100 shadow h-96">
      <div className="flex flex-col gap-5">
        <h1 className="font-semibold text-3xl">Hàng mới về trực tuyến</h1>
        <p className="text-sm">Khám phá bộ sưu tập mới nhất của chúng tôi ngay hôm nay.</p>
        <div className="bg-primary cursor-pointer px-10 py-3 w-fit flex items-center gap-3 text-white">
          <Link to={"/shop"}>Mua ngay </Link><IoMdArrowRoundForward />
        </div>
      </div>
      <div className="h-full">
        <img src={hero} alt="" className="cover h-full" />
      </div>
    </div>
  );
};

export default Hero;
