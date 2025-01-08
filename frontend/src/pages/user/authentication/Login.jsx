import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import PageTitle from "@/components/PageTitle";
import { useAuthStore } from "@/stores/authStore";
import { LoadingButton } from "@/components/ui/loading-button";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, errEmail, errPassword, loading } = useAuthStore();

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      login(formData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  const breadcrumbData = [
    { label: "Trang chủ", href: "/" },
    { label: "Đăng nhập", href: "/login" },
  ];
  return (
    <>
      <PageTitle pagetitle="Đăng Nhập" crumb={breadcrumbData} />
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 mx-auto my-20 w-1/4"
      >
        {/* <GoogleLogin className="w-full" /> */}
        <div className="flex gap-2 self-center items-center">
          <div className="h-px bg-gray-400 w-10"></div>
          <p>Hoặc</p>
          <div className="h-px bg-gray-400 w-10"></div>
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            required
            type="email"
            onChange={handleDataChange}
            name="email"
            id="email"
          />
          {errEmail && <p className="text-red-500 text-sm">{errEmail}</p>}
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="password">Mật khẩu</Label>
          <Input
            required
            type="password"
            onChange={handleDataChange}
            name="password"
            id="password"
          />
          {errPassword && <p className="text-red-500 text-sm">{errPassword}</p>}
        </div>
        <div className="text-right hover:underline">
          <Link to={"/forgotpassword"}>Quên mật khẩu</Link>
        </div>
        {loading ? (
          <LoadingButton loading className="w-full">
            Đăng nhập
          </LoadingButton>
        ) : (
          <Button type="submit" className="w-full">
            Đăng nhập
          </Button>
        )}
        <div className="hover:underline text-center">
          <Link to={"/signup"}>Bạn chưa có tài khoản? Đăng ký</Link>
        </div>
      </form>
    </>
  );
};

export default Login;
