export const fetchDetails = (categoryOfRecipes, detailId) => {
  console.log(detailId, categoryOfRecipes);
  if (categoryOfRecipes === 'Foods') {
    return (
      fetch(`${FOOD_DETAIL_URL}${detailId}`)
        .then((res) => res.json())
        .then((recipes) => recipes.meals));
  }
  return (
    fetch(`${DRINK_DETAIL_URL}${detailId}`)
      .then((res) => res.json())
  );
};
const getDrinkRecipe = async (id) => {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default getDrinkRecipe;
