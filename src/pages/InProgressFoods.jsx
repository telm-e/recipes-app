import React from 'react';
import PropTypes from 'prop-types';

const InProgressFoods = (props) => {
  const { match: { params: { id } } } = props;
  return (
    <div>
      InProgressFoods;
      { id }
    </div>

  );
};

InProgressFoods.propTypes = {
  id: PropTypes.string,
  props: PropTypes.string,
}.isRequired;
export default InProgressFoods;
