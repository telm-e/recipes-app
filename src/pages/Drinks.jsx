import React, { useContext } from 'react';
import recepiesContext from '../context/recepiesContext';
import DrinkSearchHeader from '../components/DrinkSearchHeader';
import DrinkSearchResults from '../components/DrinkSearchResults';
import Loading from '../components/Loading';
import Header from '../components/Header';

function Drinks() {
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
        <Header title="Drinks" search profile />
      </div>
      { isSearchDisabled && (
        <div>
          <div>
            <DrinkSearchHeader />
          </div>
          { searchStatus && (
            <div>
              { loading ? <Loading /> : (
                <div>
                  { recepies.drinks === undefined
                    ? global.alert(notFoundAlert)
                    : (
                      <DrinkSearchResults />) }
                </div>)}
            </div>)}
        </div>
      )}
      ;
    </div>
  );
}

export default Drinks;
