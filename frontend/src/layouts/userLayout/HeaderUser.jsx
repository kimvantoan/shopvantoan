import React from "react";
import logo from "../../assets/Logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
const HeaderUser = () => {
  return (
    <header className="px-28 py-6 flex justify-between items-center">
      <img src={logo} alt="" />
      <ul className="flex gap-10 text-lg">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
          >
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/shop"}
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Cửa hàng
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Liên hệ
          </NavLink>
        </li>
      </ul>

      <div className="flex gap-6 items-center">
        <label className="input input-bordered flex items-center">
          <input type="text" className="grow" placeholder="Search" />
          <IoMdSearch size={26} cursor={"pointer"} />
        </label>
        <Link to={"/account"}>
          <FaRegUser size={24} cursor={"pointer"} />
        </Link>
        <Link to={"/account/wishlish"}>
          <FaRegHeart size={24} cursor={"pointer"} />
        </Link>
        <Link to={"/cart"} className="indicator">
          <span className="indicator-item badge badge-secondary">9</span>
          <AiOutlineShoppingCart size={26} cursor={"pointer"} />
        </Link>
      </div>
    </header>
  );
};

export default HeaderUser;
