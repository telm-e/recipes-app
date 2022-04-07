export const setUserToLocalStorage = (email) => {
  localStorage.setItem('user', JSON.stringify({ email }));
  localStorage.setItem('cocktailsToken', '1');
  localStorage.setItem('mealsToken', '1');
};
export const getUserFromLocalStorage = (name) => {
  const data = JSON.parse(localStorage.getItem(name));
  if (!data) return [];
  return data;
};
export const checkFavorite = (id) => {
  const favoriteRecipes = getUserFromLocalStorage('favoriteRecipes');
  if (favoriteRecipes.find((recipe) => recipe.id === id)) {
    return true;
  }
  return false;
};
//  Salva as receitas favoritas no `localStorage` na chave `favoriteRecipes`
export const saveToLocalStorage = (name, payload) => {
  localStorage.setItem(name, JSON.stringify(payload));
};
export const updateRecipes = (id, action, payload) => {
  if (action === 'remove') {
    const favoriteRecipes = getUserFromLocalStorage('favoriteRecipes');
    const updatedFavoriteRecipes = favoriteRecipes.filter((recipe) => recipe.id !== id);
    saveToLocalStorage('favoriteRecipes', updatedFavoriteRecipes);
  }
  if (action === 'add') {
    const favoriteRecipes = getUserFromLocalStorage('favoriteRecipes') || [];
    if (!favoriteRecipes) {
      saveToLocalStorage('favoriteRecipes', [payload]);
    } else {
      saveToLocalStorage('favoriteRecipes', [...favoriteRecipes, payload]);
    }
  }
};
