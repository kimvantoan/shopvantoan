import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoadingButton } from "@/components/ui/loading-button";
import { useAuthStore } from "@/stores/authStore";
import React, { useState } from "react";
import { IoCameraReverseOutline } from "react-icons/io5";
import { toast } from "sonner";

const AccountDetail = () => {
  const { user, loading, updateUser } = useAuthStore();
  const [data, setData] = useState({
    _id: user._id,
    fullname: user.fullname,
    avatar: user.avatar,
  });
  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", data.avatar);
    formData.append("_id", data._id);
    formData.append("fullname", data.fullname);
    await updateUser(formData);
  };
  
  return (
    <div>
      <h2 className="font-semibold text-xl">Thông tin tài khoản</h2>
      <form onSubmit={handleUpdate} className="grid mt-5 gap-4">
        <div className="self-center relative w-fit">
          <img
            src={
              typeof data.avatar === "string"
                ? data.avatar
                : URL.createObjectURL(data.avatar)
            }
            className="size-20 rounded-full"
            alt=""
          />
          <Label
            htmlFor="file"
            className="absolute flex items-center justify-center bottom-0 right-0 cursor-pointer border-2 border-white text-white p-1  rounded-full  bg-black"
          >
            <IoCameraReverseOutline className="size-4" />
            <Input
              id="file"
              onChange={(e) => setData({ ...data, avatar: e.target.files[0] })}
              className="hidden"
              type="file"
            />
          </Label>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="fullname" className="">
            Họ và tên
          </Label>
          <Input
            id="fullname"
            onChange={(e) => setData({ ...data, fullname: e.target.value })}
            value={data.fullname}
            type="text"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email" className="">
            Email
          </Label>
          <Input id="email" disabled value={user.email} type="email" />
        </div>
        {loading ? (
          <LoadingButton
            className="w-[60px] place-self-end"
            loading
          ></LoadingButton>
        ) : (
          <Button className="w-[60px] place-self-end" type="submit">
            Lưu
          </Button>
        )}
      </form>
    </div>
  );
};

export default AccountDetail;
