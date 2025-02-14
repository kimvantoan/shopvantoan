import React from "react";
import { NavLink } from "react-router-dom";
import { LiaShippingFastSolid } from "react-icons/lia";
import { Button } from "./ui/button";
import { FaHandSparkles } from "react-icons/fa";
import { AiOutlineInbox } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useAuthStore } from "@/stores/authStore";
const SideBar = () => {
  const account = [
    {
      title: "Đơn hàng",
      icon: <AiOutlineInbox size={22} />,
      path: "/orders",
    },
    {
      title: "Yêu thích",
      icon: <FaRegHeart size={20} />,
      path: "/wishlist",
    },
    {
      title: "Địa chỉ",
      icon: <LiaShippingFastSolid size={20} />,
      path: "/address",
    },
    {
      title: "Tài khoản",
      icon: <FaRegUser size={19} />,
      path: "/account",
    },
  ];
  const { user, logout } = useAuthStore();
  return (
    <div className="flex flex-col border-2 w-[300px] h-fit">
      <div className="flex items-center gap-2 border-b-2 p-2">
        <img src={user?.avatar} className="size-20 rounded-full" alt="" />
        <div className="text-start">
          <p className="flex gap-1 items-center">
            Xin chào <FaHandSparkles className="text-yellow-500" />
          </p>
          <p className="font-semibold">{user?.fullname}</p>
        </div>
      </div>
      {account.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            (isActive ? "text-white bg-black " : "text-gray-500") +
            "font-medium flex items-center gap-2 text-sm p-4"
          }
        >
          {item.icon}
          {item.title}
        </NavLink>
      ))}
      <div>
        <Button
          onClick={logout}
          variant="ghost"
          className="text-red-500 hover:bg-white text-start text-sm p-4"
        >
          <MdLogout size={20} /> Đăng xuất
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
