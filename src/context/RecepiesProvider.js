import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecepiesContext from './recepiesContext';

const RecepiesProvider = ({ children }) => {
  const [recepies, setRecepies] = useState({ meals: [], drinks: [] });
  const [searchStatus, setSearchStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSearchDisabled, setIsSearchDisabled] = useState(false);

  // Setar o retorno da API de receias pra q ele possa ser passado via Provider
  // e ser utilizado dentro da aplicação para renderizar receitas

  const context = {
    recepies,
    setRecepies,
    searchStatus,
    setSearchStatus,
    loading,
    setLoading,
    isSearchDisabled,
    setIsSearchDisabled,
  };

  return (
    <RecepiesContext.Provider value={ context }>
      {children}
    </RecepiesContext.Provider>
  );
};

RecepiesProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default RecepiesProvider;
