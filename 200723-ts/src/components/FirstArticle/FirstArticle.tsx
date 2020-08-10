import React from "react";
import "./FirstArticle.scss";
import { ArticleData } from "../ArticlesList/ArticlesList";

export const FirstArticle = (props: any) => {
  const { title, source, content, urlToImage } = props.article || {};

  return title ? (
    <div className="article">
      <div className="article-title">{title}</div>
      {source && source.name ? <i>{source.name}</i> : null}
      <img className="mainArticleImg" src={urlToImage} alt="" />
      <p>{content}</p>
    </div>
  ) : null;
};
