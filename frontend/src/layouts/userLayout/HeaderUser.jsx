import React from "react";
import logo from "../../assets/Logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { LiaShippingFastSolid } from "react-icons/lia";
import ShopNav from "@/components/ShopNav";
const HeaderUser = () => {
  const account = [
    {
      name: "Đơn hàng",
      icon: <IoCartOutline />,
      path: "/orders",
    },
    {
      name: "Sản phẩm yêu thích",
      icon: <CiHeart />,
      path: "/wishlist",
    },
    {
      name: "Địa chỉ",
      icon: <LiaShippingFastSolid />,
      path: "/address",
    },
    {
      name: "Tài khoản",
      icon: <CiUser />,
      path: "/account",
    },
  ];
  return (
    <header className="px-40 py-5 flex justify-between items-center border-b">
      <img src={logo} alt="" />
      <ul className="flex items-center gap-10 text-lg">
        <li>
          <Link to="/" className={""}>
            Trang chủ
          </Link>
        </li>
        <li>
          
            <ShopNav />
        </li>
        <li>
          <Link to="/" className={""}>
            Liên hệ
          </Link>
        </li>
      </ul>

      <div className="flex gap-6 items-center">
        <label className="input input-bordered flex items-center">
          <input type="text" placeholder="Tìm kiếm" />
          <IoMdSearch size={26} className="text-gray-500" cursor={"pointer"} />
        </label>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <FaRegUser size={23} className="text-gray-500" cursor={"pointer"} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="-translate-x-1/3">
            <DropdownMenuLabel>Tài khoản của tôi</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {account.map((item) => (
              <Link to={item.path}>
                <DropdownMenuItem>
                  {item.icon} {item.name}
                </DropdownMenuItem>
              </Link>
            ))}
            <DropdownMenuItem className="text-red-500">
              <IoIosLogOut /> Đăng xuất
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link to={"/cart"} className="indicator">
          <span className="indicator-item badge  bg-gray-200 font-bold text-gray-500">
            9
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
