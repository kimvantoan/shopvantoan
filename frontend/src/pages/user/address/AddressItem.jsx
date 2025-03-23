import React, { useEffect, useState } from "react";
import { useAddressStore } from "@/stores/addressStore";
import { toast } from "sonner";
import { Edit, Delete } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

const AddressItem = ({ address }) => {
  const { deleteAddress,updateAddress } = useAddressStore();
  const handleDelete = async () => {
    await deleteAddress(address._id);
    toast.success("Xóa địa chỉ thành công");
  };
  const [open, setOpen] = React.useState(false);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [wards, setWards] = useState([]);
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
    setData(address);
    console.log(address);
    
    const fetchData = async () => {
      await getcity();
      if (address.city) {
        await getdistrict(address.city);
      }
      if (address.district) {
        await getward(address.district);
      }
    };
    fetchData();
  }, [address.city, address.district]);
  const handleSubmit = async () => {
    await updateAddress(address._id, data);
  };
  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium">Người nhận: {address.name}</h3>
        <div>
          <React.Fragment>
            <IconButton size="small" onClick={handleClickOpen} >
              <Edit fontSize="small" />
            </IconButton>
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
              <DialogTitle>Sửa địa chỉ</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="name"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  value={data.name}
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
                  value={data.phone}
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
                    value={data.city}
                  >
                    {cities.map((city) => (
                      <MenuItem key={city.code} value={city.name}>{city.name}</MenuItem>
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
                    value={data.district}
                  >
                    {districts?.map((district) => (
                      <MenuItem key={district.code} value={district.name}>{district.name}</MenuItem>
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
                    value={data.commune}
                  >
                    {wards?.map((ward) => (
                      <MenuItem key={ward.code} value={ward.name}>{ward.name}</MenuItem>
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
                  value={data.detail}
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
          <IconButton size="small">
            <Delete fontSize="small" onClick={handleDelete} />
          </IconButton>
        </div>
      </div>

      <div className="text-sm space-y-1">
        <p>Sđt: {address.phone}</p>
        <p>{`${address.commune}, ${address.district}, ${address.city}`}</p>
        <p>Mô tả: {address.detail}</p>
      </div>
    </div>
  );
};

export default AddressItem;
