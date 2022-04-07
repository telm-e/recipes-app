import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getDrinkByIngredient from '../services/APIcalls/getDrinkByIngredient';
import FiltersContext from './filtersContext';
import getFoodByIngredient from '../services/APIcalls/getFoodByIngredient';

const FiltersProvider = ({ children }) => {
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [hasIngredients, setHasIngredients] = useState(false);
  const [hasFoodIngredient, setHasFoodIngredient] = useState(false);

  const handleDrinksIngredientCardClick = async (ingredient) => {
    const drinksByIngredients = await getDrinkByIngredient(ingredient);
    const { drinks } = drinksByIngredients;
    const NUM = 12;
    const drinks2Render = drinks.slice(0, NUM);
    setFilteredDrinks(drinks2Render);
  };

  const handleFoodsIngredientCardClick = async (ingredient) => {
    const foodsByIngredients = await getFoodByIngredient(ingredient);
    const { meals } = foodsByIngredients;
    const NUM = 12;
    const foods2Render = meals.slice(0, NUM);
    setFilteredFoods(foods2Render);
  };

  const context = {
    filteredDrinks,
    handleDrinksIngredientCardClick,
    hasIngredients,
    setHasIngredients,
    setFilteredDrinks,
    handleFoodsIngredientCardClick,
    filteredFoods,
    setFilteredFoods,
    hasFoodIngredient,
    setHasFoodIngredient,
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
