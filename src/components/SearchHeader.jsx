import React, { useContext, useState } from 'react';
// import PropTypes from 'prop-types';
import recepiesContext from '../context/recepiesContext';
import getFoodByIngredient from '../services/APIcalls/getFoodByIngredient';
import getFoodByName from '../services/APIcalls/getFoodByName';
import getFoodByFirstLetter from '../services/APIcalls/getFoodByFirstLetter';

function SearchHeader() {
  const [searchLabel, setSearchLabel] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const { setRecepies } = useContext(recepiesContext);

  const onSearchClick = async () => {
    console.log([searchInput, searchLabel]);
    if (searchLabel === 'ingredient') {
      const recepiesData = await getFoodByIngredient(searchInput);
      setRecepies(recepiesData);
    }
    if (searchLabel === 'name') {
      const recepiesData = await getFoodByName(searchInput);
      setRecepies(recepiesData);
    }
    if (searchLabel === 'first-letter') {
      if (searchInput.length > 1) {
        // eslint-disable-next-line no-alert
        alert('Your search must have only 1 (one) character');
      } else {
        const recepiesData = await getFoodByFirstLetter(searchInput);
        setRecepies(recepiesData);
      }
    }
  };

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
          id="ingredient"
          value="ingredient"
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
        onClick={ onSearchClick }
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
