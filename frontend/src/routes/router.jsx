import Home from "../pages/user/home/Home";
import Login from "../pages/user/authentication/Login";
import Signup from "../pages/user/authentication/Signup";
import ForgotPassword from "@/pages/user/authentication/ForgotPassword";
import ResetPassword from "@/pages/user/authentication/ResetPassword";
import ProductDetail from "@/pages/user/productDetail/ProductDetail";
import Cart from "@/pages/user/cart/Cart";
import Wishlist from "@/pages/user/wishlist/Wishlist";
import Address from "@/pages/user/address/Address";
import Account from "@/pages/user/account/Account";
import Listing from "@/pages/user/product-listing/Listing";
import { createBrowserRouter } from "react-router-dom";
import UserLayout from "@/layouts/userLayout/UserLayout";
import Checkout from "@/pages/user/checkout/Checkout";
import { Search } from "@/pages/user/search/Search";
import Contact from "@/pages/user/contact/Contact";
import Order from "@/pages/user/order/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "/reset-password/:token",
        element: <ResetPassword />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/orders",
        element: <Order />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/address",
        element: <Address />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/shop",
        element: <Listing />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);
