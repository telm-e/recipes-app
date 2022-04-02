import React from 'react';
import PropTypes from 'prop-types';

const InProgressDrinks = (props) => {
  const { match: { params: { id } } } = props;
  return (
    <div>
      InProgressDrinks;
      { id }
    </div>

  );
};

InProgressDrinks.propTypes = {
  id: PropTypes.string,
  props: PropTypes.string,
}.isRequired;
export default InProgressDrinks;
