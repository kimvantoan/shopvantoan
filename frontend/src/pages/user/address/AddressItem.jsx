import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FormAddress from "./FormAddress";
const AddressItem = () => {
  return (
    <div className="flex flex-col gap-2 p-3 border-2 rounded-lg">
      <p>Name</p>
      <p>phone</p>
      <p>{`address.detail, address.commune, address.district, address.city`}</p>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link">Chỉnh sửa</Button>
        </DialogTrigger>
        <FormAddress />
      </Dialog>
    </div>
  );
};

export default AddressItem;
