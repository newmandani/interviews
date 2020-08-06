import React from "react";
import axios from "axios";
import "./SearchBar.scss";
import { NEWS_API_KEY } from "../constants/constants";

async function newSearch(props) {
  const { query, setArticles, setFirstArticle } = props;

  await axios
    .get(
      `http://newsapi.org/v2/everything?` +
        `q=${query}&` +
        `from=2020-06-30&` +
        `sortBy=publishedAt&` +
        `apiKey=${NEWS_API_KEY}`
    )
    .then((response) => {
      setArticles(response.data.articles);
      setFirstArticle(response.data.articles[0]);
    })
    .catch((error) => {
      console.log(error);
    });
}

function SearchBar(props) {
  const { setArticles, setFirstArticle } = props;

  return (
    <div className="search-bar">
      <input
        type="text"
        className="input-searchbar"
        onChange={(e) =>
          newSearch({ query: e.target.value, setArticles, setFirstArticle })
        }
      />
    </div>
  );
}

export default SearchBar;
