import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/stores/authStore";
import React, { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const ResetPwd = () => {
  const { changePass, user, verify_OTP } = useAuthStore();
  const [data, setData] = useState({
    oldPass: "",
    newPass: "",
    comfirmPass: "",
    email: user?.email,
  });
  const [otp, setOTP] = useState("");
  const onChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleChangePass = (e) => {
    e.preventDefault();
    changePass(data);
  };
  const verify_OTPHandler = (e) => {
    e.preventDefault();
    verify_OTP({ otp, email: user?.email, newPassword: data.newPass });
  };
  return (
    <div>
      <h2 className="font-semibold text-xl">Mật khẩu</h2>
      <form onSubmit={handleChangePass} className="grid mt-5 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="old" className="">
            Mật khẩu cũ
          </Label>
          <Input
            id="old"
            required
            name="oldPass"
            onChange={onChange}
            type="password"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="new" className="">
            Mật khẩu mới
          </Label>
          <Input
            id="new"
            required
            name="newPass"
            onChange={onChange}
            type="password"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="repeat" className="">
            Nhập lại mật khẩu
          </Label>
          <Input
            required
            id="repeat"
            name="comfirmPass"
            onChange={onChange}
            type="password"
          />
        </div>
        <Button className="w-fit place-self-end" type="submit">
          Lấy mã OTP
        </Button>
      </form>
      <form action="1" onSubmit={verify_OTPHandler} className="flex gap-2 justify-end mt-5">
        <InputOTP
          value={otp}
          onChange={(value) => setOTP(value)}
          className={`mt-5`}
          maxLength={6}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <Button type="submit">Xác nhận</Button>
      </form>
    </div>
  );
};

export default ResetPwd;
