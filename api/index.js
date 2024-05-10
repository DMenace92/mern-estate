import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGOURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  if (!PORT) {
    throw err;
  }
  console.log(`server is running on port: ${PORT}`);
});
