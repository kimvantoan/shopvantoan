import PageTitle from "@/components/PageTitle";
import LayoutProfile from "@/layouts/userLayout/LayoutProfile";
import React, { useEffect } from "react";
import WishItem from "./WishItem";
import { useWishStore } from "@/stores/wishStore";

const Wishlist = () => {
  const breadcrumbData = [
    { label: "Trang chủ", href: "/" },
    { label: "Yêu thích", href: "/wishlist" },
  ];
  const { wishes, getWish } = useWishStore();
  useEffect(() => {
    getWish();
  }, []);
  return (
    <div>
      <PageTitle pagetitle="Wishlist" crumb={breadcrumbData} />
      <LayoutProfile>
        <h2 className="mb-5 font-semibold">Yêu thích</h2>
        {wishes.length > 0 ? (
          <div className="flex flex-col gap-3">
            {wishes.map((wish) => (
              <WishItem key={wish._id} wish={wish.productId} />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-[50px]">💔</h2>
            <h2 className="text-xl text-red-500">
              Bạn chưa có sản phẩm yêu thích nào 😥
            </h2>
          </div>
        )}
      </LayoutProfile>
    </div>
  );
};

export default Wishlist;
