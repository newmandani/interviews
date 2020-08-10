import React from "react";
import axios from "axios";
import { NEWS_API_KEY } from "../utils/constants";

export const searchNews = async (props: any) => {
  const { query, setArticles, setFirstArticle } = props;
  // const [errors, setSerror] = useState("");

  return axios
    .get(
      `http://newsapi.org/v2/everything?` +
        `q=${query}&` +
        `sortBy=publishedAt&` +
        `apiKey=${NEWS_API_KEY}`
    )
    .then((response) => {
      setArticles(response.data.articles);
      setFirstArticle(response.data.articles[0]);
      //setSerror(null);
    })
    .catch((error) => {
      //setSerror(error);
      console.log(error);
    });
};
