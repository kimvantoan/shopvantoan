import Product from "../models/product.model.js";
import cloudinary from "cloudinary";
import removeAccents from "remove-accents";
const createProduct = async (req, res) => {
  try {
    const images = req.files;
    const imageURL = [];
    for (let image of images) {
      const result = await cloudinary.uploader.upload(image.path);
      imageURL.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
    const product = new Product({ ...req.body, images: imageURL });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

const getProducts = async (req, res) => {
  const {
    page = 1,
    limit = 3,
    q,
    category,
    price,
    size,
    star,
    sort,
  } = req.query;
  // console.log(typeof price);
  // console.log(price);

  try {
    let sortOptions = {};
    if (sort) {
      if (sort === "newest") {
        sortOptions.createdAt = -1;
      } else if (sort === "oldToNew") {
        sortOptions.createdAt = 1;
      } else if (sort === "lowToHigh") {
        sortOptions.price = 1;
      } else if (sort === "highToLow") {
        sortOptions.price = -1;
      }
    }

    let query = {};
    if (q) {
      query.name = {
        $regex: q,
        $options: "i",
      };
    }
    if (category) {
      query.category = { $in: category };
    }
    if (size) {
      query.sizes = { $in: size };
    }
    if (star) {
      const starCoditons = star.map((item) => {
        const minStar = parseInt(item);
        return {
          avgRate: {
            $gte: minStar,
            $lt: minStar + 1,
          },
        };
      });
      query = {
        ...query,
        $or: starCoditons,
      };
    }
    // console.log(
    //  typeof price ==="string" ? [price] : price.map((range) => {
    //     return range
    //     // const [minPrice, maxPrice] = range.split("-").map((p) => parseFloat(p));
    //     // return {
    //     //   minPrice,
    //     //   maxPrice,
    //     // };
    //   })
    // );

    if (price) {
      const priceConditions = typeof price ==="string" ? [price] :price.map((range) => {
        const [minPrice, maxPrice] = range.split("-").map((p) => parseFloat(p));
        return {
          price: {
            $gte: minPrice,
            $lte: maxPrice,
          },
        };
      });
      query = {
        ...query,
        $or: priceConditions,
      };
    }

    const products = await Product.find(query)
      .populate("category")
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(limit);

    if (sort === "aToZ" || sort === "zToA") {
      products.sort((a, b) => {
        const nameA = removeAccents(a.name || "").toLowerCase();
        const nameB = removeAccents(b.name || "").toLowerCase();
        return sort === "aToZ"
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      });
    }

    const count = await Product.countDocuments(query);
    const totalPages = Math.ceil(count / limit);
    res.status(200).json({
      products,
      totalPages,
      currentPage: page,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) {
      return res.status(404).json({ error: "Không tìm thấy sản phẩm" });
    }
    res.json({ product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const images = req.files;
    const imageUrls = [];

    const oldProduct = await Product.findById(id);
    if (oldProduct.images) {
      await Promise.all(
        oldProduct.images.map(async (image) => {
          await cloudinary.uploader.destroy(image.public_id);
        })
      );
    }

    for (let image of images) {
      const result = await cloudinary.uploader.upload(image.path);
      imageUrls.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    const product = await Product.findByIdAndUpdate(
      id,
      { ...req.body, images: imageUrls },
      {
        new: true,
      }
    );

    if (!product) {
      return res.status(404).json({ error: "Không tìm thấy sản phẩm" });
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
    console.log(err);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    if (product.images) {
      for (const image of product.images) {
        await cloudinary.uploader.destroy(image.public_id);
      }
    }

    await Product.findByIdAndDelete(req.params.id);

    res.status(204).json({ message: "Đã xóa sản phẩm" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
