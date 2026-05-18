import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Article = () => {
  const { articleId } = useParams();
  const location = useLocation();

  const article = location.state?.article;

  return (
    <>
      <h1 className="text-3xl text-center">Article Page</h1>
      <div className="bg-sky-300 p-10 m-20 rounded-2xl shadow-2xl">
        
        <h2 className="pt-0 font-bold py-10">{article?.title}</h2>
        <p>{article.updatedAt}</p>
        <p>Category: {article.category}</p>
        <p>{article?.content}</p>
        
      </div>
    </>
  );
};

export default Article;
