import PageTitle from "../../../components/PageTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const ForgotPassword = () => {
  const breadcrumbData = [
    { label: "Trang chủ", href: "/" },
    { label: "Quên mật khẩu", href: "/forgotpassword" },
  ];
  return (
    <>
      <PageTitle pagetitle="Quên mật khẩu" crumb={breadcrumbData} />
      <form className="flex flex-col gap-4 items-center mx-auto my-20 w-1/4">
        <p>
          Vui lòng nhập địa chỉ email được liên kết với tài khoản của bạn. Chúng
          tôi sẽ nhanh chóng gửi cho bạn liên kết để đặt lại mật khẩu.
        </p>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input required type="email" id="email" />
        </div>
        <Button type="submit">Send reset link</Button>
      </form>
    </>
  );
};

export default ForgotPassword;
