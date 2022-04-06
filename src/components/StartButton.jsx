import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function StartButton(props) {
  const [isStarted, setIsStarted] = useState(false);
  const { id, page } = props;

  useEffect(() => {
    const allStarted = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (allStarted !== null
      && allStarted[page]
       && Object.keys(allStarted[page]).includes(id)) setIsStarted(true);
  }, [id, page]);

  const recipeInProgress = () => {
    localStorage.setItem('inProgressRecipes', JSON.stringify({ [page]: { [id]: [] } }));
    setIsStarted(true);
  };

  return (
    <button
      style={
        {
          backgroundColor: 'rgb(0,255,0)',
          border: 'none',
          width: '100%',
          height: '8vh',
          letterSpacing: '6px',
          fontWeight: 'bold' }
      }
      type="button"
      onClick={ () => recipeInProgress() }
    >
      {(isStarted) ? 'Continue Recipe' : 'Start Recipe'}
    </button>
  );
}

StartButton.propTypes = {
  id: PropTypes.number,
  page: PropTypes.string,
}.isRequired;
