import exp from "express";
import { ArticleModel } from "../models/ArticleModel.js";
import { UserTypeModel } from "../models/UserModel.js";
import { checkAdmin } from "../middlewares/checkAdmin.js";
import { verifyToken } from "../middlewares/verifyToken.js";
export const adminRoute = exp.Router();

//Read all articles
adminRoute.get("/articles", checkAdmin, verifyToken, async (req, res) => {
  //get articles from db
  let articles = await ArticleModel.find();
});

//Block  user roles
adminRoute.post("/block-user/:id", async (req, res) => {
  //get user id from parmas
  let userId = req.params.id;

  //check is user exist
  let dbuser = await UserTypeModel.findById(userId);

  //if user does not exist
  if (!dbuser) res.status(404).json({ message: "user does not exist" });

  //check if user is blocked or not
  if (!dbuser.isActive)
    res.status(201).json({ message: "user is blocked only" });

  //if user exist the set is active status to false
  let blockedUser = await UserTypeModel.findByIdAndUpdate(
    userId,
    {
      $set: { isActive: false },
    },
    { new: true },
  );

  //delete password
  delete(blockedUser.password)

  //send response
  res.status(200).json({ message: "user blocked", payoad: blockedUser });
});

//un-block the user
adminRoute.post("/unblock-user/:id", async (req, res) => {
  //get user id from parmas
  let userId = req.params.id;

  //check is user exist
  let dbuser = await UserTypeModel.findById(userId);

  //if user does not exist
  if (!dbuser) res.status(404).json({ message: "user does not exist" });

  if (dbuser.isActive) res.status(201).json({ message: "user is active only" });

  //if user exist the set is active status to false
  let blockedUser = await UserTypeModel.findByIdAndUpdate(
    userId,
    {
      $set: { isActive: true },
    },
    { new: true },
  );

  //send response
  res.status(200).json({ message: "user unblocked", payoad: blockedUser });
});
