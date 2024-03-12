import styles from './ingredients.module.css';

const RecipeIngredients = () => {
  let ingredientsArray = ["Beef", "Cheese", "Salsa", "Sour Cream", "Lettuce"];

  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul className={styles.ingredientList}>
        <li>{ingredientsArray[0]}</li>
        <li>{ingredientsArray[1]}</li>
        <li>{ingredientsArray[2]}</li>
        <li>{ingredientsArray[3]}</li>
        <li>{ingredientsArray[4]}</li>
      </ul>
    </div>
  );
};

export default RecipeIngredients;