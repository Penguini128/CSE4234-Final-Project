import { useState } from "react";
import { createUseStyles } from "react-jss";
import style from "./Style";
import RecipeCard from "./RecipeCard";

function SearchResults({ searchResults }) {
  const classes = createUseStyles(style)();

  return (
    <div className={classes.cardContainer}>
      {searchResults.map((recipe) => {
        return <RecipeCard key={recipe.name} recipe={recipe} />;
      })}
    </div>
  );
}

export default SearchResults;
