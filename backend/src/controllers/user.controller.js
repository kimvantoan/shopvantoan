import User from "../models/user.model.js";
import cloudinary from "cloudinary";
export const getAllUsers = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const users = await User.find()
      .skip((page - 1) * limit)
      .limit(limit);

    const count = await User.countDocuments();
    const totalPages = Math.ceil(count / limit);

    res.status(200).json({
      users,
      pagination: {
        page,
        limit,
        totalPages,
        totalCount: count,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving users", error: error.message });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  const role = req.user.role;
  if (id !== userId && role !== "admin") {
    return res
      .status(403)
      .json({ message: "Bạn không có quyền truy cập người dùng này" });
  }
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "không tìm thấy người dùng" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving user", error: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const userId = req.user.id;
  const role = req.user.role;

  if (id !== userId && role !== "admin") {
    return res
      .status(403)
      .json({ message: "Bạn không có quyền truy cập người dùng này" });
  }
  try {
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      updates.avatar = result.secure_url;
    }
    const user = await User.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!user) {
      return res.status(404).json({ message: "không tìm thấy người dùng" });
    }
    res.status(200).json({ user , message: "Cập nhật thành công"});
  } catch (error) {
    res
      .status(400)
      .json({ message: "Cập nhật thất bại"});
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  const role = req.user.role;
  if (id !== userId && role !== "admin") {
    return res
      .status(403)
      .json({ message: "Bạn không có quyền truy cập người dùng này" });
  }
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "không tìm thấy người dùng" });
    }
    res.status(200).json({ message: "Đã xóa người dùng" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting user", error: error.message });
  }
};
