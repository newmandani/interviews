import React, { useState } from "react";
import "./SearchBar.scss";
import { newSearch } from "../../api/Requests";

const errMsg = (msg) => {
  return (
    <div>
      <b>Error occuried:</b>
      <pre>{JSON.stringify(msg)}</pre>
    </div>
  );
};

export const SearchBar = (props) => {
  const { setArticles, setFirstArticle } = props;

  return (
    <input
      type="text"
      className="input-searchbar"
      onChange={(e) =>
        newSearch({ query: e.target.value, setArticles, setFirstArticle })
      }
    />
  );
};
