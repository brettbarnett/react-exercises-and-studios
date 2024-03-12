import styles from './description.module.css';

const RecipePhoto = () => {
  return (
    <img
      src="https://feelgoodfoodie.net/wp-content/uploads/2017/04/Ground-Beef-Tacos-9.jpg"
      alt="A delicious photo of some beef tacos"
      className={styles.imageUpdates}
    />
  );
};

export default RecipePhoto;
