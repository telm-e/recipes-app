import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function FinishButton(props) {
  const { id, page, isDisabled } = props;
  const [finished, setFinished] = useState({ meals: [], cocktails: [] });

  useEffect(() => {
    const allFinished = JSON.parse(localStorage.getItem('FinishedRecipes'));
    if (allFinished !== null) {
      setFinished({
        ...finished,
        allFinished,
      });
    }
    localStorage.setItem('FinishedRecipes', JSON.stringify(finished));
  }, []);

  const finishedRecepies = () => {
    if (finished[page].length === 0) {
      setFinished({
        ...finished,
        [page]: [id],
      });
    } else {
      setFinished({
        ...finished,
        [page]: [...finished[page], id],
      });
    }
    localStorage.setItem('FinishedRecipes', JSON.stringify(finished));
  };

  return (
    <button
      style={
        {
          backgroundColor: '',
          border: 'none',
          width: '100%',
          height: '8vh',
          letterSpacing: '6px',
          fontWeight: 'bold' }
      }
      type="button"
      onClick={ () => finishedRecepies() }
      disabled={ isDisabled }
    >
      Finish Recipe
    </button>
  );
}

FinishButton.propTypes = {
  id: PropTypes.number,
  page: PropTypes.string,
  isDisabled: PropTypes.bool,
}.isRequired;
