let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe({rating}) {

  return ((rating < 6 && rating > 0) ? <h3>{stars[rating - 1]}</h3> : null);
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
