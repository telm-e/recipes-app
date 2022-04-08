const getDrinksIngredientsList = async () => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const data = await response.json();
    const { drinks } = data;
    // Drinks é um arr de obj.
    // Iterar drinks, obtendo só os valores das chaves do obj
    // para formar minha lista de ingredients.
    const arrOfArr = drinks.map((d) => Object.values(d));
    const ingredients = [].concat(...arrOfArr);
    return ingredients;
  } catch (error) {
    return error;
  }
};

export default getDrinksIngredientsList;
