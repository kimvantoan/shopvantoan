import Wish from "../models/wish.model.js";

export const addWish = async (req, res) => {
  const userId = req.user.id;
  try {
    const { productId } = req.body;
    const wish = new Wish({ userId, productId });
    await wish.save();
    res.status(201).send(wish);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getWish = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const userId = req.user.id;
  try {
    const wish = await Wish.find({ userId })
      .populate("productId")
      .skip((page - 1) * limit)
      .limit(limit);
    const count = wish.length;
    const totalPages = Math.ceil(count / limit);
    res.status(200).json({
      wish,
      pagination: { page, limit, totalPages, totalCount: count },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteWish = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;
  try {
    await Wish.deleteOne({ userId, _id: id });
    res.send("Đã xoá sản phẩm yêu thích");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
