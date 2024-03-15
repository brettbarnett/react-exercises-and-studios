import recipeData from './recipe.json';

function AuthorInfo() {
  let authorName = <div key={recipeData[0].author}>{recipeData[0].author}</div>;
  let authorImage = recipeData.map((recipe) => {
    return <img src={recipe.authorImage} alt={recipe.author} className="authorImage" />;
  });
  let recipeLink = <a href={recipeData[0].website}>{recipeData[0].website}</a>;
  return <div>{authorName}
    {authorImage[0]}
    {recipeLink}
  </div>;
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 