import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/PageTitle";
import { useAuthStore } from "@/stores/authStore";
import { LoadingButton } from "@/components/ui/loading-button";
const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const { signup, loading } = useAuthStore();

  const handleSignup = async (e) => {
    e.preventDefault();
    await signup(formData);
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
    { label: "Đăng kí", href: "/signup" },
  ];
  return (
    <>
      <PageTitle pagetitle="Đăng kí" crumb={breadcrumbData} />
      <form
        onSubmit={handleSignup}
        className="flex flex-col gap-4 mx-auto my-20 w-1/4"
      >
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="fullname">Họ Tên</Label>
          <Input
            required
            type="text"
            onChange={handleDataChange}
            name="fullname"
            id="fullname"
          />
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
        {loading ? (
          <LoadingButton loading className="w-full">
            Đăng kí
          </LoadingButton>
        ) : (
          <Button type="submit" className="w-full">
            Đăng kí
          </Button>
        )}

        <div className="hover:underline text-center">
          <Link to={"/login"}>Bạn đã có tài khoản? Đăng nhập</Link>
        </div>
      </form>
    </>
  );
};
export default Signup;
