import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { name } = props;
  return (
    <label htmlFor={ name }>
      {name}
      <input
        { ...props }
      />
    </label>
  );
};

Input.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default Input;
