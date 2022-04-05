import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { index, id, img, name } = props;
  return (
    <Link
      to={ `/foods/${id}` }
      data-testid={ `${index}-recipe-card` }
    >
      <div>
        <img
          data-testid={ `${index}-card-img` }
          src={ img }
          alt={ `${name}` }
        />
        <p data-testid={ `${index}-card-name` }>
          { name }
        </p>
      </div>
    </Link>
  );
};

Card.propTypes = {
  index: PropTypes.number,
  id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default Card;
