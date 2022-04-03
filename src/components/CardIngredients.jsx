import React from 'react';

const Card = ({ index, src, name }) => (
  <div data-testid={ `${index}-ingredient-card` }>
    <img data-testid={ `${index}-card-img` } src={ scr } alt="" />
    <p data-testid={ `${index}-card-name` }>{ name }</p>
  </div>
);

export default Card;
