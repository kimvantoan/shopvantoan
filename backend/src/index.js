import express from "express";
import "dotenv/config";

import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import categoryRotes from "./routes/category.route.js";

import connectDB from "./configs/db.js";
import connectCloudinary from "./configs/cloudinary.js";

connectDB();
connectCloudinary();
const app = express();

app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/category",categoryRotes);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
