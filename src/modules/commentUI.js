import commentsCard from './commentsCard.js';
import getComments from './getComments.js';

const commentUI = async (idMeal) => {
  const data = await getComments();
  data.meals.forEach((meal) => {
    if (meal.idMeal === idMeal) {
      commentsCard(meal.strMeal, meal.strTags, meal.strMealThumb, meal.idMeal, meal.strArea);
    }
  });
};

export default commentUI;