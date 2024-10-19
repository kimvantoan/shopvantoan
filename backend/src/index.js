import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import categoryRotes from "./routes/category.route.js";
import cartRoutes from "./routes/cart.route.js";
import addressRoutes from "./routes/address.route.js";
import orderRoutes from "./routes/order.route.js";

import connectDB from "./configs/db.js";
import connectCloudinary from "./configs/cloudinary.js";

connectDB();
connectCloudinary();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/category",categoryRotes);
app.use("/api/cart", cartRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/order", orderRoutes);


app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
