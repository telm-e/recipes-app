import React from 'react';
import PropTypes from 'prop-types';

const FoodsDetails = (props) => {
  const { match: { params: { id } } } = props;
  return (
    <div>
      FoodsDetails;
      { id }
    </div>

  );
};

FoodsDetails.propTypes = {
  id: PropTypes.string,
  props: PropTypes.string,
}.isRequired;
export default FoodsDetails;
