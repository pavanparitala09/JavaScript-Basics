import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import Article from "./Article";
import { useNavigate } from "react-router";

const UserProfile = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [articles, setArticles] = useState([]);

  const navigate = useNavigate()

  const goToArticle = (articleObj) =>{
    console.log(articleObj)
    navigate(`/article/${articleObj._id}`, { state: { article: articleObj } });
    

  }

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);

        //send api request
        let res = await axios.get("http://localhost:3000/user-api/articles", {
          withCredentials: true,
        });

        //get articles details from res
        setArticles(res.data.payload);
      } catch (error) {
        console.log(error.response); //if any error set print error
        setErr(error);
      } finally {
        setLoading(false); //set loading to false
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl font-stretch-50%">Articles</h1>
      {loading && <p>Loading...</p>}

      {err && <p>Error fetching articles</p>}

     <form className="flex justify-around">
  {articles.map((articleObj, index) => (
    <div className="bg-amber-100 p-10 m-5 rounded-2xl shadow-2xl cursor-pointer" onClick={() => goToArticle(articleObj)} key={index}>
      <h2 className="font-bold">{articleObj.title}</h2>
      <p>{articleObj.content}</p>
    </div>
  ))}
</form>
    </div>
  );
};

export default UserProfile;
