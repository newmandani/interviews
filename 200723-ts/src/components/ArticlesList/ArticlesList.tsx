import React, { useState } from "react";
import "./ArticlesList.scss";

export interface ArticlesListProps {
  collection: [];
  setArticles: Function;
  setFirstArticle: Function;
}

export interface FirstArticleProps {
  article: ArticleData;
}

export interface ArticleData {
  url: any;
  title: Text;
  source: {
    name: Text;
  };
  content: Text;
  urlToImage: string;
}

export const ArticlesList: React.FC<any> = (props: ArticlesListProps) => {
  const { collection, setFirstArticle } = props;

  if (collection && collection.length > 0) {
    return (
      <div className="articles-list">
        {collection.map((article: ArticleData, key: any) => (
          <li
            key={`${article.url}_${key}`}
            onClick={() => setFirstArticle(article)}
          >
            {article.title}
            <br />
            {article.source ? <i>{article.source.name}</i> : null}
          </li>
        ))}
      </div>
    );
  } else {
    return null;
  }
};
