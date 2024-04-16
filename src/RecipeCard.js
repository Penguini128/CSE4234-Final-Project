import { useState } from "react";
import { createUseStyles } from "react-jss";
import style from "./Style";
import "./alternate.png";

function RecipeCard({ recipe }) {
  const classes = createUseStyles(style)();

  return (
    <section className={classes.productRow} key={recipe.id}>
      <div className={classes.recipeCard}>
        <img
          className={classes.recipeImage}
          src={recipe.image}
          alt={recipe.name}
          onError="this.src='./alternate.png';this.onError=null';"
        />
        <div className={classes.recipeText}></div>
        <h3> {recipe.name} </h3>
        <p>
          <b>Cook Time: </b>
          {recipe.cookTime}
          <br />
          <b>Prep Time: </b>
          {recipe.prepTime}
          <br />
          <b>Yield: </b>
          {recipe.recipeYield}
        </p>
      </div>
    </section>
  );
}

export default RecipeCard;
