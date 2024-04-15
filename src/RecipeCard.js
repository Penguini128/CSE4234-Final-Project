import { useState } from "react";
import { createUseStyles } from "react-jss";
import style from "./Style";

function RecipeCard({ recipe }) {
  const classes = createUseStyles(style)();

  return (
    <section className={classes.productRow} key={recipe.id}>
      <div className={classes.recipeCard}>
        <img className={classes.recipeImage} src={recipe.image} />
        <p> {recipe.name} </p>
        <p> {recipe.cookTime} </p>
        <p> {recipe.prepTime} </p>
        <p> view recipe link </p>
      </div>
    </section>
  );
}

export default RecipeCard;
