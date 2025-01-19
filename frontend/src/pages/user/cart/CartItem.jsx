import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/stores/cartStore";
import formatPrice from "@/utils/FormatPrice";
import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const CartItem = ({ cartItem }) => {
  const { updateQuantity,deleteCart } = useCartStore();
  return (
    <div className="grid grid-cols-8 items-center">
      <div className="size-20 bg-gray-100 rounded-lg overflow-hidden">
        <img className="overflow-cover" alt="" src={cartItem?.productId.images[0].url} />
      </div>
      <div className="col-span-3">
        <p className="font-bold">{cartItem?.productId.name}</p>
        <p>
          {cartItem?.color}/{cartItem?.size}
        </p>
        <p>{formatPrice(cartItem?.productId.price)}</p>
      </div>
      <Input
        type="number"
        onChange={(e) => {
          updateQuantity({
            id: cartItem._id,
            quantity: e.target.value,
          });
        }}
        min={1}
        defaultValue={cartItem?.quantity}
        className="place-self-center col-span-2 w-32"
      />
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
