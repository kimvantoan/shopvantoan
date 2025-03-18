import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AiOutlineInbox } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { LiaShippingFastSolid } from "react-icons/lia";
import { useAuthStore } from "@/stores/authStore";
import { useCartStore } from "@/stores/cartStore";
import { Badge, Button } from "@mui/material";
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  return (
    <header className="flex items-center  px-20 justify-between p-4 border-b">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Impakt</h1>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <NavLink to="/" className="text-sm font-medium">
          Trang chủ
        </NavLink>
        <NavLink to="/shop" className="text-sm font-medium">
          Sản phẩm
        </NavLink>
        <NavLink to="/contact" className="text-sm font-medium">
          Liên hệ
        </NavLink>
      </nav>
      <div className="flex space-x-4 items-center">
        <Link to={"/search"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </Link>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {user
            ? haveUser.map((item) => (
                <MenuItem
                  onClick={() => {
                    navigate(item.path), handleClose();
                  }}
                >
                  <p>{item.icon}</p>
                  <p>{item.title}</p>
                </MenuItem>
              ))
            : noUser.map((item) => (
                <MenuItem
                  onClick={() => {
                    navigate(item.path), handleClose();
                  }}
                >
                  {item.title}
                </MenuItem>
              ))}
          {user && (
            <MenuItem onClick={logout}>
              <IoIosLogOut /> Đăng xuất
            </MenuItem>
          )}
        </Menu>
        {/* <DropdownMenu>
          <DropdownMenuTrigger>
             
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
        </DropdownMenu> */}
        <Link to={"/cart"}>
          <Badge badgeContent={cart.length} color="success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Badge>
        </Link>
      </div>
    </header>
  );
};

export default HeaderUser;
