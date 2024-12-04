import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
// import { useUserStore } from "@/stores/userStore";
import { GoogleLogin } from "@react-oauth/google";
import PageTitle from "@/components/PageTitle";
const Login = () => {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });
  // const { login,loginGoogle, errEmail, errPassword, loading } = useUserStore();

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   login(formData);
  // };
  // const handleLoginGG = (data) => {
  //   loginGoogle(data);
  // };
  const breadcrumbData = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Đăng nhập', href: '/login' }
  ]; 
  return (
    <>
    <PageTitle pagetitle="Đăng Nhập" crumb={breadcrumbData} />
    <form className="flex flex-col gap-4 items-center mx-auto my-20 w-1/4">
      <GoogleLogin className="w-full"/>
      <div className="flex gap-2 items-center">
        <div className="h-px bg-gray-400 w-10"></div>
        <p>Hoặc</p>
        <div className="h-px bg-gray-400 w-10"></div>
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input required type="email" id="email" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Mật khẩu</Label>
        <Input required type="password" id="password" />
      </div>
      <div className="text-right hover:underline">
        <Link to={"/forgotpassword"}>Quên mật khẩu</Link>
      </div>
      <Button type="submit" className="w-full">Đăng nhập</Button>
      <div className="hover:underline">
        <Link to={"/signup"}>Bạn chưa có tài khoản? Đăng ký</Link>
      </div>
      {/* <h2 className="font-semibold text-3xl text-center">Đăng nhập</h2>
        <label
          className={`input input-bordered ${
            errEmail && "input-error"
          } flex items-center gap-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            required
            type="email"
            className="grow"
            placeholder="Email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>
        {errEmail && <p className="text-red-500 text-sm">{errEmail}</p>}
        <label
          className={`input input-bordered ${
            errPassword && "input-error"
          } flex items-center gap-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            required
            type="password"
            className="grow"
            placeholder="Mật khẩu"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </label>
        {errPassword && <p className="text-red-500 text-sm">{errPassword}</p>}
        <Link to="/" className="text-#748C70">
          Quên mật khẩu?
        </Link>
        <button type="submit" className="btn bg-#748C70 text-white">
          {loading ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            "Đăng nhập"
          )}
        </button>
        <p className="text-center">Hoặc</p>
        <GoogleLogin
          onSuccess={handleLoginGG}
          onError={() => console.log('Login failed')}
          
        />
        <p className="text-center">
          Bạn chưa có tài khoản?{" "}
          <Link to={"/signup"} className="text-#748C70">
            Đăng kí
          </Link>
        </p> */}
    </form>
    </>
  );
};

export default Login;
