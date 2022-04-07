import React, { useContext } from 'react';
import recepiesContext from '../context/recepiesContext';
import FoodSearchHeader from '../components/FoodSearchHeader';
import FoodSearchResults from '../components/FoodSearchResults';
import Loading from '../components/Loading';
import Header from '../components/Header';
import FoodMainData from '../components/FoodMainData';
import FoodCategories from '../components/FoodCategories';
import Footer from '../components/Footer';
import FiltersContext from '../context/filtersContext';

function Foods() {
  const {
    searchStatus,
    loading,
    recepies,
    isSearchDisabled,
  } = useContext(recepiesContext);
  const { filteredFoods, hasFoodIngredient } = useContext(FiltersContext);

  const notFoundAlert = 'Sorry, we haven\'t found any recipes for these filters.';

  const pageDefault = searchStatus
    ? (
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
      <FoodMainData />
    );
  console.log(filteredFoods);
  const filteredMeals = filteredFoods.map(
    ({ strMeal, strMealThumb, idMeal }, i) => (
      <button
        key={ idMeal }
        type="button"
        data-testid={ `${i}-recipe-card` }
      >
        <p data-testid={ `${i}-card-name` }>{strMeal}</p>
        <img
          data-testid={ `${i}-card-img` }
          src={ strMealThumb }
          alt={ strMeal }
        />
      </button>
    ),
  );

  return (
    <div>
      <div>
        <Header title="Foods" search profile />
      </div>
      { isSearchDisabled
          && <FoodSearchHeader />}
      <FoodCategories />

      {
        hasFoodIngredient
          ? (

            filteredMeals

          ) : (

            pageDefault

          )
      }
      <Footer />
    </div>
  );
}

export default Foods;
