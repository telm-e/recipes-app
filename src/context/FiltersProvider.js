import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getDrinkByIngredient from '../services/APIcalls/getDrinkByIngredient';
import FiltersContext from './filtersContext';

const FiltersProvider = ({ children }) => {
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [hasIngredients, setHasIngredients] = useState(false);

  const handleDrinksIngredientCardClick = async (ingredient) => {
    const drinksByIngredients = await getDrinkByIngredient(ingredient);
    const { drinks } = drinksByIngredients;
    const NUM = 12;
    const drinks2Render = drinks.slice(0, NUM);
    setFilteredDrinks(drinks2Render);
    console.log(drinks2Render);
  };

  const context = {
    filteredDrinks,
    handleDrinksIngredientCardClick,
    hasIngredients,
    setHasIngredients,
    setFilteredDrinks,
  };

  return (
    <FiltersContext.Provider value={ context }>
      {children}
    </FiltersContext.Provider>
  );
};

FiltersProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default FiltersProvider;
