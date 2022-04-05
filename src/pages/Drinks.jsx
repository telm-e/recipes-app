import React, { useContext, useState, useEffect } from 'react';
import recepiesContext from '../context/recepiesContext';
import DrinkSearchHeader from '../components/DrinkSearchHeader';
import DrinkSearchResults from '../components/DrinkSearchResults';
import Loading from '../components/Loading';
import Header from '../components/Header';
import getDrinksByName from '../services/APIcalls/getDrinksByName';
import DrinkCard from '../components/DrinkCard';
import getDrinkCategories from '../services/APIcalls/getDrinkCategories';

function Drinks() {
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
      const CATEGORIES_NUMBER = 5;
      const recepiesCategories = await getDrinkCategories();
      const cat = recepiesCategories.drinks.splice(0, CATEGORIES_NUMBER);
      setCategories(cat);
      console.log(cat);
      const recepiesData = await getDrinksByName('');
      const arrLength = recepiesData.drinks.length;
      const MAX_ARR_LENGTH = 12;
      if (arrLength > MAX_ARR_LENGTH) {
        const newArr = recepiesData.drinks.splice(0, MAX_ARR_LENGTH);
        console.log(newArr);
        setData(newArr);
      } else {
        const newArr = recepiesData.drinks;
        setData(newArr);
      }
    })();
  }, []);

  return (
    <div>
      <div>
        <Header title="Drinks" search profile />
      </div>
      { isSearchDisabled
          && <DrinkSearchHeader />}
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
              { recepies.drinks === null
                ? global.alert(notFoundAlert)
                : (
                  <DrinkSearchResults />) }
            </div>)}
        </div>)
        : (
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
        )}
      ;
    </div>
  );
}

export default Drinks;
