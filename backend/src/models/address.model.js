import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  district: { type: String, required: true, trim: true },
  commune: { type: String, required: true, trim: true },
  detail: { type: String, required: true, trim: true },
});

const Address = mongoose.model("Address", addressSchema);

export default Address;
