import { useState } from "react";
import { createUseStyles } from "react-jss";
import style from "./Style";
import BackupImage from './alternate.png';

function RecipeCard({ recipe }) {
  const classes = createUseStyles(style)();
  const [useImage, setImage] = useState(recipe.image);

  const backupImage = (e) => {
    console.log("Using backup image!");
    e.target.src = BackupImage;
  }

  return (
    <section className={classes.productRow} key={recipe.id}>
      <div className={classes.recipeCard}>
        <img
          className={classes.recipeImage}
          src={useImage}
          alt={recipe.name}
          onError={backupImage}
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
