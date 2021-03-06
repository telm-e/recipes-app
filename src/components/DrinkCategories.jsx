import React, { useContext, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import recepiesContext from '../context/recepiesContext';
import getDrinkCategories from '../services/APIcalls/getDrinkCategories';

function DrinkCategories() {
  const [categories, setCategories] = useState([]);

  const {
    searchCategory,
    setSearchCategory,
  } = useContext(recepiesContext);

  useEffect(() => {
    (async () => {
      const CATEGORIES_NUMBER = 5;
      const recepiesCategories = await getDrinkCategories();
      const cat = recepiesCategories.drinks.slice(0, CATEGORIES_NUMBER);
      setCategories(cat);
    })();
  }, []);

  return (
    // renderiza botões de categorias
    <div>
      { categories.map((each, index) => (
        <button
          id={ each.strCategory }
          key={ index }
          type="button"
          data-testid={ `${each.strCategory}-category-filter` }
          onClick={ () => {
            if (each.strCategory === searchCategory) {
              setSearchCategory('');
            } else {
              setSearchCategory(each.strCategory);
            }
          } }
        >
          { each.strCategory }
        </button>
      ))}
      <button
        id="all"
        key="5"
        type="button"
        data-testid="All-category-filter"
        onClick={ () => setSearchCategory('') }
      >
        All
      </button>
    </div>
  );
}

export default DrinkCategories;
