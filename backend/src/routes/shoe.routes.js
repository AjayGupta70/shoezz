import express from "express";
import {
  getAllShoes,
  addShoe,
  deleteShoe,
  updateShoe,
} from "../controllers/shoe.controller.js";

const router = express.Router();

router.get("/", getAllShoes);
router.post("/", addShoe);
router.delete("/:id", deleteShoe);
router.patch("/:id", updateShoe);


export default router;
