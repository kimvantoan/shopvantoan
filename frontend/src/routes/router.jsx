import React from "react";
import Home from "../pages/user/home/Home";
import Login from "../pages/user/authentication/Login";
import Signup from "../pages/user/authentication/Signup";
import ForgotPassword from "@/pages/user/authentication/ForgotPassword";
import ResetPassword from "@/pages/user/authentication/ResetPassword";
import { createBrowserRouter } from "react-router-dom";
import UserLayout from "@/layouts/userLayout/UserLayout";
import { Search } from "@/pages/user/search/Search";
import LoadingModal from "@/components/LoadingModal";
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
          <React.Suspense fallback={<LoadingModal/>}>
            <ProductDetail />
          </React.Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <React.Suspense fallback={<LoadingModal/>}>
            <Cart />
          </React.Suspense>
        ),
      },
      {
        path: "/orders",
        element: (
          <React.Suspense fallback={<LoadingModal/>}>
            <Order />
          </React.Suspense>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <React.Suspense fallback={<LoadingModal/>}>
            <Wishlist />
          </React.Suspense>
        ),
      },
      {
        path: "/address",
        element: (
          <React.Suspense fallback={<LoadingModal/>}>
            <Address />
          </React.Suspense>
        ),
      },
      {
        path: "/account",
        element: (
          <React.Suspense fallback={<LoadingModal/>}>
            <Account />
          </React.Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <React.Suspense fallback={<LoadingModal/>}>
            <Contact />
          </React.Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <React.Suspense fallback={<LoadingModal/>}>
            <Listing />
          </React.Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <React.Suspense fallback={<LoadingModal/>}>
            <Checkout />
          </React.Suspense>
        ),
      },
      {
        path: "/search",
        element: (
          <React.Suspense fallback={<LoadingModal/>}>
            <Search />
          </React.Suspense>
        ),
      },
    ],
  },
]);
