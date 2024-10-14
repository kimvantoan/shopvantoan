import Category from "../models/category.model.js";
import Product from "../models/product.model.js";

const createCategory = async (req, res) => {
  try {
    const exitcategory = await Category.findOne({ name: req.body.name });
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
  const { page = 1, limit = 10 } = req.query;
  try {
    const categories = await Category.find()
      .skip((page - 1) * limit)
      .limit(limit);
    const count = await Category.countDocuments();
    const totalPages = Math.ceil(count / limit);
    res.json({
      categories,
      pagination: { page, limit, totalPages, totalCount: count },
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
