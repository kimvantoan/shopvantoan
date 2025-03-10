import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import PageTitle from "@/components/PageTitle";
import { useAuthStore } from "@/stores/authStore";
import { LoadingButton } from "@/components/ui/loading-button";
import { useCartStore } from "@/stores/cartStore";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { getCart } = useCartStore();
  const { login, googleLogin } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    await login(formData);
    await getCart();
    setLoading(false);
    navigate("/");
  };
  const handleLoginGG = async (credential) => {
    setLoading(true);
    await googleLogin(credential)
    await getCart();
    setLoading(false);
    navigate("/");
  };

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const breadcrumbData = [
    { label: "Trang chủ", href: "/" },
    { label: "Đăng nhập", href: "/login" },
  ];
  return (
    <>
      <PageTitle pagetitle="Đăng Nhập" crumb={breadcrumbData} />
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center gap-4 mx-auto my-20 w-1/4"
      >
        <GoogleLogin
          className="justify-center"
          onSuccess={(credentialResponse) => {
            handleLoginGG(credentialResponse.credential);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
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
        </div>
        <div className="text-sm hover:underline">
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
