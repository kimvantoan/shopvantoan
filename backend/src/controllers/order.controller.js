import Order from "../models/order.model.js";
import Cart from "../models/cart.model.js";

export const createOrder = async (req, res) => {
  const userId = req.user.id;
  const cart = await Cart.findOne({ userId });
  const products = cart.products;

  try {
    const order = new Order({ userId, products, ...req.body });
    await order.save();
    res.status(201).json({message:"Đặt hàng thành công"});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllOrders = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const orders = await Order.find()
      .populate("userId")
      .populate("products.productId")
      .skip((page - 1) * limit)
      .limit(limit);

    const count = await Order.countDocuments();
    const totalPages = Math.ceil(count / limit);
    res.status(200).json({
      orders,
      pagination: {
        page,
        limit,
        totalPages,
        totalCount: count,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMyOrders = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const orders = await Order.find({ userId: req.user.id }).populate(
      "products.productId"
    );

    const count = orders.length;
    const totalPages = Math.ceil(count / limit);
    res.status(200).json({
      orders,
      pagination: {
        page,
        limit,
        totalPages,
        totalCount: count,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOrderById = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;
  const { role } = req.user;

  try {
    const order = await Order.findById(id)
      .populate("userId")
      .populate("products.productId");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.userId._id.toString() !== userId && role !== "admin") {
      return res
        .status(403)
        .json({ message: "Bạn không có quyền truy cập người dùng này" });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateStatusOrder = async (req, res) => {
  const role = req.user.role;
  const userId = req.user.id;
  const { id } = req.params;
  try {
    const order = await Order.findOne({ _id: id, userId });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.status === "Đã hủy" || order.status === "Đã hoàn thành") {
      res.status(400).json({ message: "Không thể cập nhật trạng thái" });
    }

    order.status = role === "user" ? "Đã hủy" : req.body.status;
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
