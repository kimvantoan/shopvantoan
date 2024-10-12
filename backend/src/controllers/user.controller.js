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
        res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }
};

export const getUserById = async (req, res) => {
    const { id } = req.params;
    
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'không tìm thấy người dùng' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user', error: error.message });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        updates.avatar = result.secure_url;
        const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'không tìm thấy người dùng' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: 'Error updating user', error: error.message });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'không tìm thấy người dùng' });
        }
        res.status(200).json({ message: 'Đã xóa người dùng' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};