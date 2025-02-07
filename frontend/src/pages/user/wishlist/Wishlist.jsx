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

        <div className="flex flex-col gap-3">
          {wishes.map((wish) => (
            <WishItem key={wish._id} wish={wish.productId} />
          ))}
        </div>
      </LayoutProfile>
    </div>
  );
};

export default Wishlist;
