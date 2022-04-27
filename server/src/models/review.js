import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    semesterYear: { type: String, required: true },
    department: { type: String, required: true },
    courseName: { type: String, required: true },
    instructor: { type: String, required: true },
    credits: { type: Number, required: true },
    title: { type: String, required: true },
    sweetness: { type: Number, required: true },
    coolness: { type: Number, required: true },
    body: { type: String, required: true },
    author: { type: String, required: true },
  },
  { timestamps: true }
);

const ReviewModel = mongoose.model("Review", reviewSchema);

export default ReviewModel;
