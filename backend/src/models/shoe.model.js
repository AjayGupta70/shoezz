import mongoose from "mongoose";

const shoeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: Number, required: true },
  color: { type: String, required: true },
  inStock: { type: Boolean, required: true },
  quantity: { type: Number, required: true }, 
  description: { type: String }
}, { timestamps: true });

export const Shoe = mongoose.model("Shoe", shoeSchema);
