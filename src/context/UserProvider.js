import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './userContext';
import { setUserToLocalStorage } from '../services/localStorage/userLocalStorage';

const UserProvider = ({ children }) => {
  const [email, setEmail] = useState('');

  // Setar o state email pra q ele possa ser passado via Provider
  // e ser utilizado dentro da aplicação para identif. do user.
  // Essa fn será chamada no Login
  const setLoggedUser = (loggedEmail) => {
    setEmail(loggedEmail);
    setUserToLocalStorage(loggedEmail);
  };

  const context = { email, setLoggedUser };

  return (
    <UserContext.Provider value={ context }>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default UserProvider;
