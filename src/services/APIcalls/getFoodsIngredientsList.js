const getSlicedMealsIngredients = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
  );
  const { meals } = await response.json();
  const NUM = 12;
  return meals.slice(0, NUM);
};

const treatedIngredientsAndThumb = (meals) => meals.map((meal) => {
  const { strIngredient } = meal;
  return {
    ...meal,
    mealThumb: `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png`,
  };
});

const getTreatedMealsIngredients = async () => {
  const meals = await getSlicedMealsIngredients();
  return treatedIngredientsAndThumb(meals);
};

export default getTreatedMealsIngredients;
