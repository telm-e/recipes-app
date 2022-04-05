import React, { useContext, useState } from 'react';
// import PropTypes from 'prop-types';
import recepiesContext from '../context/recepiesContext';
import getFoodByIngredient from '../services/APIcalls/getFoodByIngredient';
import getFoodByName from '../services/APIcalls/getFoodByName';
import getFoodByFirstLetter from '../services/APIcalls/getFoodByFirstLetter';

function FoodSearchHeader() {
  // define os estados locais para armazenar o input da pesquisa
  // e o tipo de pesquisa
  const [searchLabel, setSearchLabel] = useState('');
  const [searchInput, setSearchInput] = useState('');

  // resgata a função que armazena as receitas no estado global
  // do context API
  const {
    setRecepies,
    setSearchStatus,
    setLoading,
  } = useContext(recepiesContext);

  const onSearchClick = async () => {
    // para cada caso de label, salva os dados retornados da API
    // no context API
    if (searchLabel === 'ingredient') {
      setLoading(true);
      const recepiesData = await getFoodByIngredient(searchInput);
      console.log(recepiesData);
      setRecepies(recepiesData);
      setSearchStatus(true);
      setLoading(false);
    }
    if (searchLabel === 'name') {
      setLoading(true);
      const recepiesData = await getFoodByName(searchInput);
      setRecepies(recepiesData);
      setSearchStatus(true);
      setLoading(false);
    }
    if (searchLabel === 'first-letter') {
      if (searchInput.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        setLoading(true);
        const recepiesData = await getFoodByFirstLetter(searchInput);
        setRecepies(recepiesData);
        setSearchStatus(true);
        setLoading(false);
      }
    }
  };

  return (
    // renderiza formulário de pesquisa do SearchHeader
    <div>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Search recipe"
        onChange={ ({ target }) => setSearchInput(target.value) } // linha 60 e 62: salva o input e a label de pesquisa no estado local
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

export default FoodSearchHeader;
