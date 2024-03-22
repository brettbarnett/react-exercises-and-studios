import { useState } from "react";

const RecipeAuthor = () => {
  let authorLink =
    "https://www.thechunkychef.com/family-favorite-baked-mac-and-cheese/";
  let authorPhoto =
    "https://www.thechunkychef.com/wp-content/uploads/2021/02/sidebar-440x259.jpg";
  let authorName = "Amanda";

  return (
    <div>
      <img
        src={authorPhoto}
        alt=""
        style={{ objectFit: "contain", borderRadius: "50%" }}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}></a>
      </div>
    </div>
  );
};

const RecipeIngredients = () => {
  const ingredients = [
    "Dried Elbow Pasta",
    "Butter",
    "All Purpose Flour",
    "Whole Milk",
    "Half and Half",
    "Shredded Medium Cheddar Cheese",
    "Salt",
    "Pepper",
  ];

  let ingredientElements = ingredients.map(function (ingredient) {
    return <li>{ingredient}</li>;
  });
  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul>{ingredientElements}</ul>
    </div>
  );
};

const RecipeDescription = () => {
  return (
    <div>
      <div>
        <h1>Creamy Baked Mac and Cheese</h1>
        <p>
          This baked mac and cheese is a family favorite recipe, loved by both
          children and adults. It uses a combination of cheeses, layered in the
          dish as well as melted into a rich and creamy cheese sauce, for the
          ultimate in cheesy deliciousness! Perfect for a comforting dinner or
          as a holiday side dish!
        </p>
      </div>
      <div className="recipePhotoBlock">
        <RecipeIngredients />
        <RecipeAuthor />
      </div>
    </div>
  );
};

const RecipePhoto = () => {
  return (
    <img
      src="https://www.thechunkychef.com/wp-content/uploads/2018/02/Ultimate-Creamy-Baked-Mac-and-Cheese-fork-680x829.jpg"
      alt="Picture Of A Delicious Bowl Of Mac And Cheese"
      className="imageUpdates"
    />
  );
};

export default function RecipeDisplay() {
  return (
    <div className="recipePhotoBlock">
      <RecipePhoto />
      <div>
        <RecipeDescription />
      </div>
    </div>
  );
}
