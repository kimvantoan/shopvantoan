import Home from "../pages/user/home/Home";
import Login from "../pages/user/authentication/Login";
import Signup from "../pages/user/authentication/Signup";
import Dashboard from "../pages/admin/dasboard/Dashboard";
import ForgotPassword from "@/pages/user/authentication/ForgotPassword";
import ResetPassword from "@/pages/user/authentication/ResetPassword";
import ProductDetail from "@/pages/user/productDetail/ProductDetail";
import Cart from "@/pages/user/cart/Cart";
import Order from "@/pages/user/order/Order";
import Wishlist from "@/pages/user/wishlist/Wishlist";
import Address from "@/pages/user/address/Address";
import Account from "@/pages/user/account/Account";
import Listing from "@/pages/user/product-listing/Listing";
import { createBrowserRouter, Navigate } from "react-router-dom";
import UserLayout from "@/layouts/userLayout/UserLayout";
import { useAuthStore } from "@/stores/authStore";
import Checkout from "@/pages/user/checkout/Checkout";
import { Search } from "@/pages/user/search/Search";

const AuthenticatedUser = ({ children }) => {
  const { user } = useAuthStore();
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
};
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
        element: (
          <AuthenticatedUser>
            <Login />
          </AuthenticatedUser>
        ),
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
        path: "/resetpassword",
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
export const adminRouter = [
  {
    path: "/admin",
    component: <Dashboard></Dashboard>,
  },
];
