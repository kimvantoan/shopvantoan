import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart, CiUser } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { Button } from "./ui/button";
import { IoCameraReverseOutline } from "react-icons/io5";
const SideBar = () => {
  const account = [
    {
      title: "Đơn hàng",
      icon: <IoCartOutline />,
      path: "/orders",
    },
    {
      title: "Yêu thích",
      icon: <CiHeart />,
      path: "/wishlist",
    },
    {
      title: "Địa chỉ",
      icon: <LiaShippingFastSolid />,
      path: "/address",
    },
    {
      title: "Tài khoản",
      icon: <CiUser />,
      path: "/account",
    },
  ];
  return (
    <div className="flex flex-col gap-2 border-r-2 pr-10 ">
      <div className="self-center relative">
        <img
          src="https://avatar.iran.liara.run/public"
          className="size-20 rounded-full"
          alt=""
        />
        <i className="absolute flex items-center justify-center bottom-0 right-0 cursor-pointer border-2 border-white text-white p-1  rounded-full  bg-black">
          <IoCameraReverseOutline  className="size-4"/>
        </i>
      </div>
      {account.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            (isActive
              ? "text-black bg-gray-100  rounded-lg "
              : "text-gray-500") +
            "font-medium flex items-center gap-2 text-sm py-2 pr-10 pl-3"
          }
        >
          {item.icon}
          {item.title}
        </NavLink>
      ))}
      <Button variant="ghost" className="text-red-500 pr-14">
        <IoIosLogOut /> Đăng xuất
      </Button>
    </div>
  );
};

export default SideBar;
