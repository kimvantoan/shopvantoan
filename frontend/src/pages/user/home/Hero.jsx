import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
      <div className="flex w-full h-screen items-center">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="w-1/2 h-full rounded-lg shadow-2xl"
        />
        <div className="bg-gray-600 px-10 h-full text-white flex flex-col justify-center">
          <h1 className="text-5xl font-bold ">Box Office News!</h1>
          <p className="my-10 w-2/3">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to={"/shop"} className="btn btn-primary w-fit">Mua ngay</Link>
        </div>
      </div>
  );
};

export default Hero;
