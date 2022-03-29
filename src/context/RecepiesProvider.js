import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecepiesContext from './recepiesContext';

const RecepiesProvider = ({ children }) => {
  const [recepies, setRecepies] = useState([]);

  // Setar o retorno da API de receias pra q ele possa ser passado via Provider
  // e ser utilizado dentro da aplicação para renderizar receitas

  const context = { recepies, setRecepies };

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
