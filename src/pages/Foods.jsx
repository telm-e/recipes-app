import React, { useContext } from 'react';
import recepiesContext from '../context/recepiesContext';
import FoodSearchHeader from '../components/FoodSearchHeader';
import FoodSearchResults from '../components/FoodSearchResults';
import Loading from '../components/Loading';

function Foods() {
  const { searchStatus, loading, recepies } = useContext(recepiesContext);
  return (
    <div>
      <FoodSearchHeader />
      { searchStatus && (
        <div>
          { loading ? <Loading /> : (
            <div>
              { recepies.meals === null
                ? global.alert('Sorry, we haven\'t found any recipes for these filters.')
                : (
                  <FoodSearchResults />) }
            </div>)}
        </div>
      )}
    </div>
  );
}

export default Foods;
