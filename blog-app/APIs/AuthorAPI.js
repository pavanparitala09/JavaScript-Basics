import exp from "express";
import { authenticate, register } from "../services/authService.js";
import { UserTypeModel } from "../models/UserModel.js";
import { ArticleModel } from "../models/ArticleModel.js";
import { checkAuthor } from "../middlewares/checkAuthor.js";
import { verifyToken } from "../middlewares/verifyToken.js";

export const authorRoute = exp.Router();

//Register author(public)
authorRoute.post("/users", async (req, res) => {
  //get user obj from req
  let userObj = req.body;
  //call register
  const newUserObj = await register({ ...userObj, role: "AUTHOR" });
  //send res
  res.status(201).json({ message: "authroe created", payload: newUserObj });
});


//Create article(protected route)
authorRoute.post("/articles", verifyToken('AUTHOR'), async (req, res) => {
  //get article from req
  let article = req.body;

  //create article document
  let newArticleDoc = new ArticleModel(article);
  //save
  let createdArticleDoc = await newArticleDoc.save();
  //send res
  res
    .status(201)
    .json({ message: "article created", payload: createdArticleDoc });
});

//Read artiles of author(protected route)
authorRoute.get(
  "/articles/:authorId",
  verifyToken("AUTHOR"),
  async (req, res) => {
    //get author id
    let aid = req.params.authorId;

    //read atricles by this author which are acticve
    let articles = await ArticleModel.find({
      author: aid,
      isArticleActive: true,
    }).populate("author", "firstName email");
    //send res
    res.status(200).json({ message: "articles", payload: articles });
  },
);

//edit article(protected route)
authorRoute.put("/articles", verifyToken('AUTHOR'), async (req, res) => {
  //get modified article from req
  let { articleId, title, category, content, author } = req.body;
  //find article
  let articleOfDB = await ArticleModel.findOne({
    _id: articleId,
    author: author,
  });
  if (!articleOfDB) {
    return res.status(401).json({ message: "Article not found" });
  }

  //update the article
  let updatedArticle = await ArticleModel.findByIdAndUpdate(
    articleId,
    {
      $set: { title, category, content },
    },
    { new: true },
  );
  //send res(updated article)
  res.status(200).json({ message: "article updated", payload: updatedArticle });
});

//delete(soft delete) or restore article(Protected route)
authorRoute.patch("/delete/:id", verifyToken("AUTHOR"), async (req, res) => {
  //get article id from params
  let articleId = req.params.id;
  let isActive = req.body

  //check if the article present in db or not
  let article = await ArticleModel.findById(articleId);
  
  //if article not present in db send error
  if (!article) res.status(404).json({ message: "article not found" });
 
  //check if article author id and requested author id same or not
  if (article.author.toString != req.user.userId)
    res.status(403).json({ message: "Forbidden .You can only delete your articles" });

  //check and compare the status
  if(article.isArticleActive === isActive){
   return res.json({message:`Article is already ${isActive}`})
  }

  //soft delete or restore the article (set isArticleActive to false)
  article.isArticleActive = isActive;
  await article.save()
  

});

