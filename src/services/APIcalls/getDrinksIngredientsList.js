const getDrinksIngredientsList = async () => {
  try {
    const response = await fetch('www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};

export default getDrinksIngredientsList;
