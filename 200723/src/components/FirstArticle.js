import React from "react";
import "./FirstArticle.scss";

function FirstArticle(props) {
  const { title, source, urlToImage, content } = props.collection
    ? props.collection
    : {};

  return title ? (
    <div className="article">
      <div className="article-title">{title}</div>
      <i>{source ? source.name : null}</i>
      <img className="mainArticleImg" src={urlToImage} alt="" />
      <p>{content}</p>
    </div>
  ) : null;
}

export default FirstArticle;
