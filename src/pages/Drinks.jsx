import React, { useContext } from 'react';
import recepiesContext from '../context/recepiesContext';
import DrinkSearchHeader from '../components/DrinkSearchHeader';
import DrinkSearchResults from '../components/DrinkSearchResults';
import Loading from '../components/Loading';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DrinkCategories from '../components/DrinkCategories';
import DrinkMainData from '../components/DrinkMainData';
import FiltersContext from '../context/filtersContext';

function Drinks() {
  const {
    searchStatus,
    loading,
    recepies,
    isSearchDisabled,
  } = useContext(recepiesContext);
  const { filteredDrinks } = useContext(FiltersContext);

  const notFoundAlert = 'Sorry, we haven\'t found any recipes for these filters.';
  console.log(filteredDrinks);
  return (
    <div>
      <div>
        <Header title="Drinks" search profile />
      </div>
      {
        isSearchDisabled && <DrinkSearchHeader />
      }
      <DrinkCategories />

      {
        filteredDrinks?.map(({ idDrink, strDrink, strDrinkThumb }) => (
          <button key={ idDrink } type="button">
            <p>{strDrink}</p>
            <img src={ strDrinkThumb } alt={ strDrink } />
          </button>
        ))
      }

      {
        searchStatus
          ? (
            <div>
              {
                loading ? <Loading /> : (
                  <div>
                    {
                      recepies.drinks === null ? global.alert(notFoundAlert) : (
                        <DrinkSearchResults />)
                    }
                  </div>
                )
              }
            </div>
          ) : (
            <DrinkMainData />
          )
      }
      <Footer />
    </div>
  );
}

export default Drinks;
