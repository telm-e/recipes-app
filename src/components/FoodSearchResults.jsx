import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
import recepiesContext from '../context/recepiesContext';
import Card from './Card';

function FoodSearchResults() {
  // resgata os dados que armazenam as receitas no estado global
  // do context API
  const { recepies } = useContext(recepiesContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const arrLength = recepies.meals.length;
    const MAX_ARR_LENGTH = 12;
    if (arrLength > MAX_ARR_LENGTH) {
      const newArr = recepies.meals.splice(0, MAX_ARR_LENGTH);
      console.log(newArr);
      setData(newArr);
    } else {
      const newArr = recepies.meals;
      setData(newArr);
    }
  }, [recepies]);

  return (
    <div>
      { (data.length === 1)
          && <Redirect to={ `/foods/${recepies.meals[0].idMeal}` } /> }
      { (data.map((each, index) => (
        <Card
          key={ index }
          index={ index }
          id={ each.idMeal }
          img={ each.strMealThumb }
          name={ each.strMeal }
        />
      ))
      ) }
    </div>
  );
}

export default FoodSearchResults;
