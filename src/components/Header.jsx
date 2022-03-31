import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import recepiesContext from '../context/recepiesContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header({ title, profile, search }) {
  const { isSearchDisabled, setIsSearchDisabled } = useContext(recepiesContext);
  const history = useHistory();

  return (
    // Faz o direcionamento para a pagina Profile
    <div>
      {profile && (
        <button
          type="button"
          onClick={ () => { history.push('/profile'); } }
        >
          <img
            data-testid="profile-top-btn"
            alt="profileIcon"
            src={ profileIcon }
          />
        </button>
      )}
      <h3
        data-testid="page-title"
      >
        {title}
      </h3>
      {search && (
        // botão de busca que, ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la
        <button
          type="button"
          onClick={ () => {
            setIsSearchDisabled(!isSearchDisabled);
            console.log(isSearchDisabled);
          } }
        >
          <img
            data-testid="search-top-btn"
            alt="searchIcon"
            src={ searchIcon }
          />
        </button>
      )}
      {/* {isDisabled && (
        <div>
          <input type="text" data-testid="search-input" />
        </div>
      )} */}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;
