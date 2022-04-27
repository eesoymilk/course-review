import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import review from "./routes/api/review.js";

// Environment Variables
dotenv.config();
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const PORT = process.env.PORT;
const CLIENT_ORIGIN_URL = process.env.CLIENT_ORIGIN_URL;

// Express Init
const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: CLIENT_ORIGIN_URL,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Authorization", "Content-Type"],
    maxAge: 86400,
  })
);

// Route Controllers
app.use("/api/review", review);

const main = async () => {
  console.log("Connecting...");
  const DB = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@reviews.d9rr3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  await mongoose.connect(DB);
  console.log("DB connected.");
  app.listen(PORT, () => {
    console.log(`Listening to Port ${PORT}.`);
  });
};

main();
