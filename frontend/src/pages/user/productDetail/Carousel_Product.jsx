import formatPrice from "@/utils/FormatPrice";
import React, { useState } from "react";

import { Rating, Button } from "@mui/material";
import { ShoppingCart, Favorite } from "@mui/icons-material";

import { useProductStore } from "@/stores/productStore";
import { useCartStore } from "@/stores/cartStore";
import { useAuthStore } from "@/stores/authStore";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { useWishStore } from "@/stores/wishStore";
import { useReviewStore } from "@/stores/reviewStore";
import { percentDis } from "@/utils/Percentdis";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
const Carousel_Product = () => {
  const { product } = useProductStore();
  const { user } = useAuthStore();
  const { addToCart } = useCartStore();
  const { addWish, wishes } = useWishStore();
  const { reviews } = useReviewStore();
  const { id } = useParams();
  const [data, setdata] = useState({
    productId: id,
    color: "",
    quantity: 1,
    size: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const addToCartHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!user) {
      toast.info("Vui lòng đăng nhập", {
        action: {
          label: "Đăng nhập",
          onClick: () => navigate("/login"),
        },
      });
      setLoading(false);
    } else {
      await addToCart(data);
      setLoading(false);
    }
  };
  const addWishHandler = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.info("Vui lòng đăng nhập", {
        action: {
          label: "Đăng nhập",
          onClick: () => navigate("/login"),
        },
      });
    } else {
      await addWish({ productId: id });
    }
  };
  const isWish = wishes.some((item) => item.productId._id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4"
      style={{ userSelect: "none" }}
    >
      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
          <img
            src={product?.images[selectedImage].url || "/placeholder.svg"}
            alt="Tray Table"
            width={600}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {product?.images.map((image, index) => (
            <button
              key={index}
              className={`border ${
                selectedImage === index ? "border-black" : "border-gray-200"
              } rounded-md overflow-hidden`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url || "/placeholder.svg"}
                alt={`Tray Table thumbnail ${index + 1}`}
                width={100}
                height={100}
                className="w-full h-auto object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center">
            <Rating value={product?.avgRate} precision={0.5} readOnly />
            <span className="ml-2 text-sm text-gray-500">
              ({reviews?.length} Đánh giá)
            </span>
          </div>
          <h1 className="text-3xl font-bold">{product?.name}</h1>
          <p className="text-gray-600">
            {product?.description.substring(0, 100)}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">
            {formatPrice(product?.price)}
          </span>
          <span className="text-gray-500 line-through">
            {formatPrice(product?.oldPrice)}
          </span>
          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
            {-percentDis(product?.oldPrice, product?.price)}%
          </span>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium mb-2">ID: {product?._id}</p>
            <p className="text-sm text-gray-600">
              Ước tính vận chuyển: 3-5 days
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Màu sắc</label>
            <div className="flex space-x-3">
              <ToggleButtonGroup
                value={data.color}
                exclusive
                onChange={(e, color) => setdata({ ...data, color })}
                aria-label="text alignment"
              >
                {product?.colors.map((color) => (
                  <ToggleButton key={color} value={color} aria-label={color}>
                    {color}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Kích thước</label>
            <div className="flex space-x-3">
              <ToggleButtonGroup
                value={data.size}
                exclusive
                onChange={(e, size) => setdata({ ...data, size })}
                aria-label="text alignment"
              >
                {product?.sizes.map((size) => (
                  <ToggleButton key={size} value={size} aria-label={size}>
                    {size}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/3">
              <label className="block text-sm font-medium mb-2">Số lượng</label>
              <div className="flex border border-gray-300 rounded-md">
                <button
                  className="px-3 py-2 border-r border-gray-300"
                  onClick={() =>
                    data.quantity > 1 &&
                    setdata({ ...data, quantity: data.quantity - 1 })
                  }
                >
                  -
                </button>
                <input
                  min="1"
                  value={data.quantity}
                  className="w-full text-center py-2 focus:outline-none"
                />
                <button
                  className="px-3 py-2 border-l border-gray-300"
                  onClick={() =>
                    setdata({ ...data, quantity: data.quantity + 1 })
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button
              onClick={addWishHandler}
              variant="outlined"
              fullWidth
              startIcon={<Favorite />}
              className={`${
                isWish
                  ? "text-red-500 border-red-500"
                  : "border-gray-300 text-gray-700"
              } py-3 hover:bg-gray-50`}
            >
              Yêu thích
            </Button>
            <Button
              onClick={addToCartHandler}
              variant="contained"
              color="primary"
              fullWidth
              startIcon={<ShoppingCart />}
              className="py-3 bg-black hover:bg-gray-800 text-white"
            >
              Thêm giỏ hàng
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel_Product;
