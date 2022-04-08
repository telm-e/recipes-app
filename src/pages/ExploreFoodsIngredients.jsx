/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import IngredientCard from '../components/CardIngredients';
import FiltersContext from '../context/filtersContext';
import getTreatedMealsIngredients from '../services/APIcalls/getFoodsIngredientsList';

const ExploreFoodsIngredients = () => {
  const [foodsIngredientsList, setFoodsIngredientsList] = useState([]);
  const history = useHistory();
  const { handleFoodsIngredientCardClick,
    setFilteredFoods, setHasIngredients, setHasFoodIngredient,
  } = useContext(FiltersContext);

  // Chamar o fetch getFoodsIngredientsList() e setFoodsIngredientsList,
  // como componentDidMount, array sem dependências.
  // setHasFoods pra controlar renderização na tela /foods.
  useEffect(() => {
    (async () => {
      const foods = await getTreatedMealsIngredients();
      setFilteredFoods([]);
      setHasIngredients(false);
      setFoodsIngredientsList(foods);
    })();
  }, []);

  const handleIngredientCardClick = (strIngredient) => {
    handleFoodsIngredientCardClick(strIngredient);
    setHasFoodIngredient(true);
    history.push('/foods');
  };

  return (
    <>
      <div>
        <Header title="Explore Ingredients" search={ false } profile />
      </div>

      {
        foodsIngredientsList.map(({ idIngredient, strIngredient, mealThumb }, i) => (
          <button
            data-testid={ `${i}-ingredient-card` }
            type="button"
            key={ idIngredient }
            onClick={ () => handleIngredientCardClick(strIngredient) }
          >
            <IngredientCard
              name={ strIngredient }
              key={ strIngredient }
              src={ mealThumb }
              index={ i }
            />
          </button>
        ))
      }
    </>
  );
};

export default ExploreFoodsIngredients;
