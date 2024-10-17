import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    rating: { type: Number, min: 1, max: 5,required: true },
    comment: String,
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);
export default Review;
