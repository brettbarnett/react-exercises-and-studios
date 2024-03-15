import recipeData from "./recipe.json";

function IngredientList() {
  let IngredientsList = recipeData[0].ingredients.map((ingredient) => {
    return <li>{ingredient}</li>;
  });

  return (
    <div>
      <h3>Ingredients</h3>
      <ul>{IngredientsList}</ul>
    </div>
  );
}

export default IngredientList;

//import json file for the data
//use a nested map to get inside the inner array
