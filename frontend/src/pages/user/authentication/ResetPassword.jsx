import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const ResetPassword = () => {
  const breadcrumbData = [
    { label: "Trang chủ", href: "/" },
    { label: "Quên mât khẩu", href: "/forgotpassword" },
  ];
  return (
    <>
      <PageTitle pagetitle="Đổi mật khẩu" crumb={breadcrumbData} />
      <form className="flex flex-col gap-4 items-center mx-auto my-20 w-1/4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="new-password">Mật khẩu mới</Label>
          <Input required type="password" id="new-password" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="confirm-password">nhập lại mật khẩu</Label>
          <Input required type="password" id="confirm-password" />
        </div>
        <Button>Đổi mật khẩu</Button>
      </form>
    </>
  );
};

export default ResetPassword;
