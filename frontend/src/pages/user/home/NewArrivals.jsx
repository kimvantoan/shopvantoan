import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CardProduct from "@/components/CardProduct";
import { useProductStore } from "@/stores/productStore";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import {Scrollbar} from 'swiper/modules';
const NewArrivals = () => {
  const { getProducts, products } = useProductStore();
  useEffect(() => {
    getProducts({ sort: "newest", limit: 10 });
  }, []);
  return (
    <div>
      <h2 className="font-semibold text-3xl text-center">Sản phẩm mới</h2>
      <p className="text-end text-lg">
        <Link to={"/shop"} className="link">
          Xem thêm
        </Link>
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        scrollbar={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Scrollbar]}
        className="mySwiper "
      >
        {products?.map((product) => (
          <SwiperSlide>
            <CardProduct key={product._id} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewArrivals;
