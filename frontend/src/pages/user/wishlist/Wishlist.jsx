import PageTitle from "@/components/PageTitle";
import LayoutProfile from "@/layouts/userLayout/LayoutProfile";
import React from "react";
import WishItem from "./WishItem";

const Wishlist = () => {
  const breadcrumbData = [
    { label: "Trang chủ", href: "/" },
    { label: "Yêu thích", href: "/wishlist" },
  ];
  return (
    <div>
      <PageTitle pagetitle="Wishlist" crumb={breadcrumbData} />
      <LayoutProfile>
        <h2 className="mb-5 font-semibold">Yêu thích</h2>

        <div className="flex flex-col gap-3">
          <WishItem />
          <WishItem />
          <WishItem />
        </div>
      </LayoutProfile>
    </div>
  );
};

export default Wishlist;
