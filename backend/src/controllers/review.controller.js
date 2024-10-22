import Review from "../models/review.model.js";
import Order from "../models/order.model.js";
export const createReview = async (req, res) => {
  const userId = req.user.id;
  const { orderId, productId } = req.body;

  const order = await Order.findOne({ _id: orderId, status: "Đã hoàn thành" });

  try {
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const review = await Review.findOne({ orderId, productId });

    if (review) {
      return res.status(400).json({ message: "sản phẩn đã được đánh giá" });
    } else {
      const newReview = new Review({
        userId,
        ...req.body,
      });
      await newReview.save();
      res.status(201).json(newReview);
    }
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ message: error.message });
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
    const review = await Review.find({ productId: req.params.id })
      .populate("userId")
      .skip((page - 1) * limit)
      .limit(limit);

    const count = review.length;
    const totalPages = Math.ceil(count / limit);

    if (!review) return res.status(404).json({ message: "Review not found" });

    res.status(200).json({
      review,
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
