import exp from "express";
import { registerUser } from "../services/AuthService.js";
import { loginUser } from "../services/AuthService.js";
import Jwt from "jsonwebtoken";
import { userValidationMiddleware } from "../middlewares/UserValidation.js";
import { articleModel } from "../models/ArticleModel.js";
import { upload } from "../config/multer.js";
//-import cloudinary from "../config/cloudinary.js";

export const userRoute = exp.Router();

userRoute.post(
  "/register",
  upload.single("profileImageUrl"),
  async (req, res, next) => {
    let cloudinaryResult;

    try {
      let userObj = req.body;
      console.log("Received user object:", userObj);

      //  Step 1: upload image to cloudinary from memoryStorage (if exists)
      if (req.file) {
        cloudinaryResult = await uploadToCloudinary(req.file.buffer);
      }

      // Step 2: call existing register()
      const newUserObj = await registerUser({
        ...userObj,
        role: "USER",
        profileImageUrl: cloudinaryResult?.secure_url,
      });

      res.status(201).json({
        message: "user created",
        payload: newUserObj,
      });
    } catch (err) {
      // Step 3: rollback
      if (cloudinaryResult?.public_id) {
        await cloudinary.uploader.destroy(cloudinaryResult.public_id);
      }

      next(err); // send to your error middleware
    }
  },
);

//read all articles
userRoute.get("/articles", userValidationMiddleware, async (req, res) => {
  //read all the article from db
  let articles = await articleModel.find({ isArticleActive: true });

  res.status(200).json({ message: "article are", payload: articles });
});

// Add comment for article
userRoute.put(
  "/articles/:id/comments",
  userValidationMiddleware,
  async (req, res) => {
    //get article id from params
    const { id } = req.params;

    //get comment from body
    const commentText = req.body.comment;

    //get user id from payload
    const userId = req.user.userId;

    //update article by adding comment
    const updatedArticle = await articleModel.findByIdAndUpdate(
      id,
      {
        $push: {
          comment: {
            user: userId,
            comment: commentText,
          },
        },
      },
      { new: true },
    );
    //.populate("comment.user"); //populate user details

    if (!updatedArticle) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json({ message: "comment added", payload: updatedArticle });
  },
);

//delete a comment
//(error is if comment id not present also it is giving positive message)
userRoute.delete(
  "/articles/:a_id/comments/:c_id",
  userValidationMiddleware,
  async (req, res) => {
    //get article id from params
    let articleId = req.params.a_id;

    //get comment id from params
    let commentId = req.params.c_id;
    //console.log(articleId,commentId)

    //find article
    let article = await articleModel.findById(articleId);

    if (!article)
      return res.status(404).json({ message: "Article does not exist" });

    //check is article is active or not
    if (!article.isArticleActive)
      return res.status(500).json({ message: "server error try again" });

    //if article exist then find comment
    let comment = article.comment.some((c) => c._id.equals(commentId));

    //if comment does not exist
    if (!comment)
      return res.status(404).json({ message: "comment does not exist" });

    //delete the comment from db
    let deletedComment = await articleModel.findByIdAndUpdate(
      articleId,
      {
        $pull: { comment: { _id: commentId } },
      },
      { new: true },
    );

    if (!deletedComment) res.status(404).json({ message: "comment not found" });

    res
      .status(200)
      .json({ message: "comment deleted :", payload: deletedComment });
  },
);
