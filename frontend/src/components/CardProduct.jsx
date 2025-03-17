import React from "react";
import formatPrice from "@/utils/FormatPrice";
import { useNavigate } from "react-router-dom";
import { Star, StarHalf } from "@mui/icons-material";
import { useWishStore } from "@/stores/wishStore";
import { useAuthStore } from "@/stores/authStore";
const CardProduct = ({ product }) => {
  const navigate = useNavigate();
  const { addWish, wishes } = useWishStore();
  const { user } = useAuthStore();

  const addWishHandler = async (id) => {
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
  const isWish = wishes.some((item) => item.productId === product._id);
  return (
    <div onClick={() => navigate(`/product/${product._id}`)} className="group">
      <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-3">
        <div className="aspect-square h-72 relative">
          <img
            src={product?.images[0].url || "/placeholder.svg"}
            fill
            className="object-contain p-4 size-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute top-2 right-2">
          <button
            onClick={() => addWishHandler(product._id)}
            className={`${
              isWish ? "bg-red-500" : "bg-white"
            } p-1.5 rounded-full shadow-sm`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <h3 className="font-medium">{product?.name}</h3>
      <div className="flex items-center justify-between">
        <p className="font-bold text-primary">{formatPrice(product?.price)}</p>
        <div className="flex items-center">
          {Array.from({ length: Math.floor(product?.avgRate) }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400" />
          ))}
          {product?.avgRate % 1 !== 0 && (
            <StarHalf className="w-4 h-4 text-yellow-400" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
