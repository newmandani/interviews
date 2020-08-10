import React, { useState, Fragment, Props, FC, cloneElement } from "react";

import { SearchBar } from "../components/SearchBar/SearchBar";
import { FirstArticle } from "../components/FirstArticle/FirstArticle";
import {
  ArticleData,
  ArticlesList,
  ArticlesListProps,
  FirstArticleProps,
} from "../components/ArticlesList/ArticlesList";

import "./Main.scss";

type searchBarProps = {
  setArticles: Function;
  setFirstArticle: Function;
  FirstArticle: Function;
  collection: Array<[]>;
};

export const Main: FC<{}> = () => {
  const [articles, setArticles] = useState<ArticleData | object>();
  const [firstArticle, setFirstArticle] = useState();

  return (
    <div className="mainApp">
      <SearchBar setArticles={setArticles} setFirstArticle={setFirstArticle} />
      <div className="searchResult">
        <ArticlesList collection={articles} setFirstArticle={setFirstArticle} />
        <FirstArticle article={firstArticle} />
      </div>
    </div>
  );
};
