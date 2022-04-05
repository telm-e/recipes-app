const getDrinksByCategory = async (cat) => {
  try {
    const url = `www.thecocktaildb.com/api/json/v1/1/filter.php?c=${cat}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default getDrinksByCategory;
