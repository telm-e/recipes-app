const getFoodByCategory = async (cat) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default getFoodByCategory;
