import React from "react";
import "./ArticlesList.scss";

type ArticleListProps = {};

export const ArticlesList: React.FC = (props: any) => {
  const { collection, setFirst } = props;
  const setFirstArticle = (article) => setFirst(article);

  if (collection && collection.length > 0) {
    return (
      <div className="articles-list">
        {collection.map((article) => (
          <li key={article.url} onClick={() => setFirstArticle(article)}>
            {article.title}
            <br />
            {article.source ? `<i>${article.source.name}</i>` : null}
          </li>
        ))}
      </div>
    );
  } else {
    return null;
  }
};
