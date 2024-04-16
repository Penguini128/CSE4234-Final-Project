import {createUseStyles} from "react-jss";
import style from "./Style";

function Recipe({ setPopup, recipe }){
    const classes = createUseStyles(style)();
    console.log("hi!");

      const hide = () => {
        setPopup(false);
      };

      return (
        <div>
            <button onClick={hide}>
              X
            </button>
            <div className={classes.recipeCard2}>
              <img className={classes.recipeImage} src={recipe.image}  alt = {recipe.name} onError="this.src='./alternate.png';this.onError=null';"/>
              <h3> {recipe.name} </h3>
              <p> <b>Cook Time:</b> {recipe.cookTime}  </p>
              <p> <b>Prep Time: </b>{recipe.prepTime} </p>
              <p> <b>Yield: </b>{recipe.recipeYield} </p>
              <p> {recipe.description}</p>

              <h3>Ingredients</h3>
              <li>{recipe.ingredients}</li>
          </div>
        </div>
      );
}

export default Recipe;