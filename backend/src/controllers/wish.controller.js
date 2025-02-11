import Wish from "../models/wish.model.js";

export const addWish = async (req, res) => {
  const userId = req.user.id;
  const { productId } = req.body;
  try {
    let wish = await Wish.findOne({ userId });
    if (!wish) {
      wish = new Wish({ userId, wishes: [{ productId }] });
    } else {
      const existingProduct = wish.wishes.some(
        (item) => item.productId.toString() === productId
      );
      if (existingProduct) {
        wish.wishes = wish.wishes.filter(
          (item) => item.productId.toString() !== productId
        );
      } else {
        wish.wishes.push({ productId });
      }
    }
    await wish.save();
    res
      .status(200)
      .json({ message: "Đã thêm vào sản phẩm yêu thích" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getWish = async (req, res) => {
  const userId = req.user.id;
  try {
    const wish = await Wish.findOne({ userId }).populate("wishes.productId");
    res.status(200).json({ wish });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteWish = async (req, res) => {
  const userId = req.user.id;
  const {id} = req.params
  try {
    let wish = await Wish.findOne({ userId });
    wish.wishes = wish.wishes.filter(
      (item) => item.productId.toString() !== req.params.id
    );
    await wish.save();
    res
      .status(200)
      .json({ message: "The product has been removed from your wishlist" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
