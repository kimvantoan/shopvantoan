import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";
export const createCart = async (req, res) => {
  const userId = req.user.id;
  try {
    const newCart = new Cart({ userId });
    await newCart.save();
    res.status(201).json(newCart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getCartByUserId = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart)
      return res.status(404).json({ message: "Giỏ hàng không tìm thấy" });

    const productsWithPrices = await Promise.all(
      cart.products.map(async (product) => {
        const productDetails = await Product.findById(product.productId);
        return productDetails ? productDetails.price * product.quantity : 0;
      })
    );

    cart.totalPrice = productsWithPrices.reduce(
      (total, price) => total + price,
      0
    );
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateProductQuantity = async (req, res) => {
  const { productId, quantity, size, color } = req.body;
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart)
      return res.status(404).json({ message: "Giỏ hàng không tìm thấy" });

    const product = cart.products.find(
      (product) =>
        product.productId.equals(productId) &&
        product.color === color &&
        product.size === size
    );
    if (!product)
      return res
        .status(404)
        .json({ message: "Sản phẩm không tồn tại trong giỏ hàng" });

    product.quantity = quantity;
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const addProductToCart = async (req, res) => {
  const { productId, quantity, color, size } = req.body;

  try {
    let cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) {
      cart = new Cart({
        userId,
        products: [{ productId, quantity, color, size }],
        totalPrice: 0,
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

    res.status(200).json(cart);
  } catch (err) {
    console.log(err);

    res.status(400).json({ message: err.message });
  }
};
export const removeProductFromCart = async (req, res) => {
  const { productId, color, size } = req.body;
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart)
      return res.status(404).json({ message: "Giỏ hàng không tìm thấy" });

    const initialLength = cart.products.length;

    cart.products = cart.products.filter((product) => {
      return !(
        product.productId.equals(productId) &&
        product.color === color &&
        product.size === size
      );
    });

    if (cart.products.length === initialLength) {
      return res
        .status(404)
        .json({ message: "Sản phẩm không tồn tại trong giỏ hàng" });
    }

    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteCart = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  try {
    const cart = await Cart.findOneAndDelete({ userId, _id: id });
    if (!cart)
      return res.status(404).json({ message: "Giỏ hàng không tìm thấy" });
    res.json({ message: "Giỏ hàng đã được xóa" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
