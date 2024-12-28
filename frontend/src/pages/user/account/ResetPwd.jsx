import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const ResetPwd = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl">Mật khẩu</h2>
      <form className="grid mt-5 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="old" className="">
            Mật khẩu cũ
          </Label>
          <Input id="old" type="password" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="new" className="">
            Mật khẩu mới
          </Label>
          <Input id="new" type="password" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="repeat" className="">
            Nhập lại mật khẩu
          </Label>
          <Input id="repeat" type="password" />
        </div>
        <Button  className="w-fit place-self-end"  type="submit">Lưu</Button>
      </form>
    </div>
  );
};

export default ResetPwd;
