import React, { useContext } from 'react';
import recepiesContext from '../context/recepiesContext';
import FoodSearchHeader from '../components/FoodSearchHeader';
import FoodSearchResults from '../components/FoodSearchResults';
import Loading from '../components/Loading';
import Header from '../components/Header';

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
      { isSearchDisabled && (
        <div>
          <div>
            <FoodSearchHeader />
          </div>
          { searchStatus && (
            <div>
              { loading ? <Loading /> : (
                <div>
                  { recepies.meals === null
                    ? global.alert(notFoundAlert)
                    : (
                      <FoodSearchResults />) }
                </div>)}
            </div>)}
        </div>
      )}
      ;
    </div>
  );
}

export default Foods;
