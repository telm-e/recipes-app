import React, { useContext } from 'react';
import recepiesContext from '../context/recepiesContext';
import FoodSearchHeader from '../components/FoodSearchHeader';
import FoodSearchResults from '../components/FoodSearchResults';
import Loading from '../components/Loading';
import Header from '../components/Header';
import FoodMainData from '../components/FoodMainData';
import FoodCategories from '../components/FoodCategories';
import Footer from '../components/Footer';

function Foods() {
  const {
    searchStatus,
    loading,
    recepies,
    isSearchDisabled,
  } = useContext(recepiesContext);

  const notFoundAlert = 'Sorry, we haven\'t found any recipes for these filters.';

  return (
    <div>
      <div>
        <Header title="Foods" search profile />
      </div>
      { isSearchDisabled
          && <FoodSearchHeader />}
      <FoodCategories />
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
          <FoodMainData />
        )}
      <Footer />
    </div>
  );
}

export default Foods;
