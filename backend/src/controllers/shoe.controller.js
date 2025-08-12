import { Shoe } from "../models/shoe.model.js";

// GET  all shoes
export const getAllShoes = async (req, res) => {
  try {
    const shoes = await Shoe.find();
    res.status(200).json(shoes);
  } catch (err) {
    res.status(500).json({ message: "Error fetching shoes", error: err });
  }
};

// POST add shoe
export const addShoe = async (req, res) => {
  try {
    const newShoe = new Shoe(req.body);
    const savedShoe = await newShoe.save();
    res.status(201).json(savedShoe);
  } catch (err) {
    res.status(400).json({ message: "Error adding shoe", error: err });
  }
};


// for just TESTING BULK 


// DELETE shoe
export const deleteShoe = async (req, res) => {
  try {
    const deleted = await Shoe.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Shoe not found" });
    res.status(200).json({ message: "Shoe deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting shoe", error: err });
  }
};

// PATCH update shoe
export const updateShoe = async (req, res) => {
  try {
    const updated = await Shoe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Shoe not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ message: "Error updating shoe", error: err });
  }
};