import express from "express";
import review from "./routes/api/review";

const app = express();

app.use("/api/review", review);

app.listen(6969, () => {
  console.log("listening...");
});