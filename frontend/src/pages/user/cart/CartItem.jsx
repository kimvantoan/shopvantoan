import { useCartStore } from "@/stores/cartStore";
import formatPrice from "@/utils/FormatPrice";
import { Button } from "@mui/material";
import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const CartItem = ({ cartItem }) => {
  const { updateQuantity, deleteCart } = useCartStore();
  return (
    <div className="grid grid-cols-8 items-center">
      <div className="size-20 bg-gray-100 rounded-lg overflow-hidden">
        <img
          className="overflow-cover"
          alt=""
          src={cartItem?.productId.images[0].url}
        />
      </div>
      <div className="col-span-3">
        <p className="font-medium">{cartItem?.productId.name}</p>
        <p className="text-sm text-gray-500">
          {cartItem?.color}/{cartItem?.size}
        </p>
        <p className="text-sm text-gray-500">{formatPrice(cartItem?.productId.price)}</p>
      </div>
      <div className="flex items-center border rounded-sm w-fit place-self-center col-span-2">
        <Button
          onClick={(e) => {
            e.preventDefault();
            cartItem.quantity > 1 &&
              updateQuantity({
                id: cartItem._id,
                quantity: cartItem.quantity - 1,
              });
          }}
          color="black"
        >
         <RemoveIcon/>
        </Button>
        <p className=" text-center">{cartItem?.quantity}</p>
        <Button
          onClick={(e) => {
            e.preventDefault();
            updateQuantity({
              id: cartItem._id,
              quantity: cartItem.quantity + 1,
            });
          }}
           color="black"
        >
          <AddIcon/>
        </Button>
      </div>

      <p className="place-self-center">
        {formatPrice(cartItem?.quantity * cartItem?.productId.price)}
      </p>

      <Button
        onClick={() => deleteCart(cartItem._id)}
        className="w-fit place-self-center"
        variant="ghost"
      >
        <FaRegTrashCan className="text-red-500 cursor-pointer" />
      </Button>
    </div>
  );
};

export default CartItem;
