const getFoodRecipe = async (id) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default getFoodRecipe;
