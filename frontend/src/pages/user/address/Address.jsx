import React, { useEffect, useState } from "react";
import LayoutProfile from "@/layouts/userLayout/LayoutProfile";
import AddressItem from "./AddressItem";

import { useAddressStore } from "@/stores/addressStore";
import Select from "@mui/material/Select";
import {
  Avatar,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

const Address = () => {
  const { getAllAddress, addresses,createAddress } = useAddressStore();
  useEffect(() => {
    getAllAddress();
  }, []);
  const [open, setOpen] = React.useState(false);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [data, setData] = useState({
    name: "",
    phone: "",
    city: "",
    district: "",
    commune: "",
    detail: "",
  });
  const getcity = async () => {
    const city = await axios.get("https://provinces.open-api.vn/api/");
    setCities(city.data);
  };

  const getdistrict = async (name) => {
    const code = cities.find((item) => item.name === name);
    const district =
      code &&
      (await axios.get(
        `https://provinces.open-api.vn/api/p/${code.code}?depth=2`
      ));
    setDistricts(district?.data.districts);
  };

  const getward = async (name) => {
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
    getcity();
  }, []);
  const handleSubmit = async () => {
    await createAddress(data);
  };
  return (
    <LayoutProfile>
      <div className="flex-grow">
        <h2 className="text-xl font-medium mb-4">Địa chỉ giao hàng</h2>
        <React.Fragment>
          <Button variant="outlined" onClick={handleClickOpen}>
            Thêm địa chỉ
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            slotProps={{
              paper: {
                component: "form",
                onSubmit: (event) => {
                  event.preventDefault();
                  handleSubmit();
                  handleClose();
                },
              },
            }}
          >
            <DialogTitle>Thêm địa chỉ</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                onChange={(e) => setData({ ...data, name: e.target.value })}
                name="name"
                label="Tên người nhận"
                type="name"
                fullWidth
                variant="standard"
              />
              <TextField
                required
                margin="dense"
                id="phone"
                name="phone"
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                label="Số điện thoại"
                type="tel"
                fullWidth
                variant="standard"
              />
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Thành phố
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Thành phố"
                  onChange={(e) => {
                    setData({ ...data, city: e.target.value }),
                      getdistrict(e.target.value);
                  }}
                >
                  {cities.map((city) => (
                    <MenuItem value={city.name}>{city.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Quận, huyện
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Quận, huyện"
                  onChange={(e) => {
                    setData({ ...data, district: e.target.value }),
                      getward(e.target.value);
                  }}
                >
                  {districts?.map((district) => (
                    <MenuItem value={district.name}>{district.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Phường, xã
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Phường, xã"
                  onChange={(e) => {
                    setData({ ...data, commune: e.target.value });
                  }}
                >
                  {wards?.map((ward) => (
                    <MenuItem value={ward.name}>{ward.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                required
                margin="dense"
                id="detail"
                name="detail"
                label="Chi tiết"
                onChange={(e) => setData({ ...data, detail: e.target.value })}
                type="text"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Hủy</Button>
              <Button type="submit">Lưu</Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
        <div className="grid md:grid-cols-2 gap-4">
          {addresses.length > 0 ? (
            addresses.map((address) => (
              <AddressItem key={address._id} address={address} />
            ))
          ) : (
            <div className="text-center">
              <img
                src="/address-not-fould.webp"
                className="mx-auto size-[300px]"
                alt=""
              />
              <h2 className="text-xl text-red-500">
                Hãy thêm địa chỉ để mua hàng
              </h2>
            </div>
          )}
        </div>
      </div>
    </LayoutProfile>
  );
};

export default Address;
