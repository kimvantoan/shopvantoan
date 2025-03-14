import React from "react";
import logo from "../../assets/Logo.jpg";
import { Link, NavLink } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
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
import { Badge } from "@mui/material";
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
    <header className="px-40 py-2 flex justify-between items-center fixed top-0 right-0 left-0 z-20 bg-white border-b shadow">
      <img src={logo} alt="" />
      <ul className="flex items-center gap-10 font-medium text-sm">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "" : "text-gray-500")}
          >
            TRANG CHỦ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? "" : "text-gray-500")}
          >
            SẢN PHẨM
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "" : "text-gray-500")}
          >
            LIÊN HỆ
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-3 items-center">
        <Link to={"/search"}>
          <SearchOutlinedIcon cursor={"pointer"} />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <AccountCircleOutlinedIcon cursor={"pointer"} />
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
        <Link to={"/cart"} >
          <Badge badgeContent={cart.length} color="success">
            <ShoppingBagOutlinedIcon cursor={"pointer"} />
          </Badge>
        </Link>
      </div>
    </header>
  );
};

export default HeaderUser;
