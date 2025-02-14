import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoadingButton } from "@/components/ui/loading-button";
import { useAuthStore } from "@/stores/authStore";
import React from "react";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const breadcrumbData = [
    { label: "Trang chủ", href: "/" },
    { label: "Quên mât khẩu", href: "/forgotpassword" },
  ];
  const { token } = useParams();
  const [data, setData] = React.useState({
    password: "",
    comfirmPass: "",
    token,
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const { ResetPass, loading } = useAuthStore();
  return (
    <>
      <PageTitle pagetitle="Đổi mật khẩu" crumb={breadcrumbData} />
      <form
        onSubmit={(e) => {
          e.preventDefault(), ResetPass(data);
        }}
        className="flex flex-col gap-4 items-center mx-auto my-20 w-1/4"
      >
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="new-password">Mật khẩu mới</Label>
          <Input
            required
            name="password"
            onChange={onChange}
            type="password"
            id="new-password"
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="confirm-password">nhập lại mật khẩu</Label>
          <Input
            required
            type="password"
            name="comfirmPass"
            onChange={onChange}
            id="confirm-password"
          />
        </div>
        {loading ? (
          <LoadingButton loading></LoadingButton>
        ) : (
          <Button type="submit">Đổi mật khẩu</Button>
        )}
      </form>
    </>
  );
};

export default ResetPassword;
