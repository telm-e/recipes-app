export const setUserToLocalStorage = (email) => {
  localStorage.setItem('user', JSON.stringify({ email }));
  localStorage.setItem('cocktailsToken', '1');
  localStorage.setItem('mealsToken', '1');
};

export const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem('user'));
