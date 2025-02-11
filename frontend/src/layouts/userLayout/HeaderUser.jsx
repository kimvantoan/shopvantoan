import React from "react";
import logo from "../../assets/Logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiOutlineInbox } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { LiaShippingFastSolid } from "react-icons/lia";
import { useAuthStore } from "@/stores/authStore";
import { useCartStore } from "@/stores/cartStore";
const HeaderUser = () => {
  const { user, logout } = useAuthStore();
  const { cart } = useCartStore();
  const haveUser = [
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
  const noUser = [
    {
      title: "Đăng nhập",
      path: "/login",
    },
    {
      title: "Đăng ký",
      path: "/signup",
    },
  ];
  return (
    <header className="px-40 py-3 flex justify-between items-center border-b">
      <img src={logo} alt="" />
      <ul className="flex items-center gap-10 font-semibold">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-yellow-600" : "")}
          >
            TRANG CHỦ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? "text-yellow-600" : "")}
          >
            SẢN PHẨM
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-yellow-600" : "")}
          >
            LIÊN HỆ
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-6 items-center">
        <Link to={"/search"}>
          <IoMdSearch size={28} className="text-gray-500" cursor={"pointer"} />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <FaRegUser size={23} className="text-gray-500" cursor={"pointer"} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="-translate-x-1/3">
            <DropdownMenuLabel>Tài khoản của tôi</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {user
              ? haveUser.map((item) => (
                  <Link to={item.path}>
                    <DropdownMenuItem>
                      {item.icon} {item.title}
                    </DropdownMenuItem>
                  </Link>
                ))
              : noUser.map((item) => (
                  <Link to={item.path}>
                    <DropdownMenuItem>{item.title}</DropdownMenuItem>
                  </Link>
                ))}
            {user && (
              <DropdownMenuItem onClick={logout} className="text-red-500">
                <IoIosLogOut /> Đăng xuất
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        <Link to={"/cart"} className="indicator">
          <span className="indicator-item badge bg-red-500 font-bold text-white">
            {cart.length}
          </span>
          <AiOutlineShoppingCart
            className="text-gray-500"
            size={26}
            cursor={"pointer"}
          />
        </Link>
      </div>
    </header>
  );
};

export default HeaderUser;
