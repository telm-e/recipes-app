import React, { useContext, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import recepiesContext from '../context/recepiesContext';
import getDrinksByName from '../services/APIcalls/getDrinksByName';
import getDrinksByCategory from '../services/APIcalls/getDrinksByCategory';
import DrinkCard from './DrinkCard';

function DrinkMainData() {
  const [data, setData] = useState([]);

  const {
    searchCategory,
  } = useContext(recepiesContext);

  useEffect(() => {
    (async () => {
      // dados para renderizar cards de receitas
      if (searchCategory === '') {
        console.log(searchCategory);
        const recepiesData = await getDrinksByName('');
        const arrLength = recepiesData.drinks.length;
        const MAX_ARR_LENGTH = 12;
        if (arrLength > MAX_ARR_LENGTH) {
          const newArr = recepiesData.drinks.splice(0, MAX_ARR_LENGTH);
          setData(newArr);
        } else {
          const newArr = recepiesData.drinks;
          setData(newArr);
        }
      } else {
        console.log(searchCategory);
        const categoryData = await getDrinksByCategory(searchCategory);
        console.log(categoryData);
        const arrLength = categoryData.drinks.length;
        const MAX_ARR_LENGTH = 12;
        if (arrLength > MAX_ARR_LENGTH) {
          const newArr = categoryData.drinks.splice(0, MAX_ARR_LENGTH);
          setData(newArr);
        } else {
          const newArr = categoryData.drinks;
          setData(newArr);
        }
      }
    })();
  }, [searchCategory]);

  return (
    // renderiza cards de receitas
    <div>
      { (data.map((each, index) => (
        <DrinkCard
          key={ index }
          index={ index }
          id={ each.idDrink }
          img={ each.strDrinkThumb }
          name={ each.strDrink }
        />
      ))
      )}
    </div>
  );
}

export default DrinkMainData;
