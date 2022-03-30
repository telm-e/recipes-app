import React, { useContext } from 'react';
import recepiesContext from '../context/recepiesContext';
import DrinkSearchHeader from '../components/DrinkSearchHeader';
import DrinkSearchResults from '../components/DrinkSearchResults';
import Loading from '../components/Loading';

function Drinks() {
  const { searchStatus, loading, recepies } = useContext(recepiesContext);
  return (
    <div>
      <DrinkSearchHeader />
      { searchStatus && (
        <div>
          { loading ? <Loading /> : (
            <div>
              { recepies.drinks === null
                ? global.alert('Sorry, we haven\'t found any recipes for these filters.')
                : (
                  <DrinkSearchResults />) }
            </div>)}
        </div>
      )}
    </div>
  );
}

export default Drinks;
