import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { checkFavorite, updateRecipes }
from '../services/localStorage/userLocalStorage';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const ButtonFavorite = ({ id, testid, favoriteRecipe }) => {
  const [favorite, setFavorite] = useState(false);
  useEffect(() => {
    setFavorite(checkFavorite(id));
  }, [id]);

  const handleClick = () => {
    if (favorite) {
      updateRecipes(id, 'remove');
      setFavorite(false);
    } else {
      updateRecipes(id, 'add', favoriteRecipe);
      setFavorite(true);
    }
  };

  return (
    <button type="button" onClick={ handleClick }>
      <img
        src={ favorite ? blackHeartIcon : whiteHeartIcon }
        alt="Favorite Icon"
        data-testid={ testid }
      />
    </button>
  );
};

export default ButtonFavorite;

ButtonFavorite.propTypes = {
  id: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  favoriteRecipe: PropTypes.objectOf(PropTypes.shape).isRequired,
};
