import PageTitle from "../../../components/PageTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoadingButton } from "@/components/ui/loading-button";
import { useAuthStore } from "@/stores/authStore";
import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const breadcrumbData = [
    { label: "Trang chủ", href: "/" },
    { label: "Quên mật khẩu", href: "/forgotpassword" },
  ];
  const [email, setEmail] = React.useState("");
  const { forgotPass, loading } = useAuthStore();
  return (
    <>
      <PageTitle pagetitle="Quên mật khẩu" crumb={breadcrumbData} />
      <form
        onSubmit={(e) => {
          e.preventDefault(), forgotPass({ email });
        }}
        className="flex flex-col gap-4 items-center mx-auto my-20 w-1/4"
      >
        <p>
          Vui lòng nhập địa chỉ email được liên kết với tài khoản của bạn. Chúng
          tôi sẽ nhanh chóng gửi cho bạn liên kết để đặt lại mật khẩu.
        </p>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
        </div>
        {loading ? (
          <LoadingButton loading></LoadingButton>
        ) : (
          <Button
            type="submit"
          >
            Gửi liên kết
          </Button>
        )}
        <Link className="border-2 p-2 rounded border-red-500" to="/login">
          Đăng nhập
        </Link>
      </form>
    </>
  );
};

export default ForgotPassword;
