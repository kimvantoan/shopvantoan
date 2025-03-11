import React from "react";
import Home from "../pages/user/home/Home";
import Login from "../pages/user/authentication/Login";
import Signup from "../pages/user/authentication/Signup";
import ForgotPassword from "@/pages/user/authentication/ForgotPassword";
import ResetPassword from "@/pages/user/authentication/ResetPassword";
import { createBrowserRouter } from "react-router-dom";
import UserLayout from "@/layouts/userLayout/UserLayout";
const Cart = React.lazy(() => import("@/pages/user/cart/Cart"));
const Wishlist = React.lazy(() => import("@/pages/user/wishlist/Wishlist"));
const Order = React.lazy(() => import("@/pages/user/order/Order"));
const Listing = React.lazy(() =>
  import("@/pages/user/product-listing/Listing")
);
const ProductDetail = React.lazy(() =>
  import("@/pages/user/productDetail/ProductDetail")
);
const Address = React.lazy(() => import("@/pages/user/address/Address"));
const Account = React.lazy(() => import("@/pages/user/account/Account"));
const Checkout = React.lazy(() => import("@/pages/user/checkout/Checkout"));
const Search = React.lazy(() => import("@/pages/user/search/Search"));
const Contact = React.lazy(() => import("@/pages/user/contact/Contact"));
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
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <ProductDetail />
          </React.Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </React.Suspense>
        ),
      },
      {
        path: "/orders",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Order />
          </React.Suspense>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Wishlist />
          </React.Suspense>
        ),
      },
      {
        path: "/address",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Address />
          </React.Suspense>
        ),
      },
      {
        path: "/account",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Account />
          </React.Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </React.Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Listing />
          </React.Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Checkout />
          </React.Suspense>
        ),
      },
      {
        path: "/search",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Search />
          </React.Suspense>
        ),
      },
    ],
  },
]);
