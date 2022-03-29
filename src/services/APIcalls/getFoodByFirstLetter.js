const getFoodByFirstLetter = async (firstLetter) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default getFoodByFirstLetter;
