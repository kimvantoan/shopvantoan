import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, required: true },
      size: { type: String, required: true },
      color: { type: String, required: true },
    },
  ],
  totalPrice: {
    type: Number,
    default: 0,
  },
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
