import styles from "./description.module.css";
import React from "react";

const RecipeAuthor = () => {
  let authorLink = "https://cookinginthemidwest.com/blog/beef-tacos-recipe/";
  let authorPhoto =
    "https://cookinginthemidwest.com/wp-content/uploads/2023/06/about-luke-768x1024.jpg";
  let authorName = "Luke Brown";

  return (
    <div className={styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt={authorName} className={styles.imageUpdates} />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Beef Tacos</a>
      </div>
    </div>
  );
};

const RecipeDescription = () => {
  return (
    <div>
      <div>
        <h1>Beef Tacos Recipe</h1>
        <p>The best meal to have on Tuesday!</p>
      </div>
      <RecipeAuthor />
    </div>
  );
};

export default RecipeDescription;
