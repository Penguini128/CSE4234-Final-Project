import { useState } from "react";
import { createUseStyles } from "react-jss";
import style from "./Style";
import BackupImage from "./alternate.png";

function RecipeCard({ recipe }) {
  const classes = createUseStyles(style)();
  const [useImage, setImage] = useState(recipe.image);
  const cookTime = formatTime(recipe.cookTime);
  const prepTime = formatTime(recipe.prepTime);

  const backupImage = (e) => {
    console.log("Using backup image!");
    e.target.src = BackupImage;
  };

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
          {cookTime}
          <br />
          <b>Prep Time: </b>
          {prepTime}
          <br />
          <b>Yield: </b>
          {recipe.recipeYield}
        </p>
      </div>
    </div>
  );
}

const formatTime = (duration) => {
  if (!duration) {
    return "00:00"; // catch null values
  }
  const hourString = duration.match(/(\d+)H/); // use regex to capture value from predetermined string pattern
  const minuteString = duration.match(/(\d+)M/);

  const hours = hourString ? String(hourString[1]).padStart(2, "0") : "00";
  const minutes = minuteString
    ? String(minuteString[1]).padStart(2, "0")
    : "00";

  return `${hours}:${minutes}`;
};

export default RecipeCard;
