import React, { useContext, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import recepiesContext from '../context/recepiesContext';
import getFoodCategorie from '../services/APIcalls/getFoodCategorie';

function FoodCategories() {
  const [categories, setCategories] = useState([]);

  const {
    searchCategory,
    setSearchCategory,
  } = useContext(recepiesContext);

  useEffect(() => {
    (async () => {
      // dados para renderizar botões de categoria
      const CATEGORIES_NUMBER = 5;
      const recepiesCategories = await getFoodCategorie();
      const cat = recepiesCategories.meals.slice(0, CATEGORIES_NUMBER);
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

export default FoodCategories;
