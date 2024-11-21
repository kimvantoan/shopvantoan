import Home from "../pages/user/home/Home"
import Login from "../pages/user/login/Login"
import Signup from "../pages/user/signup/Signup"
import Dashboard from "../pages/admin/dasboard/Dashboard"
import { Store } from "../pages/user/shop/Store"
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
        path: "/shop",
        component:<Store></Store>,
    }
]
export const adminRouter = [
    {
        path: "/admin",
        component:<Dashboard></Dashboard>,
    }

]