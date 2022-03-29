import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { type, value } = props;
  return (

    <button
      { ...props }
      type={ type === 'submit' ? 'submit' : 'button' }
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default Button;
