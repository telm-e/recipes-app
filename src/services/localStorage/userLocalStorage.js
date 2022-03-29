export const setUserToLocalStorage = (email) => {
  localStorage.setItem('user', JSON.stringify({ email }));
};

export const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem('user'));
