import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true },
        size: { type: String, required: true },
        color: { type: String, required: true },
      },
    ],
    totalPrice: Number,
    status: {
      type: String,
      enum: ["Đang xử lý", "Giao hàng", "Đã hoàn thành", "Đã hủy"],
      default: "Đang xử lý",
    },
    shippingAddress: {
      name: { type: String, required: true },
      phone: { type: String, required: true },
      city: { type: String, required: true },
      district: { type: String, required: true },
      commune: { type: String, required: true },
      detail: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
