import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FormAddress from "./FormAddress";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { useAddressStore } from "@/stores/addressStore";
import { toast } from "sonner";
const AddressItem = ({ address }) => {
  const { deleteAddress, handleAction} = useAddressStore();
  const handleDelete = async () => {
    await deleteAddress(address._id);
    toast.success("Xóa địa chỉ thành công");
  };
  return (
    <div className="flex flex-col gap-2 p-3 border-2 rounded-lg">
      <p className="font-bold">{address.name}</p>
      <p className="text-sm">{address.phone}</p>
      <p className="text-sm">{`${address.detail}, ${address.commune}, ${address.district}, ${address.city}`}</p>
      <div className="flex gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              onClick={() => handleAction("edit")}
              className="bg-gray-100 text-black hover:text-white"
            >
              <FiEdit />
              Chỉnh sửa
            </Button>
          </DialogTrigger>
          <FormAddress address={address}/>
        </Dialog>
        <Button
          onClick={handleDelete}
          className="bg-red-100 text-red-500 hover:text-white hover:bg-red-500"
        >
          <FaRegTrashCan /> Xóa
        </Button>
      </div>
    </div>
  );
};

export default AddressItem;
