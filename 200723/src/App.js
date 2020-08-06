import React, { useState } from "react";
import * as NewsComponents from "./components/NewsComponents";
import "./App.scss";

function App() {
  const [articles, setArticles] = useState();
  const [firstArticle, setFirstArticle] = useState();

  function setFirst(article) {
    setFirstArticle(article);
  }

  return (
    <>
      <NewsComponents.SearchBar
        setArticles={setArticles}
        setFirstArticle={setFirstArticle}
      />
      {articles && (
        <div className="app-style">
          <NewsComponents.ArticlesList
            collection={articles}
            setFirst={setFirst}
          />
          <NewsComponents.FirstArticle collection={firstArticle} />
        </div>
      )}
    </>
  );
}

export default App;
