import React, { useContext, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import recepiesContext from '../context/recepiesContext';
import getFoodByName from '../services/APIcalls/getFoodByName';
import getFoodByCategory from '../services/APIcalls/getFoodByCategory';
import Card from './Card';

function FoodMainData() {
  const [data, setData] = useState([]);

  const {
    searchCategory,
  } = useContext(recepiesContext);

  useEffect(() => {
    (async () => {
      // dados para renderizar cards de receitas
      if (searchCategory === '') {
        console.log(searchCategory);
        const recepiesData = await getFoodByName('');
        const arrLength = recepiesData.meals.length;
        const MAX_ARR_LENGTH = 12;
        if (arrLength > MAX_ARR_LENGTH) {
          const newArr = recepiesData.meals.slice(0, MAX_ARR_LENGTH);
          setData(newArr);
        } else {
          const newArr = recepiesData.meals;
          setData(newArr);
        }
      } else {
        console.log(searchCategory);
        const categoryData = await getFoodByCategory(searchCategory);
        console.log(categoryData);
        const arrLength = categoryData.meals.length;
        const MAX_ARR_LENGTH = 12;
        if (arrLength > MAX_ARR_LENGTH) {
          const newArr = categoryData.meals.slice(0, MAX_ARR_LENGTH);
          setData(newArr);
        } else {
          const newArr = categoryData.meals;
          setData(newArr);
        }
      }
    })();
  }, [searchCategory]);

  return (
    // renderiza cards de receitas
    <div>
      { (data.map((each, index) => (
        <Card
          key={ index }
          index={ index }
          id={ each.idMeal }
          img={ each.strMealThumb }
          name={ each.strMeal }
        />
      ))
      )}
    </div>
  );
}

export default FoodMainData;
