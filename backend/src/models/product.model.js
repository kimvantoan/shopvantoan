import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    oldPrice: { type: Number},
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    images: { type: Array, required: true },
    sizes: { type: Array, required: true },
    colors: { type: Array, required: true },
});

const Product = mongoose.model('Product', productSchema);
export default Product;