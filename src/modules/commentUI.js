import commentsCard from './commentsCard.js';

const commentUI = async (idMeal) => {
  const data = await getMeals();
  data.meals.forEach((meal) => {
    if (meal.idMeal === idMeal) {
      commentsCard(meal.strMeal, meal.strTags, meal.strMealThumb, meal.idMeal, meal.strArea);
    };
  });
};

export default commentUI;