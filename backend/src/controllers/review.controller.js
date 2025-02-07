import Product from "../models/product.model.js";
import Review from "../models/review.model.js";
export const createReview = async (req, res) => {
  const userId = req.user.id;
  try {
    const review = await Review.create({ ...req.body, userId });

    res.status(201).json({ review });
  } catch (error) {
    console.log(error);
  }
};

export const getMyReview = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const review = await Review.find({ userId: req.user.id })
      .populate("userId")
      .populate("productId")
      .skip((page - 1) * limit)
      .limit(limit);

    const count = review.length;
    const totalPages = Math.ceil(count / limit);

    res.status(200).json({
      review,
      pagination: { page, limit, totalPages, totalCount: count },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getReviewByProduct = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  try {
    const reviews = await Review.find({ productId: req.params.id })
      .populate("userId")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const product = await Product.findById(req.params.id);
    product.avgRate =
      reviews.reduce((total, review) => total + review.star, 0) /
      reviews.length;
    await product.save();

    const count = reviews.length;
    const totalPages = Math.ceil(count / limit);

    if (!reviews) return res.status(404).json({ message: "Review not found" });

    res.status(200).json({
      reviews,
      pagination: { page, limit, totalPages, totalCount: count },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateReview = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;
  try {
    const review = await Review.findOneAndUpdate(
      { _id: id, userId },
      { ...req.body },
      { new: true }
    );
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteReview = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;
  try {
    const review = await Review.findOneAndDelete({ _id: id, userId });
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.status(204).json({ message: "Đã xóa review" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
