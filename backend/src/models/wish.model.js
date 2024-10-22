import mongoose from "mongoose";

const wishSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
});

const Wish = mongoose.model("Wish", wishSchema);
export default Wish;
