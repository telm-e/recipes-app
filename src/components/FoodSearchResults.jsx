import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import recepiesContext from '../context/recepiesContext';

function SearchMain() {
  // resgata os dados que armazenam as receitas no estado global
  // do context API
  const { recepies } = useContext(recepiesContext);
  const arrayLength = recepies.meals.length;

  return (
    // renderiza cartões de receitas
    { (loading ? <Loading /> : (
      (arrayLength === 0)
      <main>
        
      </main>
    )}
  )

export default SearchMain;
