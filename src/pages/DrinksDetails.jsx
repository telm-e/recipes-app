import React from 'react';
import PropTypes from 'prop-types';

function DrinksDetails(props) {
  const { match: { params: { id } } } = props;
  return (
    <div>
      DrinkDetails;
      { id }
    </div>

  );
}

DrinksDetails.propTypes = {
  id: PropTypes.string,
  props: PropTypes.string,
}.isRequired;

export default DrinksDetails;
