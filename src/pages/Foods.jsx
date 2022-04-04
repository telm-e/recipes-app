import React, { useContext, useState, useEffect } from 'react';
import recepiesContext from '../context/recepiesContext';
import FoodSearchHeader from '../components/FoodSearchHeader';
import FoodSearchResults from '../components/FoodSearchResults';
import Loading from '../components/Loading';
import Header from '../components/Header';
import getFoodByName from '../services/APIcalls/getFoodByName';
import getFoodCategorie from '../services/APIcalls/getFoodCategorie';
import Card from '../components/Card';

function Foods() {
  const {
    searchStatus,
    loading,
    recepies,
    isSearchDisabled,
  } = useContext(recepiesContext);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const notFoundAlert = 'Sorry, we haven\'t found any recipes for these filters.';

  useEffect(() => {
    (async () => {
      const recepiesData = await getFoodByName('');
      const CATEGORIES_NUMBER = 5;
      const recepiesCategories = await getFoodCategorie();
      const cat = recepiesCategories.meals.splice(0, CATEGORIES_NUMBER);
      setCategories(cat);
      console.log(categories);
      const arrLength = recepiesData.meals.length;
      const MAX_ARR_LENGTH = 12;
      if (arrLength > MAX_ARR_LENGTH) {
        const newArr = recepiesData.meals.splice(0, MAX_ARR_LENGTH);
        setData(newArr);
      } else {
        const newArr = recepiesData.meals;
        setData(newArr);
      }
    })();
  }, []);

  return (
    <div>
      <div>
        <Header title="Foods" search profile />
      </div>
      { isSearchDisabled
          && <FoodSearchHeader />}
      { categories.map((each, index) => (
        <button
          key={ index }
          type="button"
          data-testid={ `${each.strCategory}-category-filter` }
        >
          { each.strCategory }
        </button>
      ))}
      { searchStatus ? (
        <div>
          { loading ? <Loading /> : (
            <div>
              { recepies.meals === null
                ? global.alert(notFoundAlert)
                : (
                  <FoodSearchResults />) }
            </div>)}
        </div>)
        : (
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
        )}
      ;
    </div>
  );
}

export default Foods;
