import exp from "express";
import { register, authenticate } from "../services/authService.js";
import { ArticleModel } from "../models/ArticleModel.js";
import { checkUser } from "../middlewares/checkUser.js";
import { verifyToken } from "../middlewares/verifyToken.js";

export const userRoute = exp.Router();

//Register user
userRoute.post("/users", async (req, res) => {
  //get user obj from req
  let userObj = req.body;
  //call register
  const newUserObj = await register({ ...userObj, role: "USER" });
  //send res
  res.status(201).json({ message: "user created", payload: newUserObj });
});


//Read all articles(protected route)
userRoute.get('/articles/:id', verifyToken("user"), async(req,res) =>{
  //get all articles from db
  let articles = await ArticleModel.find({isArticleActive:true})

  //send response
  res.status(200).json({message:"article avalible are:",payload:articles})
})

//Add comment to an article(protected route)
userRoute.put('/article/:id/comment',verifyToken("user"),(req,res) => {

  let articleid = req.params;
  let comment = req.body;
})
