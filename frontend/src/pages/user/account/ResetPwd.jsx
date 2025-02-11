import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/stores/authStore";
import React, { useState } from "react";

const ResetPwd = () => {
  const { ResetPass, user } = useAuthStore();
  const [data, setData] = useState({
    oldPass: "",
    newPass: "",
    comfirmPass: "",
    email: user.email,
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleChangePass = (e) => {
    e.preventDefault();
    const res = ResetPass(data);
    console.log(res);
    
  }
  return (
    <div>
      <h2 className="font-semibold text-xl">Mật khẩu</h2>
      <form onSubmit={handleChangePass} className="grid mt-5 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="old" className="">
            Mật khẩu cũ
          </Label>
          <Input id="old"name="oldPass" onChange={onChange} type="password" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="new" className="">
            Mật khẩu mới
          </Label>
          <Input id="new"  name="newPass" onChange={onChange} type="password" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="repeat" className="">
            Nhập lại mật khẩu
          </Label>
          <Input id="repeat" name="comfirmPass" onChange={onChange} type="password" />
        </div>
        <Button className="w-fit place-self-end" type="submit">
          Lưu
        </Button>
      </form>
    </div>
  );
};

export default ResetPwd;
