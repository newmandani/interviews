import React from "react";
import "./FirstArticle.scss";
import { ArticleData } from "../ArticlesList/ArticlesList";

export const FirstArticle = (article: any) => {
  console.log({ ...article }, 0);

  const { title, source, urlToImage, content } = article;
  console.log("!", title, { ...article });
  return title ? (
    <div className="article">
      <div className="article-title">{title}</div>
      {source && source.name ? `<i>${source.name}</i>` : null}
      <img className="mainArticleImg" src={urlToImage} alt="" />
      <p>{content}</p>
    </div>
  ) : null;
};
