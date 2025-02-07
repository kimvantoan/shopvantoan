import React, { useEffect } from "react";
import formatPrice from "@/utils/FormatPrice";
import { Button } from "@/components/ui/button";
import { useWishStore } from "@/stores/wishStore";
import { Link } from "react-router-dom";

const WishItem = ({ wish }) => {
  const { removeWish } = useWishStore();

  return (
    <div className="grid grid-cols-6 items-center">
      <div className="size-20 bg-gray-100 rounded-lg overflow-hidden">
        <img src={wish.images[0].url} className="overflow-cover" alt="" />
      </div>
      <div className="col-span-2 space-y-3">
        <p className="font-semibold">{wish.name}</p>
        <p className="text-gray-500 text-sm">Brand</p>
      </div>
      <p className="place-self-center">{formatPrice(wish.price)}</p>
      <Link className="place-self-center" to={`/product/${wish._id}`}>Chi tiết</Link>
      <Button
        onClick={() => removeWish(wish._id)}
        variant="link"
        className="text-red-500"
      >
        Xóa
      </Button>
    </div>
  );
};

export default WishItem;
