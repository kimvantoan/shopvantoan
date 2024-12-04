import React from "react";
import logo from "../../assets/Logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
const HeaderUser = () => {
  const listNav = [
    {
      name: "Trang chủ",
      path: "/",
    },
    {
      name: "Cửa hàng",
      path: "/shop",
    },
    {
      name: "Nam",
      path: "/men",
    },
    {
      name: "Nữ",
      path: "/women",
    },
    {
      name: "Trẻ em",
      path: "/kid",
    },
    {
      name: "Liên hệ",
      path: "/contact",
    },
  ]
  return (
    <header className="px-40 py-5 flex justify-between items-center">
      <img src={logo} alt="" />
      <ul className="flex gap-10 text-lg">
        {listNav.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "font-semibold" : "text-gray-500")}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex gap-6 items-center">
        <label className="input input-bordered flex items-center">
          <input type="text" placeholder="Tìm kiếm" />
          <IoMdSearch size={26} className="text-gray-500" cursor={"pointer"} />
        </label>
        <Link to={"/account"}>
          <FaRegUser size={23} className="text-gray-500" cursor={"pointer"} />
        </Link>
        <Link to={"/cart"} className="indicator">
          <span className="indicator-item badge  bg-gray-200 font-bold text-gray-500">9</span>
          <AiOutlineShoppingCart className="text-gray-500" size={26} cursor={"pointer"} />
        </Link>
      </div>
    </header>
  );
};

export default HeaderUser;
