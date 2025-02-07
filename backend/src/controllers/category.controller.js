import Category from "../models/category.model.js";
import Product from "../models/product.model.js";

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Điền đầy đủ thông tin" });
    }
    const exitcategory = await Category.findOne({ name });
    if (exitcategory) {
      return res.status(400).json({ error: "Danh mục đã tồn tại" });
    }
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      categories,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Không tìm thấy danh mục" });
    }
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!category) {
      return res.status(404).json({ error: "Không tìm thấy danh mục" });
    }
    res.json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Không tìm thấy danh mục" });
    }
    await Product.deleteMany({ category: category._id });
    res.status(200).json({ message: "Đã xóa danh mục" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
