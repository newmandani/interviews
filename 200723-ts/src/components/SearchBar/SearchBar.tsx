import React, { useState } from "react";
import "./SearchBar.scss";
import { searchNews } from "../../api/Requests";

export interface searchBarProps {
  setArticles: Function;
  setFirstArticle: Function;
}

export const errMsg = (msg: any) => {
  return (
    <div>
      <b>Error occuried:</b>
      <pre>{JSON.stringify(msg)}</pre>
    </div>
  );
};

export const SearchBar = (props: searchBarProps) => {
  const { setArticles, setFirstArticle } = props;

  return (
    <input
      type="text"
      className="input-searchbar"
      onChange={(e) =>
        searchNews({ query: e.target.value, setArticles, setFirstArticle })
      }
    />
  );
};
