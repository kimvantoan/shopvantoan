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
    payment: { type: Boolean, required: true, default: "false" },
    paymentMethod: { type: String, required: true },
    shippingAddress: {
      name: { type: String, required: true, trim: true },
      phone: { type: String, required: true, trim: true },
      city: { type: String, required: true, trim: true },
      district: { type: String, required: true, trim: true },
      commune: { type: String, required: true, trim: true },
      detail: { type: String, required: true, trim: true },
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
