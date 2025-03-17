import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="container mx-auto py-12 px-4">
    <div className="bg-gray-100 p-8 rounded-lg flex flex-col md:flex-row items-center justify-between">
      <div className="mb-6 md:mb-0">
        <h2 className="text-2xl font-bold uppercase">Mua sắm thả ga</h2>
        <h3 className="text-xl font-bold text-primary uppercase">Không lo về giá!</h3>
        <p className="mt-2 text-gray-600">Mua sắm bộ sưu tập sang trọng giá cả phải chăng của chúng tôi</p>
      </div>
      <Link to="/shop"  className="bg-primary text-white px-6 py-3 rounded-md font-medium">Mua ngay</Link>
    </div>
  </section>
  );
};

export default Banner;
