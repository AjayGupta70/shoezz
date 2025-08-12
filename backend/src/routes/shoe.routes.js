import express from "express";
import {getAllShoes, addShoe,deleteShoe,updateShoe} from "../controllers/shoe.controller.js";
import { protect } from "../middleware/auth.middleware.js";  // Import middleware


const router = express.Router();

// Public route: Anyone can view all shoes
router.get("/", getAllShoes);

// Protected routes: Only authenticated users can add/update/delete
router.post("/", protect, addShoe);           //  Auth required
router.patch("/:id", protect, updateShoe);    //  Auth required
router.delete("/:id", protect, deleteShoe);   //  Auth required

export default router;
