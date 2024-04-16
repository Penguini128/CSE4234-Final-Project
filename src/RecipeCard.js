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
      <div className={classes.recipeCard}>
        <img
          className={classes.recipeImage}
          src={useImage}
          alt={recipe.name}
          onError={backupImage}
        />
        <div className={classes.recipeText}>
        <h3 className={classes.recipeName}> {recipe.name} </h3>
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
      </div>
  );
}

export default RecipeCard;
