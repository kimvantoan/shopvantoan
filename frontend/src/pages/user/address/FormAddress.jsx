import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useAddressStore } from "@/stores/addressStore";
import { LoadingButton } from "@/components/ui/loading-button";
import { toast } from "sonner";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const FormAddress = ({ address }) => {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const { createAddress, updateAddress, action, loading } = useAddressStore();
  const [data, setData] = useState({
    name: "",
    phone: "",
    city: "",
    district: "",
    commune: "",
    detail: "",
  });
  const city = async () => {
    const city = await axios.get("https://provinces.open-api.vn/api/");
    setCities(city.data);
    
  };

  const district = async (name) => {
    const code = cities.find((item) => item.name === name);
    const district =
      code &&
      (await axios.get(
        `https://provinces.open-api.vn/api/p/${code.code}?depth=2`
      ));
    setDistricts(district?.data.districts);
  };

  const ward = async (name) => {
    const code = await cities?.find((item) => item.name === data?.city);
    const res =
      code &&
      (await axios.get(
        `https://provinces.open-api.vn/api/p/${code.code}?depth=3`
      ));
    const ward = res?.data.districts.find((item) => item.name === name);
    setWards(ward?.wards);
  };

  useEffect(() => {
    city();
    district(data?.city);
    ward(data?.district);
  }, [data?.city]);

  useEffect(() => {
    if (action === "edit") {
      setData(address);
    }
  }, [action]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (action === "edit") {
      await updateAddress(address._id, data);
      toast.success("Sửa địa chỉ thành công");
    } else {
      await createAddress(data);
      toast.success("Thêm địa chỉ thành công");
    }
  };



  return (
    <h1>vsi</h1>
    // <DialogContent className="w-1/2 top-[38%]">
    //   <DialogHeader>
    //     <DialogTitle>
    //       {action === "edit" ? "Sửa địa chỉ" : "Thêm địa chỉ"}
    //     </DialogTitle>
    //   </DialogHeader>
    //   <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 py-4">
    //     <div className="grid gap-2">
    //       <Label htmlFor="name" className="">
    //         Tên người nhận
    //       </Label>
    //       <Input
    //         id="name"
    //         onChange={(e) => setData({ ...data, name: e.target.value })}
    //         type="text"
    //         required
    //         value={data?.name}
    //       />
    //     </div>
    //     <div className="grid gap-2">
    //       <Label htmlFor="tel" className="">
    //         Số điện thoại
    //       </Label>
    //       <Input
    //         id="tel"
    //         onChange={(e) => setData({ ...data, phone: e.target.value })}
    //         type="text"
    //         required
    //         value={data?.phone}
    //       />
    //     </div>
    //     <div className="grid gap-2">
    //       <Label htmlFor="city" className="">
    //         Thành phố
    //       </Label>
    //       <Select
    //         defaultValue={address?.city}
    //         onValueChange={(e) => {
    //           setData({ ...data, city: e }), district(e);
    //         }}
    //       >
    //         <SelectTrigger className="">
    //           <SelectValue placeholder="Chọn thành phố" />
    //         </SelectTrigger>
    //         <SelectContent>
    //           <SelectGroup>
    //             <SelectLabel>Thành phố</SelectLabel>
    //             {cities?.map((city) => (
    //               <SelectItem key={city.code} value={city.name}>
    //                 {city.name}
    //               </SelectItem>
    //             ))}
    //           </SelectGroup>
    //         </SelectContent>
    //       </Select>
    //     </div>
    //     <div className="grid gap-2">
    //       <Label htmlFor="district" className="">
    //         Quận, huyện
    //       </Label>
    //       <Select
    //         defaultValue={address?.district}
    //         onValueChange={(e) => {
    //           setData({ ...data, district: e }), ward(e);
    //         }}
    //       >
    //         <SelectTrigger className="">
    //           <SelectValue placeholder="Chọn quận, huyện" />
    //         </SelectTrigger>
    //         <SelectContent>
    //           <SelectGroup>
    //             <SelectLabel>Quận, huyện</SelectLabel>
    //             {districts?.map((district) => (
    //               <SelectItem key={district.code} value={district.name}>
    //                 {district.name}
    //               </SelectItem>
    //             ))}
    //           </SelectGroup>
    //         </SelectContent>
    //       </Select>
    //     </div>
    //     <div className="grid col-span-2 gap-2">
    //       <Label htmlFor="commune" className="">
    //         Xã, Phuờng
    //       </Label>
    //       <Select
    //         defaultValue={address?.commune}
    //         onValueChange={(e) => {
    //           setData({ ...data, commune: e });
    //         }}
    //       >
    //         <SelectTrigger>
    //           <SelectValue placeholder="Chọn xã, phường" />
    //         </SelectTrigger>
    //         <SelectContent className="max-h-[300px]">
    //           <SelectGroup>
    //             <SelectLabel>Xã, phường</SelectLabel>
    //             {wards?.map((ward) => (
    //               <SelectItem key={ward.code} value={ward.name}>
    //                 {ward.name}
    //               </SelectItem>
    //             ))}
    //           </SelectGroup>
    //         </SelectContent>
    //       </Select>
    //     </div>
    //     <div className="grid col-span-2 gap-2">
    //       <Label htmlFor="detaildetail" className="">
    //         Chi tiết điểm giao hàng
    //       </Label>
    //       <Input
    //         id="detaildetail"
    //         onChange={(e) => setData({ ...data, detail: e.target.value })}
    //         type="text"
    //         required
    //         value={data?.detail}
    //       />
    //     </div>
    //     <DialogFooter className="sm:justify-start">
    //       {loading ? (
    //         <LoadingButton loading></LoadingButton>
    //       ) : (
    //         <Button type="submit">Lưu</Button>
    //       )}
    //     </DialogFooter>
    //   </form>
    // </DialogContent>
  );
};

export default FormAddress;
