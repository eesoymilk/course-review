import { Router } from "express";
import mongoose from "mongoose";
import Review from "../../models/review.js";

const router = Router();

// Get Reviews
router.get("/", async (req, res) => {
  const reviews = await Review.find().sort("-createdAt");
  res.send(reviews);
});

router.get("/:id", async (req, res) => {
  const blog = await Review.findById(req.params.id);
  res.send(blog);
});

// Add Review
router.post("/", async (req, res) => {
  console.log("adding new review.");
  const newReview = new Review({
    semesterYear: req.body.semesterYear,
    department: req.body.department,
    courseName: req.body.courseName,
    instructor: req.body.instructor,
    credits: req.body.credits,
    title: req.body.title,
    sweetness: req.body.sweetness,
    coolness: req.body.coolness,
    body: req.body.body,
    author: req.body.author,
  });
  console.log(newReview);
  await newReview.save();
  res.sendStatus(201);
});

// Delete Review
router.delete("/:id", async (req, res) => {
  const _id = new mongoose.Types.ObjectId(req.params.id);
  const deleted_res = await Review.remove({ _id });
  console.log(`${deleted_res.deletedCount} review(s) deleted.`);
  res.status(200).send();
});

export default router;

// // Delete Blog
// router.delete(
//   "/:id",
//   checkJwt,
//   guard.check(["write:blogs"]),
//   async (req: Request, res: Response) => {
//     const _id = new mongoose.Types.ObjectId(req.params.id);
//     const deleted_res = await Blog.remove({ _id });
//     console.log(`${deleted_res.deletedCount} post(s) deleted.`);
//     res.status(200).send();
//   }
// );

// // router.delete("", async (req: Request, res: Response) => {
// //   const deleted_res = await Blog.remove({});
// //   console.log(`${deleted_res.deletedCount} post(s) deleted.`);
// //   res.status(200).send();
// // });

// // Update Blog
// router.patch(
//   "/:id",
//   checkJwt,
//   guard.check(["write:blogs"]),
//   async (req: Request, res: Response) => {
//     console.log("updating blog.");
//     const updatedBlogDetails = {
//       title: req.body.title,
//       body: req.body.body,
//       tags: req.body.tags,
//     };
//     const updatedBlogDoc = await Blog.findOneAndUpdate(
//       { id: req.body.id },
//       updatedBlogDetails,
//       { new: true }
//     );
//     res.status(201).send();
//   }
// );
