import express from "express";
import shoeRoutes from "./routes/shoe.routes.js";

const app = express();

app.use(express.json());
app.use("/api/shoes", shoeRoutes);

export default app;

