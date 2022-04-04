import React from 'react';
import PropTypes from 'prop-types';

const DrinksDetails = (props) => {
  const { match: { params: { id } } } = props;
  return (
    <div>
      Drinks Details
      { id }
    </div>
  );
};
DrinksDetails.propTypes = {
  id: PropTypes.string,
  props: PropTypes.string,
}.isRequired;
export default DrinksDetails;
