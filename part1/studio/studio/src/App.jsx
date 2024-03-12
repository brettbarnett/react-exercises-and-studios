import RecipeDescription from "./components/description.jsx";
import RecipeIngredients from "./components/ingredients.jsx";
import "./App.css";
import RecipePhoto from "./components/photos.jsx";

function App() {
  return (
    <>
      <div className="App">
        <div className="recipePhotoBlock">
          <RecipePhoto />
          <div>
            <RecipeDescription />
            <RecipeIngredients />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
