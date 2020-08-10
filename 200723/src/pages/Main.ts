import React, { useState } from "react";

import { SearchBar } from "../components/SearchBar/SearchBar";
import { ArticlesList } from "../components/ArticlesList/ArticlesList";
import { FirstArticle } from "../components/FirstArticle/FirstArticle";

import "./Main.scss";

export const Main = () => {
  const [articles, setArticles] = useState();
  const [firstArticle, setFirstArticle] = useState();

  const setFirst = (article) => {
    return setFirstArticle(article);
  };

  return (
    <div className="mainApp">
      <SearchBar setArticles={setArticles} setFirstArticle={setFirstArticle} />
      <div className="searchResult">
        <ArticlesList collection={articles} setFirst={setFirst} />
        <FirstArticle collection={firstArticle} />
      </div>
    </div>
  );
};
