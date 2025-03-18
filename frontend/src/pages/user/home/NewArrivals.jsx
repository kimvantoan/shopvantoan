import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CardProduct from "@/components/CardProduct";
import { useProductStore } from "@/stores/productStore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Scrollbar } from "swiper/modules";
import { KeyboardArrowRight } from "@mui/icons-material";
const NewArrivals = () => {
  const { getProducts, products } = useProductStore();
  useEffect(() => {
    getProducts({ sort: "newest", limit: 10 });
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center ">
          <h2 className="text-2xl font-bold">Sản phẩm mới</h2>
          <Link to="/shop" className="text-sm font-medium flex items-center">
            Xem thêm<KeyboardArrowRight className="w-4 h-4" />
          </Link>
        </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
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
            spaceBetween: 40,
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
