/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import getDrinksIngredientsList from '../services/APIcalls/getDrinksIngredientsList';
import IngredientCard from '../components/CardIngredients';
import FiltersContext from '../context/filtersContext';

const ExploreDrinksIngredients = () => {
  const [drinksIngredientsList, setDrinksIngredientsList] = useState([]);
  const history = useHistory();
  const { handleDrinksIngredientCardClick,
    setHasIngredients, setFilteredDrinks } = useContext(FiltersContext);

  // Chamar o fetch getDrinksIngredientsList() e setDrinksIngredientsList,
  // as componentDidMount, array sem dependências.
  useEffect(() => {
    (async () => {
      const allIngredientsList = await getDrinksIngredientsList();
      const NUM = 12;
      const ingredientList = allIngredientsList.slice(0, NUM);
      setFilteredDrinks([]);
      setDrinksIngredientsList(ingredientList);
    })();
  }, []);

  const handleIngredientCardClick = (ing) => {
    handleDrinksIngredientCardClick(ing);
    setHasIngredients(true);
    history.push('/drinks');
  };

  return (
    <>
      <div>
        <Header title="Explore Ingredients" search={ false } profile />
      </div>

      {
        drinksIngredientsList.map((ing, i) => (
          <button
            data-testid={ `${i}-ingredient-card` }
            type="button"
            key={ ing }
            onClick={ () => handleIngredientCardClick(ing) }
          >
            <IngredientCard
              name={ ing }
              key={ ing }
              src={ `https://www.thecocktaildb.com/images/ingredients/${ing}-Small.png` }
              index={ i }
            />
          </button>
        ))
      }
    </>
  );
};

export default ExploreDrinksIngredients;
