import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import UserContext from '../context/userContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const history = useHistory();
  const { setLoggedUser } = useContext(UserContext);

  // Controlar submit do form, prevenindo comport. padrão,
  // chamar setLoggedUser pra setar o email do Provider,
  // e redirecionar para pag. Foods.

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedUser(email);
    history.push('/foods');
  };

  return (
  // Componentizar Input e Button, e passo atrib. via props
    <form onSubmit={ handleSubmit }>
      <div>
        <Input
          type="email"
          name="Email"
          data-testid="email-input"
          placeholder="Type your email"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </div>
      <div>
        <Input
          type="password"
          data-testid="password-input"
          name="Password"
          placeholder="*********"
          onChange={ () => {} }
        />
      </div>
      <Button
        type="submit"
        data-testid="login-submit-btn"
        value="Enter"
      />
    </form>
  );
};

export default Login;
