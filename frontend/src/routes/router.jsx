import Home from "../pages/user/home/Home"
import Login from "../pages/user/authentication/Login"
import Signup from "../pages/user/authentication/Signup"
import Dashboard from "../pages/admin/dasboard/Dashboard"
import ForgotPassword from "@/pages/user/authentication/ForgotPassword"
import ResetPassword from "@/pages/user/authentication/ResetPassword"
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
    }
]
export const adminRouter = [
    {
        path: "/admin",
        component:<Dashboard></Dashboard>,
    }

]