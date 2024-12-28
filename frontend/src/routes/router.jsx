import Home from "../pages/user/home/Home"
import Login from "../pages/user/authentication/Login"
import Signup from "../pages/user/authentication/Signup"
import Dashboard from "../pages/admin/dasboard/Dashboard"
import ForgotPassword from "@/pages/user/authentication/ForgotPassword"
import ResetPassword from "@/pages/user/authentication/ResetPassword"
import ProductDetail from "@/pages/user/productDetail/ProductDetail"
import Cart from "@/pages/user/cart/Cart"
import Order from "@/pages/user/order/Order"
import Wishlist from "@/pages/user/wishlist/Wishlist"
import Address from "@/pages/user/address/Address"
import Account from "@/pages/user/account/Account"
    export const userRouter = [
    {
        path: "/",
        component:<Home></Home>,
    },
    {
        path: "/login",
        component:<Login></Login>,
    },
    {
        path: "/signup",
        component:<Signup></Signup>,
    },
    {
        path: "/forgotpassword",
        component:<ForgotPassword></ForgotPassword>,
    },
    {
        path: "/resetpassword",
        component:<ResetPassword></ResetPassword>,
    },
    {
        path:"/product/:id",
        component:<ProductDetail></ProductDetail>
    },
    {
        path:"/cart",
        component:<Cart></Cart>
    },
    {
        path:"/orders",
        component:<Order></Order>
    },
    {
        path:"/wishlist",
        component:<Wishlist></Wishlist>
    },
    {
        path:"/address",
        component:<Address></Address>
    },
    {
        path:"/account",
        component:<Account></Account>
    },

]
export const adminRouter = [
    {
        path: "/admin",
        component:<Dashboard></Dashboard>,
    }

]