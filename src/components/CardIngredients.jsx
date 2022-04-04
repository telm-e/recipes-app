import React from 'react';
import PropTypes from 'prop-types';

const IngredientCard = ({ index, src, name }) => (
  <div data-testid={ `${index}-ingredient-card` }>
    <img data-testid={ `${index}-card-img` } src={ src } alt={ name } />
    <p data-testid={ `${index}-card-name` }>{ name }</p>
  </div>
);

IngredientCard.propTypes = {
  index: PropTypes.number,
  src: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default IngredientCard;
