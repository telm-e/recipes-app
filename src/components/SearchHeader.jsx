import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

function SearchHeader() {
  const [searchLabel, setSearchLabel] = useState('');
  const [searchInput, setSearchInput] = useState('');
  console.log([searchInput, searchLabel]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipe"
        onChange={ ({ target }) => setSearchInput(target.value) }
      />
      <div onChange={ ({ target }) => setSearchLabel(target.value) }>
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          name="search"
          id="ingredients"
          value="ingredients"
        />
        Ingredient
        <input
          type="radio"
          name="search"
          data-testid="name-search-radio"
          value="name"
        />
        Name
        <input
          type="radio"
          name="search"
          data-testid="first-letter-search-radio"
          value="first-letter"
        />
        First letter
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Search
      </button>
    </div>);
}

// Button.propTypes = {
//   type: PropTypes.string,
//   value: PropTypes.string,
// }.isRequired;

export default SearchHeader;
