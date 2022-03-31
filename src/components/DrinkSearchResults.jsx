import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
import recepiesContext from '../context/recepiesContext';

function DrinkSearchResults() {
  // resgata os dados que armazenam as receitas no estado global
  // do context API
  const { recepies } = useContext(recepiesContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const arrLength = recepies.drinks.length;
    const MAX_ARR_LENGTH = 12;
    if (arrLength > MAX_ARR_LENGTH) {
      const newArr = recepies.drinks.splice(0, MAX_ARR_LENGTH);
      console.log(newArr);
      setData(newArr);
    } else {
      const newArr = recepies.drinks;
      setData(newArr);
    }
  }, [recepies]);

  return (
    <div>
      { (data.length === 1)
          && <Redirect to={ `/drinks/${recepies.drinks[0].idDrink}` } /> }
      { (data.map((each, index) => (
        <div key={ each.idDrink } data-testid={ `${index}-recipe-card` }>
          <img
            data-testid={ `${index}-card-img` }
            src={ each.strDrinkThumb }
            alt={ `${each.strDrink}` }
          />
          <p data-testid={ `${index}-card-name` }>
            {each.strDrink}
          </p>
        </div>
      ))
      ) }
    </div>
  );
}

export default DrinkSearchResults;
