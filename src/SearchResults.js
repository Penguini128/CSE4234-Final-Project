import { useState } from "react";

const SearchResult = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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
      setSearchResults(data);
    } catch (error) {
      console.error("Error searching recipes:", error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search Recipes:
        <input type="text" value={searchText} onChange={handleChange} />
      </label>
      <button type="submit">Search</button>
      {searchResults.map((item) => {
        <div key={item.cookTime}> {item.name}</div>;
      })}
    </form>
  );
};

export default SearchResult;
