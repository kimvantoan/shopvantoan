import Cart from "../models/cart.model.js";
export const createCart = async (req, res) => {
  const userId = req.user.id;
  const cart = await Cart.findOne({ userId });
  try {
    if (cart) {
      return;
    }
    cart = new Cart({ userId });
    await cart.save();
    res.status(201).json({ cart });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export const addProductToCart = async (req, res) => {
  const { productId, quantity, color, size } = req.body;
  const userId = req.user.id;
  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({
        userId,
        products: [{ productId, quantity, color, size }],
      });
    } else {
      const existingProduct = cart.products.find((product) => {
        return (
          product.productId.equals(productId) &&
          product.color === color &&
          product.size === size
        );
      });

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        cart.products.push({ productId, quantity, color, size });
      }
    }
    await cart.save();
    res.status(200).json({message: "The product has been added to your cart"});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getCartByUserId = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id }).populate(
      "products.productId"
    );
    if (!cart)
      return res.status(404).json({ message: "Giỏ hàng không tìm thấy" });

    await cart.save();
    res.status(200).json({ cart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateProductQuantity = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    const product =cart.products.find(
      (product) => product._id.toString() === id
    );

    if (!product) {
      return res.status(404).json({ message: "Sản phẩm không tìm thấy" });
    }

    product.quantity = Number(quantity);
    
    await cart.save();
    res.status(200).json({ cart });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const removeProductbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    const delProduct = cart.products.find((product) => product._id == id);
    cart.products.pull(delProduct);
    await cart.save();
    res.status(200).json({ cart });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
