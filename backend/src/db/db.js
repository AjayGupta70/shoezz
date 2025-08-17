import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export const connectDB = async () => {
  //console.log(process.env.MONGODB_URL);
  //I am tony stark 
  // abe 23t4wyre
  // shdrhsdzx
  //sehndrn
  // i am tony stark  but not ironman
  cosnole.log(abc);
  
  console.group(DB_NAME);
  try {
   // const connection = await mongoose.connect("mongodb+srv://prashant:prashant1234@heytesting.q5p1swt.mongodb.net/myAppDB");
   const connection = await mongoose.connect(process.env.MONGODB_URL, { dbName: DB_NAME,
    //(connectionString, optionsObject)
});
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
