import express from "express";
import shoeRoutes from "./routes/shoe.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
app.use(express.json());
// console.log("ajay");
app.use("/api/shoes", shoeRoutes);
app.use("/api/auth", authRoutes); 
// console.log("anuj");
export default app;

