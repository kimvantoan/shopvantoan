import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const AccountDetail = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl">AccountDetail</h2>
      <form className="grid mt-5 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="fullname" className="">
            Tên đầy đủ
          </Label>
          <Input id="fullname" type="text" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email" className="">
            Email
          </Label>
          <Input id="email" type="email" />
        </div>
        <Button className="w-fit place-self-end" type="submit">Lưu</Button>
      </form>
    </div>
  );
};

export default AccountDetail;
