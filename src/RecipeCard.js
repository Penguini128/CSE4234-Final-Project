import { useState } from "react";
import { createUseStyles } from "react-jss";
import style from "./Style";
import BackupImage from './alternate.png';
import Recipe from './Recipe';

function RecipeCard({ recipe }) {
  const classes = createUseStyles(style)();
  const [useImage, setImage] = useState(recipe.image);
  const [popupVisible, setPopupVisiblity] = useState(false);
  const cookTime = formatTime(recipe.cookTime);
  const prepTime = formatTime(recipe.prepTime);

  const backupImage = (e) => {
    e.target.src = BackupImage;
  };

  const setPopupTrue = () => setPopupVisiblity(true);

  const productPopup = (
      <Recipe setPopup={setPopupVisiblity} recipe={recipe} />
    );

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
        <button onClick={setPopupTrue}> Detailed View
        </button>
        {popupVisible ? productPopup : ""}
        </div>
      </div>
    </div>
  );
}

const formatTime = (duration) => {
  if (!duration) {
    return "N/A"; // catch null values
  }
  const hourString = duration.match(/(\d+)H/); // use regex to capture value from predetermined string pattern
  const minuteString = duration.match(/(\d+)M/);

  const hours = hourString ? String(hourString[1]).padStart(2, "0") : "00"; // pads with 0s
  const minutes = minuteString
    ? String(minuteString[1]).padStart(2, "0")
    : "00";

  return `${hours}:${minutes}`;
};

export default RecipeCard;
