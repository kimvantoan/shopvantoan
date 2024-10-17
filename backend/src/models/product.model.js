import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true,trim: true },
    description: { type: String, required: true ,trim: true},
    price: { type: Number, required: true ,trim: true},
    oldPrice: { type: Number,trim: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    images: { type: Array, required: true },
    sizes: { type: Array, required: true ,trim: true},
    colors: { type: Array, required: true ,trim: true},
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
