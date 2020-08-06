import React from "react";
import "./ArticlesList.scss";

function ArticlesList(props) {
  const { collection, setFirst } = props;
  const setFirstArticle = (article) => setFirst(article);

  return (
    <div className="articles-list">
      {collection && collection.length > 0
        ? collection.map((article, key) => (
            <li key={key} onClick={() => setFirstArticle(article)}>
              {article.title}
              <br />
              <i>{article.source ? article.source.name : null}</i>
            </li>
          ))
        : null}
    </div>
  );
}

export default ArticlesList;
