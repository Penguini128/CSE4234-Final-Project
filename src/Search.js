import { useState } from "react";
import { createUseStyles } from "react-jss";
import style from "./Style";
import SearchResults from "./SearchResults";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const classes = createUseStyles(style)();

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = async (searchText) => {
    try {
      const query = `/search?keyword=${encodeURIComponent(searchText)}`;
      console.log(query, "query");
      const response = await fetch(query);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      // console.log(data);
      setSearchResults([]);
      setSearchResults(data);
      console.log(searchResults);
    } catch (error) {
      console.error("Error searching recipes:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchText);
  };

  return (
    <div className={classes.bodyItems}>
      <form onSubmit={handleSubmit}>
        <input
          className={classes.input}
          type="text"
          placeholder="&#x1F50D; Find Recipe"
          onChange={handleChange}
        />
      </form>
      <SearchResults searchResults={searchResults} />
    </div>
  );
}

export default Search;
